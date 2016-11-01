#!groovy
node {
  // Git checkout
  stage 'Checkout'
  checkout scm
  def GIT_TAG = git_tag()

  // Build images with the branch name and the build id remove and
  stage 'Build'
  def BUILD_ID = env.BUILD_ID
  def BRANCH_NAME = env.BRANCH_NAME.replaceAll('/','-')
  def BUILD_TAG = BRANCH_NAME + '-' + BUILD_ID
  def IMAGE_NAME = 'cosminharangus/fullstack-api:' + BUILD_TAG
  def PROXY_NAME = 'cosminharangus/fullstack-proxy:' + BUILD_TAG

  sh 'docker build --force-rm -f ./devops/Dockerfile -t ' + IMAGE_NAME + ' .'
  sh 'docker build --force-rm -t ' + PROXY_NAME + ' ./devops/proxy/'

  try {
    // Test built images
    stage 'Test'
    sh 'docker run --rm ' + IMAGE_NAME + ' npm run test'

    if (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'master') {
      stage 'Release'
      def tag = 'staging'
      def extra_tag = 0
      if (env.BRANCH_NAME == 'master') {
        tag = 'latest'
        extra_tag = GIT_TAG
      }
      registry_push(IMAGE_NAME, 'cosminharangus/fullstack-api', tag, extra_tag)
      registry_push(PROXY_NAME, 'cosminharangus/fullstack-proxy', tag, extra_tag)
    }
  } finally {
    // Cleanup the code
    stage 'Cleanup'
    sh 'docker rmi ' + IMAGE_NAME
    sh 'docker rmi ' + PROXY_NAME
  }
}

/**
 * Push a local image to a Private Docker Registry with a new name
 */
def registry_push(image_id, name, tag, extra_tag) {
  withCredentials([[
    $class: 'UsernamePasswordMultiBinding',
    credentialsId: 'docker_registry',
    usernameVariable: 'REGISTRY_USER',
    passwordVariable: 'REGISTRY_PASS'
  ]]) {
    sh 'docker login -u=$REGISTRY_USER -p=$REGISTRY_PASS'
    sh 'docker tag ' + image_id + ' ' + name + ':' + tag
    sh 'docker push ' + name + ':' + tag
    if (extra_tag != 0) {
      sh 'docker tag ' + image_id + ' ' + name + ':' + extra_tag
      sh 'docker push ' + name + ':' + extra_tag
    }

    sh 'docker logout'
    sh 'docker rmi ' + name + ':' + tag
    if (extra_tag != 0) {
      sh 'docker rmi ' + name + ':' + extra_tag
    }
  }
}

/**
 * Get the git tag for the current commit
 */
def git_tag() {
  def LATEST_TAG = 0
  try {
    LATEST_TAG = sh (
      script: 'git describe --abbrev=0 --exact-match --tags',
      returnStdout: true
    ).trim()
  } catch (e) {
    echo 'Unable to get git tag: ' + e.toString()
    LATEST_TAG = 0
  }

  if (LATEST_TAG == 0) {
    echo 'This commit is not tagged.'
  } else {
    echo 'This commit is tagged with: ' + LATEST_TAG
  }
  return LATEST_TAG
}
