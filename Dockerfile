FROM vatusa/base

RUN apk-install nginx supervisor

RUN SSDOCK_VERSION=v0.1.5.1 \
    && wget -O /usr/local/bin/viz-monitor https://github.com/dhawton/docker-viz-monitor/releases/download/$SSDOCK_VERSION/viz-monitor \
    && chmod +x /usr/local/bin/viz-monitor

WORKDIR /app
COPY ./dist /app

COPY ./docker /
