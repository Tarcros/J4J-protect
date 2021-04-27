module.exports = ({
    name: "massremove",
    code: `
    $author[Suppretion Massif;$userAvatar[$authorID]]
    $color[ff0000]
    $description[
        > Le rôle ayant l'ID: \`$mentionedRoles[1]\` va être retiré a tous les membres bientôt <a:wsoon:741859194373799987>
    > Ping du bot: \`$ping ms\` 
    > Cela risque de durée plus de **$random[1;6]** minutes.. <:temp:741859094003974146>]
    $onlyIf[$roleExists[$mentionedRoles[1]]==true; <:no:765020908833341490> Tu dois mentionné un rôle à donné a tout le monde ]
    $editIn[30s;{thumbnail:$serverIcon}{color:RED}{footer:$serverName[$guildID]}{footerIcon:$serverIcon}{author: Demander par $username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{description:Suppretion du rôle <@&$mentionedRoles[1]> en cour.. <a:wsoon:741859194373799987>};{author:$username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{thumbnail:$serverIcon}{color:RED}{footer:$serverName[$guildID]}{footerIcon:$serverIcon}{description:Le rôle <@&$mentionedRoles[1]> est en train d'être retirer à **$membersCount[]** membres.. <a:wsoon:741859194373799987>};;{author:Commande réalisé par $username[$authorID]#$discriminator[$authorID]}{authorIcon:$authorAvatar}{thumbnail:$serverIcon}{color:RED}{footer:$serverName[$guildID] | Nuk3 MassRemove }{footerIcon:$serverIcon}{description: Le rôle <@&$mentionedRoles[1]> a **normalement** été retiré à **$membersCount[]** membres.. 
        Si ce n'est pas le cas, attendez un moment le message de confirmation ou refaire la commande \`,massremove < @rôle >\`.<:good:765025682068865054> }  ]
        $onlyBotPerms[manageroles;<:no:765020908833341490> Il me faudrait la permission \`manageroles\`.]
        $onlyBotPerms[manageroles;<:no:765020908833341490> Commande réservé aux admins du serveur.]
      
        `
})