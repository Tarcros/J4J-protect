module.exports = ({
    name: "setnick",
    code: `
$setNickname[$message[1];$message[2]]
$author[Change Nickname;$userAvatar[$authorID]]
$description[
**Ancien surnom:** $nickname[$message[1]]
**Nouveau surnom:** $message[2]
$onlyIf[$userExists[$message[1]]==true;Insérez un nom d'utilisateur valide à modifier!]
$onlyIf[$message[2]!=;Insérez un surnom valide pour l'utilisateur!]
$onlyIf[$charCount<=60;Vous ne pouvez pas insérer un surnom de plus de 32 caractères!]
$onlyPerms[managenicknames;Vous devez disposer de l'autorisation Gérer les pseudonymes pour utiliser cette commande!]
]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:<:no:765020908833341490> Un problème est survenu!}{description:**Mon rôle n'est pas supérieur à <@$mentioned[1;yes]>!**}{color:FF0000}]

`

})