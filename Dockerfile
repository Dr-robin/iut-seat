FROM mhart/alpine-node:8

ADD ./ /var/iut/

WORKDIR /var/iut

ENTRYPOINT ["yarn", "start"]