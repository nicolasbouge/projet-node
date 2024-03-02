# iut-project

Vous pouvez gérer une bibliothèque de films et d'utilisateurs qui peuvent mettre ces films en favoris ou les enlever.

## Configuration :

- Node.js (v20)
- docker
- Ethereal : https://ethereal.email/

## Installation du projet :

- Clonez le dépôt git
- Installez les dépendances en utilisant 'npm install'
- Créez un fichier `.env` à la racine du projet et Mettre dans le .env :
  MAIL_HOST=smtp.ethereal.email
  MAIL_PORT=587
  MAIL_USER=(adresse mail ethereal)
  MAIL_PASS=(mot de passe ethereal)
  MAIL_SECURE=false
- Démarrez le conteneur MySQL : docker run --name hapi-mysql -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=hapi -e MYSQL_ROOT_PASSWORD=hapi -e MYSQL_DATABASE=user -d -p 3308:3306 mysql:8 mysqld --default-authentication-plugin=mysql_native_password
- Exécutez les migrations :
    - `knex migrate:latest`
- Démarrez le serveur : npm start
- Le serveur est maintenant accessible à l'adresse `http://localhost:3000
- Vous pouvez accéder à la documentation de l'API à l'adresse `http://localhost:3000/documentation`
