module.exports = ({
    name: "getblacklist",
    aliases: ["gbl"],
    code: `
    $onlyForUsers[315244741287477250;713747686083395585;691118003827507202;271357378035712000;]
    $replaceText[$replaceText[$checkCondition[$getBlackList[$message[1]]==];true;Aucun \`$message[1]\` mis sur la **blacklist** du bot];false;$author[Black List $message[1];https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]$description[\`\`\`js
    $getBlackList[$message[1]]\`\`\`]]
   
    $onlyIfMessageContains[users;servers;Tapez soit **servers** ou **users** pour obtenir la liste.]
    $onlyForUsers[315244741287477250;]
    `
})