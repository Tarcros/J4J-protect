module.exports = ({
    name: "withdraw",
    aliases: [ "with"],
    code: `
    
    $onlyIf[$message[1]<=$getVar[Bank;$authorID];**⚠️Tu ne peux pas retirer plus que ce que tu as !**]
    $setVar[Bank;$sub[$getVar[Bank;$authorID];$message[1]];$authorID]
    $setVar[Cash;$sum[$getVar[Cash;$authorID];$message[1]];$authorID]
    $description[Tu as retiré **$$message[1]** Cash de ta Bank💸! 
    Bank:bank:** >> $sub[$getVar[Bank;$authorID];$message[1]]** <:remove:766789319699726357> \`-$message[1]\` 
    Cash💸**>> $sum[$getVar[Cash;$authorID];$message[1]]** <:add:766789319419363380> \`+$message[1]\` ]
    $color[d28108]
    $suppressErrors[<a<a:thefalse:744770469122539521>744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
    $footer[$username[$authorID] ;$userAvatar[$authorID]]
    $globalCooldown[5m;<:temp:741859094003974146>Tu ne peux pas faire cette commande pendant **{time}** .]
    $addTimestamp
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];1]]
    
    `
})