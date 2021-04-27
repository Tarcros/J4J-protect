module.exports =({
    name: "weekly",
    code: `
    
    $author[💎Recompense de la Semaine $username[$authorID]💎;$userAvatar[$authorID]]
$color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]



$description[Cette semaine tu gagnes 
💸💰$$random[1200;5500]💰💸, directement dans ta bank!]
$setVar[Bank;$sum[$getVar[Bank;$authorID];$random[1200;5500]];$authorID]

$globalCooldown[1w;<:temp:741859094003974146> Tu doit attendre \`{time}\` pour pouvoir refaire cette commande ! ]
$footer[💎 Weekly 💎]

$suppressErrors[Tu as mal exécuté la commande, vérifie là.]
$addTimestamp


$setServerVar[Evenement;$sum[$getServerVar[Evenement];4]]
    
    
    

    `
})