module.exports = ({
    name: "servinfo",
    aliases: ["serverinfo","si","infoserver","infoserv"],
    code: `
    $title[SERVEUR INFO ]
    $color[$random[0;999999]]
    $description[
     <:verified:759900003619045376>**__Nom__**: $serverName[$guildID]
     <:owner:751759196873031730>**__Owner__**: <@$ownerID>
     <:region:751759197041065995>**__Region__**: $region
     <:servercreate:751759197145923614> **__Creation__**: $creationDate[$guildID]
     <:temp:741859094003974146> **__Creation Time__**: $creationTime[$guildID]
     $replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;<:noboost:765748713510928414>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>1];true;<:tier1:751759196856516609>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>14];true;<:tier2:751759197057712128>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>29];true;<:tier3:751759197124952074>];false;]**__Boost__**: $replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;Aucun Boost];false;$serverBoostCount]
     
     📚**Categories **: \`$replaceText[$replaceText[$checkCondition[$categoryCount==0];true;Aucunne];false;$categoryCount]\`
     📣**Channels**: \`$channelCount\`
     📌**Rôles**: \`$replaceText[$replaceText[$checkCondition[$roleCount==0];true;Aucun];false;$roleCount]\`
     <:emote:759898470080577558>**Emotes**: \`$emoteCount\`
     ⚠ **Level de Verification**: \`$replaceText[$replaceText[$checkCondition[$serverVerificationLvl==NONE];true;Aucune];false;]$replaceText[$replaceText[$checkCondition[$serverVerificationLvl==LOW];true;Faible];false;]$replaceText[$replaceText[$checkCondition[$serverVerificationLvl==MEDIUM];true;Moyenne];false;]$replaceText[$replaceText[$checkCondition[$serverVerificationLvl==HIGH];true;Elevé];false;]$replaceText[$replaceText[$checkCondition[$serverVerificationLvl==VERY_HIGH];true;Maximun];false;]\`

     <:invite:751759197087072377>**Serveur Invite**     <:idusers1:751801847546773586>**ServerID:**\`$guildID\`
     **{hyper:Click Here For Join:https://$getServerInvite[$guildID]}**
     
    ]
    $footer[Informations Sur le Serveur;$userAvatar[$authorID]]
     $addTimestamp
    $thumbnail[$serverIcon]
    

    `
})