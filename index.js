const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")
 
const bot = new discordScript({
  token: "ODQ0NTgxNDAxMzE5NTcxNTQ2.YKUfuQ.3LhHNGODCcMbZHBjB-dBItgNEVU",
  prefix: [","]
})
 
bot.Variables({
  prefix: ",",
  test: "1",
  iduserrankup: "nothing",
  idrolerankup: "nothing",
  idrolerankup2: "nothing",
  
})


bot.MessageEvent()
bot.MessageEditEvent()

bot.Status({
        0: {
            description: "JOIN FOR JOIN 🍀 .gg/j4jpls", 
            type: "PLAYING" 
        }, 
        1: {
            description: "🔮 Boost = Perks", 
            type: "WATCHING" 
        }
    }, 13000)


// DM JAIL



bot.ReadyCommand({
  name: "835529885468196924",
  code:`
<:on:836004165733711873> **Bot statut**
$description[<:online:819329223956496415>**BOT ON**
<:setting:769375912751529985> **Uptime started** \`$uptime\`]
$addTimestamp
$footer[🍀・JOIN FOR JOIN 🍀 Protect 🛡️・Restarted]

$color[36393e]
`
})




bot.Command({
name: "bancount",
code: `
<:IconMembers:819348997533204490> The server has **$bansCount[784668907264147477]** members banned.
$onlyAdmin[]
`
})

bot.Command({
name: "ping",
code: `
$description[<a:a_Loading_Pixels:835623379591364608>** Loading bot ping...**]
$color[36393e]
$editIn[$ping;;{description:**<:data:819559106930933770> My Ping: \`$ping\`ms**} {color:36393e}]
`
})

bot.LoopCommand({
 name: "this can be anything, its just reference",
 code:`
 $color[36393e]
📡** Bot News \`JOIN FOR JOIN BOT dev 🍀\`**
$description[📡 \`$uptime\` **Uptime Bot**


]
$addTimestamp
$thumbnail[$userAvatar[819691265142161428]]
$useChannel[$channelID[📶・news・bot]]
`
}, 600000)



bot.SpaceCommand({
name: "any name here, anyways it'll trigger xd",
code: `
$deletecommand[1ms]
$deleteIn[3s]
<@$authorID> **The j4j is not allowed in this channel, if you want j4j go to <#$channelID[\🍀・j4j・fast]> or <#$channelID[\🎋・j4j・ads]> **
<:data:819559106930933770> **Ping Anti j4j: \`$ping\`ms !**
$onlyIfMessageContains[j4j;j4J;j2J;j2j;joinforjoin;s4s;join4join;J4j;J4J;jfj;jFj;j2J;J2J;Join For Join;JFJ;JFj;JfJ;Jfj;d4d;join for join;jay for jay;]
$onlyForChannels[$channelID[💻・commands];$channelID[⛔・reports];$channelID[ξ・🐸・dank];$channelID[╭・ξ・🌸・owo];$channelID[╰・ξ・☕・mudae];$channelID[💬・chat];$channelID[・🗻˚₊・spam・bots];]
$suppressErrors[]

`})



bot.Command({
name: "report",
code: `
$deletecommand[1ms]
$description[

╭ **\`⚠️\` __REPORTS RULES__ \`⚠️\`**
・**<a:question:822003900252684308> :flag_us: If you find a bots/scammers/others report please <#$channelID[⛔・reports]> <a:starts:809253520796549121>**
\`🍀\`**<a:question:822003900252684308> <a:Arrow1:819351001906544690> ( \`📸\` + @user + <@&821190545531338772> + Reason ) **
・<a:question:822003900252684308> **:flag_tr: Botlar/dolandırıcılar/veya benzerlerini bulursanız, lütfen burada belirtin <#$channelID[⛔・reports]> <a:starts:809253520796549121> **
**╰ <:XDM_Staff:835118888873623582> Thank you for the report(s) <a:ast:812882348806373426>**

]
$color[ff0000]
$footer[If you have reported someone but now everything is clear (In this channel), it is because the problem has already been solved.]
$onlyForRoles[⛔・Report;🍀・Owner;🚧・Manager;]
$suppressErrors[{description:An error has been produced} {color:ff0000} ]
`
})



