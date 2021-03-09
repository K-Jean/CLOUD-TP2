FROM node:15

#indique dans quel dossier nous allons mettre notre app et cela indique à docker ou executer les commandes
WORKDIR /app

#On execute le npm install avant la copie des fichiers de notre code source
COPY package.json package-lock.json /app/

RUN npm install 

# Copie de tous le dossier (en enlevant les fichiers listés dans le .dockerignore) dans le dossier /app de l'image docker
COPY . /app 

CMD ["node", "index.js"]