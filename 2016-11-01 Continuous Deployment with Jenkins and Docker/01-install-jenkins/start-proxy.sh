#!/usr/bin/env bash

# create project network
docker network create -d bridge nginx-proxy 2> /dev/null

# start all containers
docker-compose -p jenkins -f ./compose/proxy.yml up -d --no-build
