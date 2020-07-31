#!/bin/bash
set -e
cd "$(dirname $BASH_SOURCE)/.."

export PROJECT_NAME=${PROJECT_NAME:-`basename "$PWD"`}
export IMAGE_NAME=${IMAGE_NAME:-$PROJECT_NAME}
export IMAGE_TAG=${IMAGE_TAG:-"local-`git rev-parse --short HEAD`"}

docker container rm -f ${PROJECT_NAME} >& /dev/null || echo "No container removal needed"

docker container run $CONTAINER_RUN_OPTS \
    --net=host \
    -v /var/log/fiap/$PROJECT_NAME:/app/logs \
    --name $PROJECT_NAME \
    $IMAGE_NAME:$IMAGE_TAG \
    $CONTAINER_CMD