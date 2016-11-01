#!/bin/bash
echo 'Pulling latest version of "cosminharangus/fullstack-proxy" and "cosminharangus/fullstack-api" from registry'
docker pull cosminharangus/fullstack-proxy:${TAG}
docker pull cosminharangus/fullstack-api:${TAG}

if [ $? -ne 0 ]; then
  exit 1
fi

echo 'Restarting infrastructure containers on ' + ${DEPLOY_ENV}
docker-compose -p fullstack -f ./config/${DEPLOY_ENV}/infrastructure.yml up -d --no-build
if [ $? -ne 0 ]; then
  exit 2
fi

echo 'Restarting service containers on ' + ${DEPLOY_ENV}
docker-compose -p fullstack -f ./config/${DEPLOY_ENV}/start.yml up -d --no-build
if [ $? -ne 0 ]; then
  exit 3
fi

echo 'Restarting proxy container on ' + ${DEPLOY_ENV}
docker-compose -p fullstack -f ./config/${DEPLOY_ENV}/infrastructure.yml restart proxy

if [ $? -ne 0 ]; then
  exit 4
fi

echo 'Clean unused images'
docker rmi $(docker images -q --filter "dangling=true")

echo 'Check available images'
docker images

echo 'Check running containers'
docker ps -a
