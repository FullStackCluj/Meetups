#!/bin/bash

export JENKINS_MASTER_PASSWORD="NaG5RQ9iSZBqQCme"
export JENKINS_MASTER_USERNAME="slave"
export JENKINS_MASTER_HOST="http://jenkins.fullstackcluj.ro"

# start all containers
docker-compose -p jenkins -f ./compose/slave.yml up --no-build -d
