module.exports = {
    name: "setleave",
    code: `
    $setServerVar[leavechannel;$replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;None];false;$findChannel[$message[1]]]]
    $replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;];false;<:yes:772119320389484544> Les messages de departs vont désormais s'afficher dans le channel <#$findChannel[$message[1]]> .
    Pour voir les configurations du serveur vous pouvez faire la commande \`,etat\`.
    \`$username[$authorID]\`]
 $onlyIf[$message[2]==;<:no:765020908833341490> Tu ne peux pas avoir plusieur channel qui annonce les départs.]
    $replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;<:no:765020908833341490> Veuillez fournir le nom/ID/mention du channel];false;]
    $onlyIf[$message[1]!=;<:no:765020908833341490> Vous devez mentionné un channel.]
    $onlyPerms[manageserver;<:no:765020908833341490> Vous n'avez pas la permission de faire cette commande, il vous faut la permission \`{perms}\`. ]
    $onlyBotPerms[manageserver;<:no:765020908833341490> Je n'est pas la permission \`manageserver\` pour faire cette commande.]
   
    `
}