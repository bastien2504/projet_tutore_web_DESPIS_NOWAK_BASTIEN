# Liste de test à automatiser

<style type="text/css">
.tg  {
    border-collapse:collapse;   border-spacing:0;
}
.tg td{
    border-color:black;     border-style:solid;     border-width:1px; 
    font-family:Arial, sans-serif;  font-size:14px;
    overflow:hidden;    padding:10px 5px;       word-break:normal;
}
.tg th{
    border-color:black;     border-style:solid;     border-width:1px;
    font-family:Arial, sans-serif;  font-size:14px;     font-weight:normal; 
    overflow:hidden;    padding:10px 5px;   word-break:normal;
}
.tg .tg-0pky{
    border-color:inherit;   text-align:left;    vertical-align:top;
}

</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">TEST ID</th>
    <th class="tg-0pky">TEST NAME</th>
    <th class="tg-0pky">TEST DESCRIPTION</th>
    <th class="tg-0pky">TEST TYPE</th>
    <th class="tg-0pky">TEST TAG</th>
    <th class="tg-0pky">PREREQUISITES</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">001</td>
    <td class="tg-0pky">Connexion Admin</td>
    <td class="tg-0pky">Connexion avec des identifiants admin valide</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin</td>
  </tr> 
  <tr>
    <td class="tg-0pky">002</td>
    <td class="tg-0pky">Connexion User</td>
    <td class="tg-0pky">Connexion avec des identifiant user valide</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">003</td>
    <td class="tg-0pky">Connexion User</td>
    <td class="tg-0pky">Connexion avec des identifiant user invalide</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Invalide indentifiants admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">004</td>
    <td class="tg-0pky">Inscription compte particulier et Connexion du compte</td>
    <td class="tg-0pky">Inscription d'un nouveau compte particulier et validation du nouveau compte par un compte admin puis on se connecte sur le nouveau compte</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Inscription<br>Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin
    <br>Information necessaires à la création du compte particulier</td>
  </tr>
  <tr>
    <td class="tg-0pky">005</td>
    <td class="tg-0pky">Inscription compte professionel et Connexion du compte</td>
    <td class="tg-0pky">Inscription d'un nouveau compte professionel et validation du nouveau compte par un compte admin puis on se connecte sur le nouveau compte</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Inscription<br>Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin
    Information necessaires à la création du compte professionel</td>
  </tr>
  <tr>
    <td class="tg-0pky">006</td>
    <td class="tg-0pky">Inscription compte professionel et Connexion du compte</td>
    <td class="tg-0pky">Inscription d'un nouveau compte professionel et on essaye de se connecte avec le nouveaux user, mais le compte n'est toujours pas valider</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Inscription<br>Connexion</td>
    <td class="tg-0pky">Information necessaires à la création du compte professionel</td>
  </tr>
  <tr>
    <td class="tg-0pky">007</td>
    <td class="tg-0pky">Rechercher une nouvelle croisiere par mot clées</td>
    <td class="tg-0pky">Recherche une croisiere par un mots clées est affiche un resultat</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Recherche croisière</td>
    <td class="tg-0pky"> Compte User Utiliser et Mots clées à utiliser dans la recherche valide</td>
  </tr>
  <tr>
    <td class="tg-0pky">008</td>
    <td class="tg-0pky">Rechercher une nouvelle croisiere par mot clées</td>
    <td class="tg-0pky">Recherche une croisiere par un mots clées est n'affiche aucun resultat</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Recherche croisière</td>
    <td class="tg-0pky"> Compte User Utiliser et Mots clées à utiliser dans la recherche invalide </td>
  </tr>
</tbody>
</table>