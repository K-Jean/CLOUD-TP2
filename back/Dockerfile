FROM node:15

#indique dans quel dossier nous allons mettre notre app et cela indique à docker ou executer les commandes
WORKDIR /app

# Copie de tous le dossier (en enlevant les fichiers listés dans le .dockerignore) dans le dossier /app de l'image docker
COPY . /app 

RUN npm install 