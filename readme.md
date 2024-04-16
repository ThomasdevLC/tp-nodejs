# Jeu de Pierre-Feuille-Ciseaux

Ce projet est une implémentation simple d'un jeu de Pierre-Feuille-Ciseaux où l'utilisateur joue contre le serveur. Le jeu est construit en utilisant Node.js et Express.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt sur votre machine locale.
3. Dans le répertoire racine du projet, exécutez `npm install` pour installer toutes les dépendances.

## Démarrage

Pour démarrer le serveur, exécutez la commande suivante dans le répertoire racine du projet :

Le serveur sera démarré et sera accessible à l'adresse `http://localhost:3000`.

## Routes

Jouer.
`GET /game/play/(pierre | feuille | ciseaux)`
Afficher le score.
`GET /game/score`

Réinitialiser le jeu.
`POST /game/reset`

Mettre à jour le score manuellement.
`PUT /game/score/:wins/:loses/:ties`

## Structure du projet

- `controller/`: Ce dossier contient les contrôleurs pour chaque route.
- `router/`: Ce dossier contient les définitions des routes.
- `validator/`: Ce dossier contient les validateurs pour les données d'entrée.
