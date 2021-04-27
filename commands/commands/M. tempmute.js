module.exports = {
    name: "tempmute",
    code: `
   $takeRole[$mentioned[1];$roleID[$getServerVar[mute]]]
   $channelSendMessage[$channelID[];{title:__Tempmute__}{description:**<@$mentioned[1]> n'est plus mute!**}{thumbnail:$userAvatar[$mentioned[1]]}{color:06FF50}{footer:$serverName[]}]
   $replyIn[$splitText[1]]
   $channelSendMessage[$channelID[];{title:__Tempmute__}{thumbnail:$userAvatar[$mentioned[1]]}{description:**Mute: <@$mentioned[1]> 
   Par: <@$authorID>
   Raison: \`$replaceText[$replaceText[$checkCondition[$message[3]!=];true;$message[3]];false;Sans Raison]\`
   Temps: $splitText[1]**}{color:5AFD8A}{footer:$serverName[]}]
   $giveRole[$mentioned[1];$roleID[$getServerVar[mute]]]
   $onlyBotPerms[manageroles;{title:<:no:765020908833341490> Manque de permission.}{description:** Il me manque la permission __Manage Roles__ !**}{color:FF0000}]
    $onlyIf[$mentioned[1]!=$authorID;{title:<:no:765020908833341490> Un problème est survenu!}{description:**Tu ne peux pas te mute toi même!**}{color:FF0000}]
    $onlyPerms[manageroles;{title:<:no:765020908833341490> Manque de permission!}{description:**Tu dois avoir la permission __Kick Members__ !**}{color:FF0000}]
    $onlyIf[$mentioned[1]!=;{title:<:no:765020908833341490> Arguments manquants!}{description:**Usage: \`,tempmute <@user> <time>: <reason>\`**}{color:FF0000}]
    $onlyIf[$splitText[1]!=;{title:<:no:765020908833341490> Arguments manquants!}{description:**Usage: \`,tempmute <@user> <time>: <reason>\`**}{color:FF0000}]
    $textSplit[$message[2];:]
    $onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$roleID[$getServerVar[mute]]];{title: <:no:765020908833341490> Un problème est survenu!}{description:**Mon rôle n'est pas supérieur à <@&$roleID[$getServerVar[mute]]>!**}{color:FF0000}]
    $onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1]]];{title:<:no:765020908833341490> Un problème est survenu!}{description:**Mon rôle n'est pas supérieur à <@$mentioned[1]>!**}{color:FF0000}]
    $onlyIf[$roleExists[$getServerVar[mute]]==true;{title:<:no:765020908833341490> Un problème est survenu!}{description:**Le rôle mute n'as pas été définie ou n'existe pas!**}{color:FF0000}]
    $onlyIf[$userExists[$mentioned[1]]==true;{title:<:no:765020908833341490> Un problème est survenu!}{description:**L'utilisateur n'existe pas!**}{color:FF0000}]
    
    `
};
