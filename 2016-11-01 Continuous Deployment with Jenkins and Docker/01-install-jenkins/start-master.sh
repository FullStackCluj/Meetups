#!/bin/bash

export MAIN_DOMAIN="jenkins.fullstackcluj.ro"

# start all containers
docker-compose -p jenkins -f ./compose/master.yml up --no-build -d
