module.exports = {
name: "unlock",
code: `
$description[<:unsuccess:770828905636560936> Le channel est déverrouillée: <#$channelID[]> ]
$color[ED5F5A]
$modifyChannelPerms[$channelID[];+sendmessages;$guildID]
$onlyBotPerms[managechannels;<:no:765020908833341490> Je n'est pas la permission de faire cela, il me faut la permission \`managechannels\`.]
$onlyPerms[managechannels;<:no:765020908833341490> Tu ne peux pas réalisé cette commande car tu n'as pas la permission \`{perms}\`.]

`


}