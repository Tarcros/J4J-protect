module.exports = {
name: "lock",
code: `
$description[<:success:770826800435036162> Le channel est verrouillée: <#$channelID[]> ]
$color[1FE199]  
$modifyChannelPerms[$channelID[];-sendmessages;$guildID]
$onlyBotPerms[managechannels;<:no:765020908833341490> Je n'est pas la permission de faire cela, il me faut la permission \`managechannels\`.]
$onlyPerms[managechannels;<:no:765020908833341490> Tu ne peux pas réalisé cette commande car tu n'as pas la permission \`{perms}\`.]



`


}