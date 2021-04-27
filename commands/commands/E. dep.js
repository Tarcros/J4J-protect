module.exports = ({
    name: "dep",
    code: `
    
    
    $description[<:good:765025682068865054> Tu as déposé **$$message[1]** dans ta Bank🤵🏻💸.\n**Merci de nous faire confiance !🏦**]
    $setVar[Cash;$sub[$getVar[Cash;$authorID];$message[1]];$authorID]
    $setVar[Bank;$sum[$getVar[Bank;$authorID];$message[1]];$authorID]
    $addTimestamp   
    $color[28FF00]
    $footer[🤵🏼Deposite💸;$userAvatar[$authorID]]
    $globalCooldown[5;$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;<:temp:741859094003974146> Tu dois attendre %time% pour pouvoir poser ton Cash en lieu **presque** sur..]]
    $suppressErrors[$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**]]
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];1]]
    $onlyIf[$message[1]>49;$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;<:no:765020908833341490> tu dois déposé plus de **$50** Cash. ]]
    $onlyIf[$getVar[Cash;$authorID]>99;$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false; Tu dois avoir un minimum de **$100** Cash .]]
    $onlyIf[$message[1]<=$getVar[Cash;$authorID];$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;**<:no:765020908833341490> Tu ne peux pas déposez plus que ce que tu as !**]]
    $onlyIf[$isNumber[$message[1]]==true; <:no:765020908833341490> Le(s) caractère(s) \`$message[1]\` n'est pas un nombre.]
    $onlyIf[$message[1]!=;]
    $onlyIf[$message[1]!=all;]
    
    `
})