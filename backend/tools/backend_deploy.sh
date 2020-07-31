#!/bin/bash
set -e
set -x
cd "$(dirname $BASH_SOURCE)/.."

pwd

export HOSTS="54.157.139.9"
export CONTAINER_CMD="npm run beta_docker"


export PROJECT_NAME=${PROJECT_NAME:-`basename "$PWD"`}
export IMAGE_TAG=${IMAGE_TAG:-"local-`git rev-parse --short HEAD`"}
export CONTAINER_RUN_OPTS="-d --restart always"
export HOSTS=${HOSTS:=54.157.139.9}
export GREEN='\033[0;32m'
export PUBLISHING="true"

if [[ "$BRANCH_NAME" != "" && "$BUILD_NUMBER" != "" ]]; then
    export IMAGE_TAG="${BRANCH_NAME}-${BUILD_NUMBER}-`git rev-parse --short HEAD`"
fi

docker image build \
    -t $PROJECT_NAME:$IMAGE_TAG \
    -t $PROJECT_NAME:latest \
    -f Dockerfile_ci .

echo "########################## Built image ##########################"

aws ecr create-repository --region us-east-1 --repository-name ${PROJECT_NAME} >& /dev/null || echo 'Image repository already exists on aws (probably)'
$(aws ecr get-login --no-include-email --region us-east-1)
export IMAGE_NAME=$(aws ecr describe-repositories --repository-names $PROJECT_NAME --output text --region us-east-1 --query 'repositories[*].repositoryUri')
docker image tag $PROJECT_NAME:latest $IMAGE_NAME:latest
docker image tag $PROJECT_NAME:latest $IMAGE_NAME:$IMAGE_TAG
docker image push $IMAGE_NAME:latest
docker image push $IMAGE_NAME:$IMAGE_TAG

echo "################# Uploaded docker image to AWS ##################"
echo "Pushed image $IMAGE_NAME:latest"
echo "Pushed image $IMAGE_NAME:$IMAGE_TAG"


for HOST in $HOSTS; do
    rdocker ubuntu@${HOST} "
        echo -e '${GREEN}################# ${HOST} logs #################' &&
        docker pull $IMAGE_NAME:$IMAGE_TAG &&
        ./tools/container_run.sh &&
        timeout 5s docker container logs -f --tail 10 $PROJECT_NAME;
        docker container ls | grep '$PROJECT_NAME';
    "
done