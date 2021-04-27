module.exports = ({ 
    name: "convert",
    code: `
    $author[💱 Conversion 💱;https://cdn.discordapp.com/attachments/768640549564448798/774845047114825768/convertion.png]
    $description[**Tu as converti \`$$message[1]\` de __Money__ en __Cash__.**]
    $setVar[Cash;$sum[$getVar[Cash;$authorID];$sub[$message[1];300]];$authorID]
    $setVar[money;$sub[$getVar[money;$authorID];$sum[$message[1];500]];$authorID]
$editIn[10s;<a:confirmed:741771307150213260> Votre **conversation** de \`$$message[1]\` est faite,\n **$500** __Money__ et **$300** __Cash__ on été récupéré ..]
$footer[La conversion coûte $500 de Money et $300 en Cash. ]
$color[3BFFB7]
$globalCooldown[120s; Tu de attendre \`{time}\` avant de pouvoir la refaire]
    $onlyIf[$sub[$getVar[money;$authorID];$message[1]]>0;<:no:765020908833341490> Tu n'aura pas assez pour payer la conversion..Il te restera **$sub[$getVar[money;$authorID];$message[1]]**...]
    $onlyIf[$message[1]>699;<:no:765020908833341490> Tu dois convertir plus de $700 de money !.]
$onlyIf[$message[1]<=$getVar[money;$authorID];**<:no:765020908833341490>Tu ne peux pas convertir plus que ce que tu as !**]
$onlyIf[$getVar[money;$authorID]>899;<:no:765020908833341490> Vous devez avoir un minimum de $900 de Money pour pouvoir faire une conversion en Cash.]
$onlyIf[$getVar[Cash;$authorID]>499;<:no:765020908833341490>Tu dois avoir au moins $500 de Cash pour pouvoir réaliser une conversion .]
   $onlyIf[$message[1]!=;<:no:765020908833341490> Il faut que tu donnes la quantité à convertir.]
  
   `
})