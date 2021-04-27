module.exports = {
    name: "setjoin",
    code: `
    
    $setServerVar[joinchannel;$replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;None];false;$findChannel[$message[1]]]]
    $replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;];false;<:good:765025682068865054> Les messages de bienvenue vont désormais s'afficher dans le channel <#$findChannel[$message[1]]> .
    Pour voir les configurations du serveur vous pouvez faire la commande \`,etat\`.
    \`$username[$authorID]\`]
    $onlyIf[$message[2]==;<:no:765020908833341490> Tu ne peux pas avoir plusieur channel qui annonce les arrivées.]
    $replaceText[$replaceText[$checkCondition[$findChannel[$message[1]]==undefined];true;<:no:765020908833341490> Veuillez fournir le nom/ID/mention du channel];false;]
    $onlyIf[$message[1]!=;<:no:765020908833341490> Vous devez mentionné un channel.]
    $onlyPerms[manageserver;<:no:765020908833341490> Vous n'avez pas la permission de faire cette commande, il vous faut la permission \`{perms}\`. ]
    $onlyBotPerms[manageserver;<:no:765020908833341490> Je n'est pas la permission \`manageserver\` pour faire cette commande.]
    
    
    

    `
}