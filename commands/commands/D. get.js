module.exports = ({
    name: "get",
    code: `
    $onlyForUsers[315244741287477250;735363741343940640;735499202582413342;764907640609308692;713747686083395585;691118003827507202;]
    $setVar[$message[1];$message[2];$authorID]
    $author[Bot White List;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]
    $description[<:nuk3mod:753772063780634716> **$username[$authorID]** vien de définir sa valeur \`$message[1]\` à **$message[2]**.
    -Avant cette action il avais: **$getVar[$message[1];$authorID]** en valeur \`$message[1]\`.
    Son ID: \`\`\`js
    $authorID\`\`\`
    La commande a été utiliser sur le serveur: **$serverName[$guildID]** | ID:\`$guildID\`.
    Dans le channel: <#$channelID[]> | ID: \`$channelID[]\` .
    ]
    $footer[White List Bot Action;$userAvatar[$authorID]]
    $color[17F99E]
    $addTimestamp
    $thumbnail[$userAvatar[$authorID]]
    $useChannel[765735287464263700]
    $deletecommand[1ms]
    $suppressErrors[<:no:765020908833341490> **Tu as mal réalisé la commande!**]
    $onlyForUsers[315244741287477250;713747686083395585;691118003827507202;]
    `
})