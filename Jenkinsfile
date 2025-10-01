pipeline {
    agent any

    environment {
        PROJECT_NAME = "my-profile-app"
        PROJECT_DIR = "/home/apps/my-profile-app"
        DOCKER_COMPOSE = "docker-compose -f ${PROJECT_DIR}/docker-compose.yml"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("${env.PROJECT_DIR}") {
                    sh "${env.DOCKER_COMPOSE} build --no-cache"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                dir("${env.PROJECT_DIR}") {
                    sh "${env.DOCKER_COMPOSE} up -d"
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful for ${env.PROJECT_NAME}"
        }
        failure {
            echo "❌ Deployment failed for ${env.PROJECT_NAME}"
        }
    }
}
