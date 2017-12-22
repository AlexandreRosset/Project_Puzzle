# Project_Puzzle

outils requis:

  - NodeJS (https://nodejs.org/en/download/)
  - npm (normalement installé en même temps que nodejs)
  - wampserver (ou tout autre serveur de database SQL)

après téléchargement du projet:

  à taper n'importe où:
  - npm install @angular/cli -g

  Installe angular-cli en général sur la machine

  aller dans le répertoire client:
  - npm install

  Installe toutes les dépendances nécessaires au projet

  aller dans le répertoire server:
  - npm install

  Installe toutes les dépendances nécessaires au projet

  lancer le serveur de database SQL et créer un compte utilisateur pour l'application ainsi qu'une base de donnée 'projectpuzzle'.

  ensuite renommer le fichier datasources.exemple en datasources.json.

  modifier 'host' selon l'adresse IP du serveur SQL

  modifier 'port' selon celui du serveur SQL

  modifier 'user' et 'password' selon ceux du compte que vous avez créé pour l'application

  dans server:
  - node create-lb-tables.js

  Crée toutes les tables nécessaires dans la base de donnée

pour faire tourner l'application:

  vérifier que le serveur de base de donnée est bien allumé

  aller dans le serveur:
  - node server.js

  lance le serveur

  aller dans le client APRES QUE LE SERVEUR AIT DEMMARE
  - ng serve

  lance le client et le redémarre automatiquement à chaque modification des fichiers
