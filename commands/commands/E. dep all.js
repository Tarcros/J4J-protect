module.exports = ({ 
    name: "dep",
    code: `
    
    $setVar[Cash;0;$authorID]
    $onlyIf[$getVar[Cash;$authorID]>25;$replaceText[$replaceText[$checkCondition[$message[1]!=all];true;];false;Tu dois avoir un minimum de **$100** Cash .]]
    $setVar[Bank;$sum[$getVar[Bank;$authorID];$getVar[Cash;$authorID]];$authorID]
    $onlyIf[$getVar[Cash;$authorID]!=0;$replaceText[$replaceText[$checkCondition[$message[1]!=all];true;];false; <:no:765020908833341490> ** Tu ne peux pas déposer de Cash car tu n'en n'a pas.**]]
    $author[$username[$authorID] a déposé tout ton Cash 💶;$userAvatar[$authorID]]
    $description[<:good:765025682068865054> Tu as déposé **$$getVar[Cash;$authorID]** dans ta Bank🤵🏻💸.\n**Merci de nous faire confiance \`$username[$authorID]\` !:bank:**]
    $addTimestamp
    $footer[🤵🏼 Deposite ]   
    $color[28FF00]
    $globalCooldown[3m;$replaceText[$replaceText[$checkCondition[$isNumber[$message[1]]==true];true;];false;<:temp:741859094003974146> Tu dois attendre \`{time}\` pour pouvoir redéposé tout ton argent encore une fois...]]
    $onlyIf[$message[1]==all;]

    
    
    `
})