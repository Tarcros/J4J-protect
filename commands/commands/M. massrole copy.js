module.exports = ({
    name: "massrole",
    code: `
    $author[Rôle Massif;$userAvatar[$authorID]]
    $color[00FFA1]
    $description[
        > Le rôle ayant l'ID: \`$mentionedRoles[1]\` va être donner a tous les membres bientôt <a:wsoon:741859194373799987>
    > Ping du bot: \`$ping ms\` 
    > Cela risque de durée plus de **$random[1;4]** minutes.. <:temp:741859094003974146>]
    $onlyIf[$roleExists[$mentionedRoles[1]]==true; <:no:765020908833341490> Tu dois mentionné un rôle à donné a tout le monde ]
    $editIn[30s;{thumbnail:$serverIcon}{color:RED}{footer:$serverName[$guildID]}{footerIcon:$serverIcon}{author: Demander par $username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{description:Don du rôle <@&$mentionedRoles[1]> en cour.. <a:wsoon:741859194373799987>};{author:$username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{thumbnail:$serverIcon}{color:RED}{footer:$serverName[$guildID]}{footerIcon:$serverIcon}{description:Le rôle <@&$mentionedRoles[1]> est en train d'être transmit à **$membersCount[]** membres.. <a:wsoon:741859194373799987>};;{author:Commande réalisé par $username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{thumbnail:$serverIcon}{color:GREEN}{footer:$serverName[$guildID] | Nuk3 MassRole }{footerIcon:$serverIcon}{description: Le rôle <@&$mentionedRoles[1]> a **normalement** été transmit à **$membersCount[]** membres.. 
        Si ce n'est pas le cas, attendez un moment le message de confirmation ou refaire la commande \`,massrole < @rôle >\`.<:good:765025682068865054> }  ]
        $onlyBotPerms[manageroles;<:no:765020908833341490> Il me faudrait la permission \`manageroles\`.]
        
    `
})