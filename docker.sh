#!/bin/bash

export TASK_NAME=$1;
export APP_VERSION=$(echo $(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",\r]//g'))
echo "App image version: $APP_VERSION"
export APP_NAME=$(echo $(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[",\r]//g'))
echo $APP_NAME;
export USERID=$(id -u);
echo "User ID: $USERID";

function runBashInsideImage {
    docker-compose run --service-ports --entrypoint /bin/bash frontend
}

function buildProject {
    if docker history -q "${APP_NAME}:${APP_VERSION}" > /dev/null 2>&1; then
        echo "${APP_NAME}:${APP_VERSION} exists"
    else
        docker build -t "${APP_NAME}:${APP_VERSION}" --build-arg USERID=$USERID .
    fi
    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    BUILD_STATUS=$(docker-compose up frontend)
    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    echo "$BUILD_STATUS";
    if echo "$BUILD_STATUS" | grep -q "exited with code 1"; then
            return 1;
        else
            return 0;
    fi
}

function runUnitTests {
    if ! docker history -q "${APP_NAME}:${APP_VERSION}" > /dev/null 2>&1; then
        buildProject
    fi

    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    BUILD_STATUS=`docker-compose up unit`
    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    echo "$BUILD_STATUS";
    if echo "$BUILD_STATUS" | grep -q "exited with code 1"; then
            return 1;
        else
            return 0;
    fi
}

function runAcceptanceTests {
    if ! docker history -q "${APP_NAME}:${APP_VERSION}" > /dev/null 2>&1; then
        buildProject
    fi

    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    docker-compose up -d hub
    docker-compose up -d firefox
    docker-compose up -d chrome
    sleep 20;
    BUILD_STATUS=`docker-compose up e2e`
    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    echo "$BUILD_STATUS";
    if echo "$BUILD_STATUS" | grep -q "exited with code 1"; then
            return 1;
        else
            return 0;
    fi
}

function gulpServe {
    if ! docker history -q "${APP_NAME}:${APP_VERSION}" > /dev/null 2>&1; then
        buildProject
    fi
    docker-compose kill > /dev/null 2>&1
    docker-compose rm -f -v > /dev/null 2>&1
    docker-compose -f docker-compose.yml -f docker-compose.local.yml run --service-ports -d --entrypoint bash frontend /var/www/frontend/entrypoint_serve.sh
}

if [[ $TASK_NAME == 'build' ]]
    then
        buildProject
fi

if [[ $TASK_NAME == 'unit' ]]
    then
        runUnitTests
fi

if [[ $TASK_NAME == 'e2e' ]]
    then
        runAcceptanceTests
fi

if [[ $TASK_NAME == 'run' ]]
    then
        runBashInsideImage
fi

if [[ $TASK_NAME == 'serve' ]]
    then
        gulpServe
fi


if [[ $TASK_NAME == '' ]]; then
    echo -e "\n\033[0;31mAll tasks are running within docker containers !!! \033[0m\n"
    echo -e "Available commands:";
    echo -e "'build' \t- is running 'gulp build'";
    echo -e "'unit'  \t- is running unit tests";
    echo -e "'e2e'   \t- is running e2e tests";
    echo -e "'run'   \t- is running docker container in attach mode (you will be logged in)";
    echo -e "'serve' \t- is running 'gulp server' task, app config available in 'docker-compose.local.yml' that extends from 'docker-compose.yml'";
fi

exit $?