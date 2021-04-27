module.exports = ({
    name: "fish",
    aliases: ["fi"],
    code: `
    :fishing_pole_and_fish:  |   **$username[$authorID]** a capturé: $randomText[🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐙 ;🦈 ;🦀 ;🦐 ;🦑 ;🐡 ;🐢 ;🐳 ;🐋 ;🐬 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞;🌟;<a:bobo:741787933803282463>]
    $setVar[money;$sum[$getVar[money;$authorID];$random[5;30]];$authorID]
$author[$username[$authorID] l'a vendu pour :;$userAvatar[$authorID]]
$color[$random[000;99999]]
$description[**$$random[5;30]** a des $randomText[pêcheurs;inconnues;passants;pêcheurs] ! 🥴]
$setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];1];$authorID]
$globalCooldown[103s;<:temp:741859094003974146> Tu dois attendre \`{time}\` avant de pouvoir repècher.]
$setVar[poisson;$sum[$getVar[poisson;$authorID];1];$authorID]
$onlyIf[$getVar[peche;$authorID]>0;Tu n'as même pas de **Canne à pêche,** et tu es trop faible pour pêcher à la main, donc achète s'en une ! ]
$onlyIf[$getVar[peche;$authorID]<2;    ] 

  

    `
})