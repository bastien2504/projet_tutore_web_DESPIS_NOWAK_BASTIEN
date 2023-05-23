# Informations importante pour l'execution des test par ligne et les différent résultat attendue de cette execution

## Execution et resultat dans l'environement OK

### Pour executer dans cette environement il faut tapez la comande suivant :
* npx cypress run --browser firefox --config baseUrl=http://opencruise-ok.sogeti-center.cloud --env  fileOption=ok

#### Les resultats obtnues suite à l'execution de cette commande sont que tous les test fonctionne avec aucun défaut à signaler par rapport à la difiniton que nous leur avons données. Mais surtout, il permet d'avoir une version correcte de l'execution attendue de l'ancienne version pour voir et analyser le probleme trouver dans la nouvelle version.

## Execution et resultat dans l'environement KO

### Pour executer dans cette environement il faut tapez la comande suivant :
* npx cypress run --browser firefox --config baseUrl=http://opencruise-ko.sogeti-center.cloud --env  fileOption=ko

### Sur les 8 test definit seulement 3 marche sur les 9
- Pour le premiers test, il s'agit de se connecter en tant qu'admin, il n'y a pas de problème car, il faillait juster gerer le changment de fichier utiliser par l'utilisation de la comande pour definir le file Options
  
- Pour le deuxieme test, il s'agit de se connecter en tant qu'utilisateur normal, il n'y a pas de problème car, il faillait juster gerer le changment de fichier utiliser par l'utilisation de la comande pour definir le file Options

- Pour le trosieme test, il s'agit de se connecter en tant qu'utilisateur normal mais avec identifiant invalide, il n'y a pas eu de probleme par rapport aux resultat attendue

- Pour le 4 test, il s'agit de vouloir créer un compte particulier, d'approuver se nouveaux compte puis de s'y connecter.
  -  Anomalie trouvée : 
     -  **Le bouton de validation du formulaire de saisie ne marche pas donc impossible de créer le nouveaux user**.
    ![alt text](../doc/Test%20Open%20Cruise%20--%20Inscription%20compte%20particulier%20et%20Connexion%20du%20compte%20(failed).png))
  - Le reste de etapes n'a pas pu être tester car il necaire d'avoir un nouveau compte pour test les etapes suivant.

- Pour le 5 test, il s'agit de vouloir créer un compte professionnel, d'approuver se nouveaux compte puis de s'y connecter.
  -  Anomalie trouver : 
     -  **Le bouton de validation du formulaire de saisie ne marche pas donc impossible de créer le nouveaux user**.
    ![alt text](../doc/Test%20Open%20Cruise%20--%20Inscription%20compte%20professionel%20et%20Connexion%20du%20compte%20(failed).png)
  - Le reste de etapes n'a pas pu être tester car il necaire d'avoir un nouveau compte pour test les etapes suivant.

- Pour le 6 test, il s'agit de vouloir créer un compte  professionnel et se connecter.
  -  Anomalie trouver : 
     -  **Le bouton de validation du formulaire de saisie ne marche pas donc impossible de créer le nouveaux user**.
    ![alt text](../doc/Test%20Open%20Cruise%20--%20Inscription%20compte%20professionel%20et%20Echec%20de%20Connexion%20au%20compte%20car%20bloque%20(failed).png)
  - Le reste de etapes n'a pas pu être tester car il necaire d'avoir un nouveau compte pour test les etapes suivant.*
  
- Pour le 7 test, il s'agit de vouloir faire créer un compte profesionnel et de lui ajoute un représentant 
  -  Anomalie trouver : 
     -  **L'erreur vient du fait qu'il n'y pas la case pour rajouter un second représentant**.
    ![alt text](../doc/Test%20Open%20Cruise%20--%20Inscription%20compte%20professionel%20Avec%202%20représentant%20(failed).png)
  - Le reste de etapes n'a pas pu être tester car il necaire d'avoir un nouveau compte pour test les etapes suivant.

- Pour le 8 test, il s'agit de vouloir faire une recherche avec un mots clées valide sur la liste des croisières
  -  Anomalie trouver : 
     -  **Lors de la recherche, il n'est trouver aucun élément car il n'y a pas de croisire, en essayant d'en ajouter pour pouvoir recherche, j'ai découvert que l'ajout ne marche pas aussi**.
    ![alt text](../doc/Test%20Open%20Cruise%20--%20Recherche%20une%20croisiere%20par%20un%20mots%20cl%C3%A9es%20est%20affiche%20aux%20moins%20un%20resultat%20(failed).png)

- Pour le 9 test, il s'agit de vouloir faire une recherche avec un mots clées invalide sur la liste des croisières donc n'affiche aucun resultat
  - Il ne trouve aucune anomalies, mais par contre la liste des croisiere étant valide, ce test nous permet juste de tester la recherche sans avoir besoins de recherche des mots cles invalide.