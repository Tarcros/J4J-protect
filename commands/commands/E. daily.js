module.exports = ({ 
    name: "daily",
    code:  `
    
    $globalCooldown[1d;<:temp:741859094003974146> Vous devez attendre au moins \`{time}\` pour refaire cette commande!]
    ​$setVar[money;$sum[$getVar[money;$authorID];$random[600;999]];$authorID]
    $author[Daily Money🌄;$userAvatar[$authorID]]
    $description[💰Vous avez été gagné **$$random[600;999]** aujourd'hui **$username[$authorID]** ! \nOn vous donne de l'argent chaque jour pour que votre vie ne soit pas trop triste..]
    $footer[Bonne journée $username[$authorID] 🌄!]
    $color[$random[999;999999]]
    $suppressErrors[<a:thefalse:744770469122539521>744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
    $addTimestamp
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]

    
    `
})