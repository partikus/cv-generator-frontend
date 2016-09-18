FROM node:5

MAINTAINER mkruczek@pgs-soft.com

ARG USERID=1000

RUN usermod -u $USERID www-data && \
    mkdir -p /var/www && \
    mkdir -p /app && \
    chown -R www-data:www-data /var/www && \
    chown -R www-data:www-data /app

RUN npm config set registry https://registry.npmjs.org/ && \
    npm install --allow-root -g -d --silent webpack && \
    npm install --allow-root -g -d --silent webpack-merge && \
    npm install --allow-root -g -d --silent webpack-dev-server && \
    npm install --allow-root -g -d --silent karma && \
    npm install --allow-root -g -d --silent protractor && \
    npm install --allow-root -g -d --silent typescript && \
    npm install --allow-root -g -d --silent rimraf

USER www-data

ADD package.json /app/package.json

RUN cd /app/ && \
    npm cache clear && \
    npm config set registry https://registry.npmjs.org/ && \
    /usr/local/bin/node --stack-size=128000 /usr/local/bin/npm install --no-bin-links --quiet

WORKDIR /var/www/frontend

COPY entrypoint.sh /entrypoint.sh

CMD ["/bin/bash", "/entrypoint.sh"]