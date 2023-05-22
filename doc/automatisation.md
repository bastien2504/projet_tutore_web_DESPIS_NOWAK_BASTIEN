  # Informations inportante pour l'automatisation de l'app
  ### Ajout des informations concernant les données admin dans le fichier adminOk.json sinon beaucoup de test ne pourront pas être executer. De même que pour le fichier adminKo.json
  ### La structure de se project est la suivant
  Il y a un dossier e2e qui contient le code nécessaire à l'execution du projet. 
  - Avec la structure suivante : 
  
    - Le dossiers **'test'** contenant le fichier ou se trouver le test executer.
    - Le dossiers **'pages'** contenant le code du test qui est appellé par le fichier du steps lui correspondant pour otenir les chemin xpath nécessaire à la bonne execution de la step.
    - Le dossiers **'steps'** contenant le code du test qui est appellé par le fichier de test pour executer les diverses actions sur les etapes nécessaire de la pages.

  Il y a un dossier fixtures qui contient le données nécessaire à l'execution des test. 
  
  - Les données sont les suivantes : 
    - Les fichiers des comptes admin des 2 envrironnement
    - Les fichiers des comptes userConnexion des 2 envrironnement
    - Le fichier contenant les informations nécessaire à la création des comptes users
    - Le fichier contenant de mauvais identifiant de connexion