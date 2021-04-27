module.exports = ({ 
    name: "work",
    aliases: ["w"],
    code: `
    
    $setVar[money;$sum[$getVar[money;$authorID];$random[25;250]];$authorID]
    $title[Vous avez travaillé<a:nice:741818168862965861>]
    $color[$random[0000;99999]]
    $description[🤵🏾Félicitations! Vous avez travaillé comme **$randomText[ouvrier de Carglass; Coder; voiturier; Proffesseur de sport; Bibliothécaire; Banquier; Conducteur de bus; Conducteur de train; Youtubeur; Hacker; PDG; Employer de McDonald ; Helper; Mendiant; nettoyeur; pilote; agriculteur;Designer;Graphiste;Garagiste;Plombier;Développeur;Joueur Professionnelle;Éboueur]** ,\ntout en faisant votre emploi , vous avez obtenu avec succès \`$$random[25;250]\`!]
    $footer[ C'est beaucoup de travail, compagnon☑;$userAvatar[$authorID]]
    $globalCooldown[60m;<:temp:741859094003974146> Désolé, tu dois attendre \`{time}\` pour travailler à nouveau.]
    $setVar[réputation;$sum[$getVar[réputation;$authorID];$random[1;6]];$authorID]
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];4]]
    $addTimestamp
    $onlyIf[$getVar[nourriture;$authorID]<4;    ]
   
    `
})