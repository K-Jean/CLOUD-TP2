# TP2 : Docker

Le but de ce TP sera de créer des images docker du front et du back pour pouvoir lancer vos applications sous docker.

## Prérequis

- Avoir installé [Nodejs](https://nodejs.org/en/)

- Avoir installé [Docker](https://docs.docker.com/engine/install/)

N'hésitez pas à revoir les TP sur Docker (dockerfile, docker-compose)

## Les Questions

### Back

#### Dockerfile

- Le Dockerfile devra être situé dans votre dossier back.

- Le Dockerfile pourra créer une image avec la commande suivante : **docker build -t back**

> Rappel: le -t permet de nommer l'image

- L'image pourra être lancée localement avec la commande suivante : **docker run -p 3000:3000 back**

- Vous pourrez ensuite appeler votre API avec postman pour vérifier son bon fonctionnement

#### Le contenu du Dockerfile

- **Q1:** Un Dockerfile commence toujours par un **FROM** ici lequel ? Complétez votre Dockerfile

- **Q2:** Vous devez ensuite charger votre application dans votre Dockerfile à l'aide de **COPY**

  - Evitez d'inclure le .git ou le node_modules dans votre **COPY => .dockerignore**

- **Q3:** Une fois la copie faite une étape est cruciale, laquelle ? **Indice : RUN**

- **Q4:** Une fois cela fait, il faut indiquer à votre Dockerfile **qu'elle commande il va devoir exécuter** lors du lancement de l'image. Complétez votre Dockerfile.

- **Q BONUS:** chaque étape de votre Dockerfile est un **layer** , si un **layer** change toutes les étapes suivantes change. Il faudrait que si je ne change pas mes dépendances _"package.json"_, mon docker build ne re-télécharge pas les dépendances. Comment faire ? Modifier votre Dockerfile.

BRAVO ! Vous avez votre premier Dockerfile 🎉 Une fois toutes les étapes faites n'hésitez pas à tester avec Postman.

#### Docker-compose

Il est sympa de lancer votre application via la commande docker mais cela n'est pas très pratique. Nous allons donc écrire un docker-compose qui va nous permettre de lancer notre application de façon plus simple.

On pourra à la fin de cette partie lancer notre application avec un **docker-compose up -d**

> Rappel: -d pour daemon permet de lancer votre container en arrière-plan.

Créer un fichier **docker-compose.yml** à la racine.

- **Q5:** Créer un service **back** qui permettra de lancer votre application

  - Un service est défini avec plusieurs données, ici on a besoin de :

    - l'image à utiliser (ici la vôtre) qui sera prise depuis votre dossier back, **indice: chercher le mot clé build dans la doc officielle de docker-compose**

    - le port qui permettra d'exposer un port sur votre machine, ici 3000

Maintenant avec la commande **docker-compose build** et **docker-compose up -d back** vous pouvez tester votre API avec postman.

Nous utilisons notre application avec Sqlite ce qui est bien pour les tests en local mais il serait plus judicieux d'utiliser un autre SGBD pour la production.

Nous allons donc mettre en place MySql sous docker.

- **Q6:** Ajouter un service mysql qui dépendra de l'image officiel mysql, n'oubliez pas de gérer les variables d'environnements => [doc](https://hub.docker.com/_/mysql)
- **Q7:** Maintenant que mysql est présent il vous faut rajouter les variables d’environnement de sequelize (back/config/config.js) dans votre service back de votre docker-compose pour pouvoir communiquer avec la base de données.

```javascript
env: process.env.NODE_ENV, //production
username:  process.env.DB_USERNAME,
password:  process.env.DB_PASSWORD,
database:  process.env.DB_NAME,
host:  process.env.DB_HOSTNAME, //le nom du service mysql (résolution automatique par docker)
use_env_variable:  'DATABASE_URL'
```

Encore une fois BRAVO ! 🎉 Votre service back communique avec votre base de données.

Vous pouvez lancer tous vos services avec la commande : **docker-compose up -d**
