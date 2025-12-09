# oConverter suite

Optimisons notre interface en découpant en sous composants.
Si tu n'as pas terminé le challenge d'hier, récupère le code de la correction sur le repo du prof.

## Étape 1 : Création du composant Footer

A chaque fois que l'event click du bouton arrondir survient, le state `isRounded` est modifié donc TOUT le composant App refait un rendu !
Ce n'est pas très optimisé, on va créer un composant Footer contenant uniquement le resultat et ayant son propre état local. Ainsi quand isRounded sera modifié il n'y aura QUE le composant Footer qui refera son rendu.

Le composant Footer aura besoin de savoir quelle est la devise selectionnée donc il faudra la lui envoyer via une prop.

- Créé un composant Footer qui renvoi le JSX du footer
- Déplace le state isRounded de App dans Footer

## Étape 2 : Création du composant Currency

Sur chaque li de devise, on veut ajouter le taux arrondi ainsi qu'un boutton pour l'afficher ou le cacher. On va créer un composant Currency qui s'occupe du JSX d'un li et qui possedera un état local "isRateDisplayed".

- Créé un composant Currency qui renvoi le li d'une devise accompagné du taux
- Ajoute un bouton "afficher/cacher" le taux
- Ajoute un état local au composant Currency
- utilise le pour piloter l'affichage du taux
- modifie le au clique sur le bouton "afficher/cacher"

Résultat attendu : 

![afficher-cacher-taux](https://github.com/user-attachments/assets/8267330b-f116-4ddc-b95c-804bbe0a9882)


## Étape 3 : Plus de découpage

Créé des sous composant pour les morceaux d'IU qu'il te semble pertinent d'isoler.