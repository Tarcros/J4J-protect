module.exports = {
    name: "tempban",
    code: `
   $channelSendMessage[$channelID[$getServerVar[logs]];{title:__Tempban__}{description:**<@$mentioned[1]> is now unbanned!**}{color:00faff}{footer:$serverName[]}{thumbnail:$userAvatar[$mentioned[1]]}]
   
   $unban[$mentioned[1]]
   
   $replyIn[$splitText[1]]
   
   $channelSendMessage[$channelID[$getServerVar[logs]];{thumbnail:$userAvatar[$mentioned[1]]}{title:__Tempban__}{description:**Banned: <@$mentioned[1]>
   By: <@$authorID>
   Reason: \`$replaceText[$replaceText[$checkCondition[$splitText[2]==];true;no reason];false;$splitText[2]]\`
   Time: $splitText[1]**}{color:00faff}{footer:$serverName[]}]
   
   $ban[$mentioned[1];$splitText[2]]
   
   $onlyIf[$splitText[1]!=;{title:<:no:765020908833341490> Arguments manquants!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:ff0000}]
   
   $onlyIf[$mentioned[1]!=;{title:<:no:765020908833341490> Arguments manquants!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:ff0000}]
   
   $onlyPerms[ban;{title:<:no:765020908833341490> Missing permissions!}{color:d0321d}{description:**You're missing __Ban Members__ permission!**}]
   
   $onlyBotPerms[ban;{title:<:no:765020908833341490> Missing permissions!}{color:d0321d}{description:**Im missing __Ban Members__ permission**!}]
   
   $textSplit[$noMentionMessage[];:]
   
   `




}