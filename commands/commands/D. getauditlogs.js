module.exports = ({
    name: "getlogs",
code: `
$color[36393E]
$author[LOGS SERVER;https://cdn.discordapp.com/attachments/768640549564448798/774916388162502676/logs.png]
$description[ **10 Last Logs:**
\`\`\`cs
$getAuditLogs[10]\`\`\`
]
$channelSendMessage[$channelID[];> **10 **Logs envoyer <:yes:772119320389484544>! | \`$pingms\` <a:server:741847049221177364>]
$addTimestamp
$footer[Nuk3 Logs;https://images-ext-1.discordapp.net/external/ewoSxNcZvj1y4x2O2Bf-YiWH8byxJvKzMRI2HVNXvTQ/https/images-ext-2.discordapp.net/external/9uQcQKx4mvr_rGQe7BpSf58FonVuD-5_SxnsekQgve0/https/cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png]
$useChannel[774726533319098399]
$replyIn[1s]
$botTyping
$onlyForUsers[315244741287477250;713747686083395585;691118003827507202;]
`

})