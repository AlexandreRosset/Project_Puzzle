# Project_Puzzle

## Outils requis:

  - NodeJS (https://nodejs.org/en/download/)
  - npm (normalement installé en même temps que nodejs)
  - WampServer (http://www.wampserver.com/ ou tout autre serveur de database SQL)

## Après téléchargement du projet

###  À taper n'importe où
  - `npm install @angular/cli -g`
  
Cette commande installe angular-cli en général sur la machine

###  Aller dans le répertoire `client`
  - Lancer la commande `npm install`

  Cette commande installe toutes les dépendances nécessaires au projet

###  Aller dans le répertoire `server`
  - Lancer la commande `npm install`

  Cette commande installe toutes les dépendances nécessaires au projet

### Serveur SQL
  - Lancer le serveur de database SQL
  - Créer un compte utilisateur pour l'application
  - Créer une base de donnée 'projectpuzzle'

### Fichier datasources.json
  - Renommer le fichier datasources.exemple en datasources.json
  - Modifier `host` selon l'adresse IP du serveur SQL
  - Modifier `port` selon celui du serveur SQL
  - Modifier `user` et `password` selon ceux du compte que vous avez créé pour l'application

### Création des tables 
  Se rendre dans le dossier `server` puis lancer la commande :
  - `node create-lb-tables.js`

  Cette commande crée toutes les tables nécessaires dans la base de donnée
  
### Lancer l'application
  - Vérifier que le serveur de base de donnée est bien allumé
  - Aller dans le dossier `server` puis lancer la commande :
    - `node server.js`
    
Cette commande lance le serveur

  Une fois le serveur démarré, aller dans le dossier `client` puis lancer la commande :
  - `ng serve`

  Cette commande lance le client et le redémarre automatiquement à chaque modification des fichiers
