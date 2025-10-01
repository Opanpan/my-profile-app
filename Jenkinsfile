pipeline {
    agent any

    environment {
        PROJECT_NAME = "my-profile-app"
        PROJECT_DIR = "/home/apps"
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
                sh "${env.DOCKER_COMPOSE} build --no-cache ${PROJECT_NAME}"
            }
        }

        stage('Deploy Container') {
            steps {
                sh "${env.DOCKER_COMPOSE} up -d ${PROJECT_NAME}"
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
