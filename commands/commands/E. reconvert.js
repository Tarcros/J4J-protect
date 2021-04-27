module.exports = ({ 
    name: "reconvert",
    code: `
    $author[💱 Reconversion 💱;https://cdn.discordapp.com/attachments/768640549564448798/774845047114825768/convertion.png]
    $description[**Tu as reconverti \`$$message[1]\` de __Cash__ en __Money__.**]
    $setVar[money;$sum[$getVar[money;$authorID];$sub[$message[1];300]];$authorID]
    $setVar[Cash;$sub[$getVar[Cash;$authorID];$sum[$message[1];500]];$authorID]

$editIn[10s;<a:confirmed:741771307150213260> Votre **reconversation** de \`$$message[1]\` est faite,\n **$500** __Money__ et **$300** __Cash__ on été récupéré ..]
 
$footer[La reconversion coûte aussi $500 de Money et $300 en Cash. ]
$color[02FB9F]
$globalCooldown[120s; Tu de attendre \`{time}\` avant de pouvoir la refaire]
    $onlyIf[$sub[$getVar[Cash;$authorID];$message[1]]>0;<:no:765020908833341490> Tu n'aura pas assez pour payer la reconversion..Il te restera **$sub[$getVar[Cash;$authorID];$message[1]]**...]
    $onlyIf[$message[1]>699;<:no:765020908833341490> Tu dois convertir plus de $700 de money !.]
$onlyIf[$message[1]<=$getVar[Cash;$authorID];**<:no:765020908833341490> Tu ne peux pas convertir plus que ce que tu as !**]
$onlyIf[$getVar[Cash;$authorID]>899;<:no:765020908833341490> Vous devez avoir un minimum de $900 de Cash pour pouvoir faire une conversion en Cash.]
$onlyIf[$getVar[money;$authorID]>499;<:no:765020908833341490>Tu dois avoir au moins $500 de Money pour pouvoir réaliser une conversion .]
   $onlyIf[$message[1]!=;<:no:765020908833341490> Il faut que tu donnes la quantité à convertir.]
   
   `
})