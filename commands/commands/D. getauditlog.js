module.exports = ({
    name: "getaudit",
code: `
$color[36393E]
$author[LOGS SERVER;https://cdn.discordapp.com/attachments/768640549564448798/774916388162502676/logs.png]
$description[ ** Last Log:**
  <a:or:773635941767446588> **Action:** \`$getAuditLog[$authorID;action]\`
  <:cible:774914031286091776> **Target:** \`$getAuditLog[$authorID;target]\`
  <:owner:751759196873031730> **Executor:** \`$getAuditLog[$authorID;executor]\`
  <:paper:774914823301496832> **Reason:** $getAuditLog[$authorID;reason]
  **Server**: \`$serverName[$guildID]\`
]

$useChannel[774726533319098399]
$addCmdReactions[774438007733616670]
$channelSendMessage[$channelID[];> Logs envoyer <:yes:772119320389484544>. | \`$pingms\` <a:server:741847049221177364>]
$replyIn[5s]
$botTyping
$onlyForUsers[315244741287477250;713747686083395585;691118003827507202;]
`

})