FROM mysql:5.7.22

WORKDIR /docker-entrypoint-initdb.d

COPY ./schema.sql /docker-entrypoint-initdb.d

ENV MYSQL_DATABASE=overviews \
    MYSQL_ALLOW_EMPTY_PASSWORD='yes'