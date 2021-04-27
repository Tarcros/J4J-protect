module.exports = ({
    name: "blacklist",
    aliases: ["bl"],
    code: `
    $onlyForUsers[315244741287477250;713747686083395585;691118003827507202;271357378035712000;]
    $blackList[$toLowercase[$message[1]];$message[3];$toLowercase[$message[2]]]
   
    $replaceText[$replaceText[$checkCondition[$userExists[$message[3]]==true];true;**$username[$message[3]]#$discriminator[$message[3]]**];false;Le serveur, **$message[3]**] a été **$replaceText[$replaceText[$checkCondition[$message[1]==add];true;ajouté];false;retiré]** dans la \`Black List\` de l'utilisation du bot];remove;de la \`Black List\` et peut maintenant utiliser le bot!]**
   
    $onlyIf[$isNumber[$message[3]]==true;**Invalid $message[2]ID**]
    $onlyIf[$message[3]!=;**Fourni un $message[2]ID**]
    $onlyIfMessageContains[user;server;{title:Usage Invalide!} {description:,blacklist <add> <user> <userID>
   ,blacklist <add> <server> <serverID>
   ,blacklist <remove> <user> <userID>
   ,blacklist <remove> <server> <serverID>} {color:RED}]
   
    $onlyIfMessageContains[add;remove;{title:Usage Invalide!} {description:,blacklist <add> <user> <userID>
   ,blacklist <add> <server> <serverID>
   ,blacklist <remove> <user> <userID>
   ,blacklist <remove> <server> <serverID>} {color:RED}]
 *
 $onlyForUsers[315244741287477250;]
   `

})