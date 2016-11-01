#!/bin/bash
echo 'Pulling latest version of "cosminharangus/fullstack-web" from registry'
docker pull cosminharangus/fullstack-web:${TAG}

if [ $? -ne 0 ]; then
  exit 1
fi

echo 'Restarting containers on ' + ${DEPLOY_ENV}
docker-compose  -p fullstack -f ./config/${DEPLOY_ENV}.yml up -d --no-build

if [ $? -ne 0 ]; then
  exit 2
fi

echo 'Clean unused images'
docker rmi $(docker images -q --filter "dangling=true")

echo 'Check available images'
docker images

echo 'Check running containers'
docker ps -a
