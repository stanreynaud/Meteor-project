# Présentation du backend

## Organisation

Les fichiers du backend concernant les schemas sont dans /database et ceux concernant la BDD sont dans /server.

Le fichier /server/main.js import les schemas.

## Schemas
Nous utilisons deux schemas différent :

* `/database/Images.js` Ce fichier met en place un schema d'une image.
* `/database/Tags.js`   Ce fichier met en place un schema de tags.

Ces pages utilisent Simpl-Schema.

## server

Deux classes sont créé affin de gérer les insertion dans la BDD et la création du tableau de tags.
