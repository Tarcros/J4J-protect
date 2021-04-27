module.exports = ({ 
    name: "farm",
    aliases: ["f"],
    code: `
    
    $onlyIf[$getUserVar[Patate]<4;]
    $globalCooldown[3m; <:682316091183333479:741859094003974146> Désolé ,tu es fatigué , reposes toi pendant \`{time}\` pour recommencer à travailler .]
    $setVar[money;$sum[$getVar[money;$authorID];$random[5;31]];$authorID]
    $author[Farm Time🌾; $userAvatar[$authorID]]
    $description[Tu as $randomText[récupéré le lait des vaches;enfin récupéré les œufs des poules;nourries les chevaux;réparer le moulin;donné a manger aux cochons; récoltez 4 maïs;planté 2 arbres;récolté tes carrotes;vendu ta viande de bœuf] 
    et tu as gagné **$$random[5;31]**!]
    $footer[La vie est dur, mais tien bon !]
    $color[1CFF00]
    $suppressErrors[<a:thefalse:744770469122539521>744770469122539521> **| Tu as mal excuté la commande vérifie là .**] 
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
    
    `
})