bot.Command({
  name: "rankup",
  code: `
$thumbnail[https://media.discordapp.net/attachments/822260539832926282/823741334678274058/ezgif-7-1e139a39ac41.gif?width=892&height=894]
$color[33FF8B]

$description[ 
**<:info:823701465242533949> Hi all the staff, I would like to announce a \`New Rank Up\` :**
<:on:823702301314515057> <@$getServerVar[iduserrankup]>
<:IconID:819347333421858846>: \`$getServerVar[iduserrankup]\`
 <:sign:823702301571153970> **RANK UP** <:heart:823701465125879838>
<:IconSecurity:819347462006243400> **<@&$getServerVar[idrolerankup]> <a:Arrow2:819351038364352513> <@&$getServerVar[idrolerankup2]>**

]
$author[ $username[$getServerVar[iduserrankup]];$userAvatar[$getServerVar[iduserrankup]]]
 $deletecommand[1ms]
 $onlyAdmin[]
  `
})

bot.Command({
  name: "setuserrankup",
  code: `
  $deleteIn[15s]
  $color[36393e]
  $description[**<:verifiedblack:833182310995460176> Now the id of the new rankup user is \`$message[1]\` (<@$message[1]>)**]
 $setServerVar[iduserrankup;$message[1]]
 $deletecommand[1ms]
 $onlyAdmin[]
  `
})

bot.Command({
  name: "setrolerankup",
  code: `
  $deleteIn[15s]
  $color[36393e]
  $description[**<:verifiedblack:833182310995460176> Now the id of the new rankup role is \`$message[1]\` (<@&$message[1]>)**]
 $setServerVar[idrolerankup;$message[1]]
 $deletecommand[1ms]
 $onlyAdmin[]
  `
})

bot.Command({
  name: "setrolerankup2",
  code: `
  $deleteIn[15s]
  $color[36393e]
  $description[**<:verifiedblack:833182310995460176> Now the id of the new rankup role is \`$message[1]\` (<@&$message[1]>)**]
 $setServerVar[idrolerankup2;$message[1]]
 $deletecommand[1ms]
 $onlyAdmin[]
  `
})

bot.LoopCommand({
 name: "this can be anything, its just reference",
 code:`
<:hunter:819345750969679912> **Dont forgot, if you find a bot or a scammer pls report him in <#$channelID[⛔・reports]> <:verifiedblack:833182310995460176>**
$useChannel[$channelID[🍀・j4j・fast]]
`
}, 600000)




bot.Command({
name: "scam",
code: `

$deletecommand[10s]
$deleteIn[60s]
$color[ff0000]
$author[New Scammer: $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$description[**<:success:821885973012807691> <@$mentioned[1;yes]> has just received the role scammer because he has __scam__:**
Reason: **" $message[] "**
<:staffcertified:834979467419844628> **Staff reporter:** <@$authorID> 
 <a:question:822003900252684308> **Thx for the report! (Delete in 60s <<a:60:836617337851478076>)**
 
 ]

$giveRole[$mentioned[1;yes];$roleID[💢・Scammer];$noMentionMessage[]]
  $argsCheck[>2;{description:**<:16211155394555210:843244763910242374> The command was misused**\nUsage: \`,scam @user Report by <reporter name> - Reason\`} {color:ff0000}]
$onlyForRoles[⛔・Report;🍀・Owner;🚧・Manager;]

`
})


bot.Command({
  name: "nogw",
  code: `
   $deletecommand[45000ms]

$blackListRoles[$roleID[・no gw];{description:**<:uncertificationblack:836424264525152256> You already have the role <@&$roleID[・no gw]> .** *(You cant see gw.)*} {color:ff0000}]
$cooldown[3m;]
`})



bot.Command({
  name: "addgw",
  code: `
  $deletecommand[45000ms]
  
 $onlyForRoles[$roleID[・no gw];{description:**<:uncertificationblack:836424264525152256> You already remove the role <@&$roleID[・no gw]> .** *(You can see gw.)*} {color:ff0000}]
$cooldown[3m;]
`})



