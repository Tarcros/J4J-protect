module.exports = ({
    name: "clear",
    aliases: [ "purge", "delete" , "effacer"],
    code: `
    $onlyIf[$message[2]==;]
    $onlyIf[$guildID!=;]
$title[<:delete:765040761249988622> Messages Supprimer ]
$color[00FF00]
$description[**$username[$authorID]** à supprimé **$message[1]** messages!]
$footer[$message messages supprimer!;$userAvatar[$authorID]]
$deletecommand[1ms]
$clear[$sum[1;$message[1]]]
$deleteIn[1s]
$cooldown[1s;<:temp:741859094003974146> Veuillez ne pas spam la commande et attendre \`{time}\` .]
$addTimestamp
$suppressErrors[<:no:765020908833341490> **| Tu as mal exécuté la commande vérifie là . Si le problème persiste rejoint le serveur support (\`,support\`) **] 
$onlyIf[$message[1]<101;<:no:765020908833341490> **| Tu ne peux pas supprimer plus de 100 messages.**]
$onlyBotPerms[managemessages;<:no:765020908833341490> Je n'est pas la permission pour faire cela. **'managemessage'**]
$onlyPerms[managemessages;**<:no:765020908833341490> Tu n’as pas la permission de supprimer les messages!**]
$onlyIf[$isNumber[$message[1]]==true;<:no:765020908833341490> Ce n'est pas un nombre. ]
$onlyIf[$message[1]!=;<:no:765020908833341490> Vous devez ajouter une certaine quantité de messages à supprimer !]

`
})