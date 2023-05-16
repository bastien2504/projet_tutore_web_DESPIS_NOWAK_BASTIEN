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
    <td class="tg-0pky">Connect Admin</td>
    <td class="tg-0pky">Connexion avec des identifiants admin valide</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">002</td>
    <td class="tg-0pky">Connection Admin</td>
    <td class="tg-0pky">Connexion avec des identifiant admin invalide</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Invalide indentifiants  admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">003</td>
    <td class="tg-0pky">Connection User</td>
    <td class="tg-0pky">Connexion avec des identifiant user valide</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">004</td>
    <td class="tg-0pky">Connection User</td>
    <td class="tg-0pky">Connexion avec des identifiant user invalide</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Connexion</td>
    <td class="tg-0pky">Invalide indentifiants  admin</td>
  </tr>
  <tr>
    <td class="tg-0pky">005</td>
    <td class="tg-0pky">Incription User et Connexion du compte</td>
    <td class="tg-0pky">Inscription d'un nouveau user et validation du compte par un compte admin puis on se connecte avec le nouveaux user</td>
    <td class="tg-0pky">Test Passant</td>
    <td class="tg-0pky">Inscription<br>Connexion</td>
    <td class="tg-0pky">Valide indentifiants admin
    <br>Information necessaires à la création du compte User</td>
  </tr>
  <tr>
    <td class="tg-0pky">006</td>
    <td class="tg-0pky">Incription User et Impossible de se connecter au compte</td>
    <td class="tg-0pky">Inscription d'un nouveau user et on essaye de se connecte avec le nouveaux user, mais cella ne mache pas</td>
    <td class="tg-0pky">Test Non Passant</td>
    <td class="tg-0pky">Inscription<br>Connexion</td>
    <td class="tg-0pky">Information necessaires à la création du compte User</td>
  </tr>
</tbody>
</table>