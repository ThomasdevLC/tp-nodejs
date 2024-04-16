Ce projet est une implémentation simple d'un jeu de Pierre-Feuille-Ciseaux où l'utilisateur joue contre le serveur. Le jeu est construit en utilisant Node.js et Express.

Installation
Assurez-vous d'avoir Node.js installé sur votre machine.
Clonez ce dépôt sur votre machine locale.
Dans le répertoire racine du projet, exécutez npm install pour installer toutes les dépendances.
Démarrage
Pour démarrer le serveur, exécutez la commande suivante dans le répertoire racine du projet :

arduino
Copy code
npm run dev
Save to grepper
Le serveur sera démarré et sera accessible à l'adresse http://localhost:3000.

Routes
Jouer un coup
bash
Copy code
GET /game/play/(pierre | feuille | ciseaux)
Save to grepper
Cette route permet à l'utilisateur de jouer un coup contre le serveur. L'utilisateur peut choisir entre "pierre", "feuille" ou "ciseaux" comme choix de coup.

Afficher le score
bash
Copy code
GET /game/score
Save to grepper
Cette route renvoie le score actuel du jeu, indiquant le nombre de parties gagnées, perdues et égalisées.

Réinitialiser le jeu
bash
Copy code
POST /game/reset
Save to grepper
Cette route réinitialise le jeu, remettant le score à zéro.

Mettre à jour le score manuellement
ruby
Copy code
PUT /game/score/:wins/:loses/:ties
Save to grepper
Cette route permet de mettre à jour le score manuellement en spécifiant le nombre de parties gagnées, perdues et égalisées.

Structure du projet
controller/: Ce dossier contient les contrôleurs pour chaque route.
router/: Ce dossier contient les définitions des routes.
validator/: Ce dossier contient les validateurs pour les données d'entrée.
