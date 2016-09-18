FROM node:5

MAINTAINER mkruczek@pgs-soft.com

ARG USERID=1000

RUN usermod -u $USERID www-data && \
    mkdir -p /var/www && \
    mkdir -p /app && \
    chown -R www-data:www-data /var/www && \
    chown -R www-data:www-data /app

RUN npm config set registry https://registry.npmjs.org/ && \
    npm install --allow-root -g -d --silent \
        webpack \
        webpack-merge \
        webpack-dev-server \
        karma \
        protractor \
        typescript \
        rimraf

USER www-data

ADD package.json /app/package.json

RUN cd /app/ && \
    npm cache clear && \
    npm config set registry https://registry.npmjs.org/ && \
    /usr/local/bin/node --stack-size=192000 /usr/local/bin/npm install --no-bin-links --quiet

EXPOSE 3000 8080

WORKDIR /var/www/frontend

COPY entrypoint.sh /entrypoint.sh

CMD ["/bin/bash", "/entrypoint.sh"]
