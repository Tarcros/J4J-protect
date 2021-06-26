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
  channelembed: "nothing",
  channeledit: "nothing",
  messageedit: "nothing",
 
  
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
<:setting:769375912751529985> **Uptime started**]
$addTimestamp
$footer[🍀・JOIN FOR JOIN 🍀 Protect 🛡️・Restarted]

$color[36393e]
`
})



bot.Command({
name: "ping",
code: `
$description[<a:a_Loading_Pixels:835623379591364608>** Loading bot ping...**]
$color[36393e]
$editIn[$ping;;{description:**<:data:819559106930933770> My Ping: \`$ping\`ms**} {color:36393e}]
$onlyAdmin[]
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
  name: "anti j4j",
  code: `
  $deleteIn[5s]
 $deletecommand[1ms]
 $color[36393e]
$description[<:uncertificationblack:836424264525152256> <@$authorID> **The j4j is not allowed in this channel, if you want j4j go to <#$channelID[\🍀・j4j・fast]> or <#$channelID[\🎋・j4j・ads]> **
<:data:819559106930933770> **Ping Anti j4j: \`$ping\`ms !** ]
    $onlyForChannels[$channelID[💻・commands];$channelID[⛔・reports];$channelID[ξ・🐸・dank];$channelID[╭・ξ・🌸・owo];$channelID[╰・ξ・☕・mudae];$channelID[💬・chat];$channelID[・🗻˚₊・spam・bots];]
    $onlyIfMessageContains[j4j;j4J;j2J;j2j;joinforjoin;s4s;join4join;J4j;J4J;jfj;jFj;j2J;J2J;Join For Join;JFJ;JFj;JfJ;Jfj;d4d;join for join;jay for jay;]
  
      `
  })


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


bot.Command({
    name: "categorycount",
   aliases: ["cgc"],
code: `

At the moment, the server has $replaceText[$replaceText[$checkCondition[$categoryCount==0];true;\`no\`];false;\`$categoryCount\`] **categories** created <:categorie:759899157401567274>.
$onlyAdmin[]
`
})

bot.Command({
 name: "channelcount",
   aliases: ["cc"],
code: `
At the moment, the server has $replaceText[$replaceText[$checkCondition[$channelCount==0];true;\`no\`];false;\`$channelCount\`] **channels** created <:channel:759898754433679400>.
$onlyAdmin[]
`
  })

bot.Command({
   name: "statusconfig",
   aliases: ["sc","etat"],
    code: `
    $title[<:configs:850845714531090444> Server configuration status ]
    $description[

      $addField[Edit Message;
$replaceText[$replaceText[$checkCondition[$getServerVar[messageedit]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Edit message**: \`$getServerVar[messageedit]\`
;yes]
         $addField[Edit Channel;
$replaceText[$replaceText[$checkCondition[$getServerVar[channeledit]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Edit channel**: \`$getServerVar[channeledit]\`
;yes]
          $addField[Embed Channel;
$replaceText[$replaceText[$checkCondition[$getServerVar[channelembed]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Embed channel**: \`$getServerVar[channelembed]\`
;yes]
$onlyAdmin[]
`
  
   })

bot.Command({
   name: "joke",
    code: `
    $title[$api[https://sv443.net/jokeapi/v2/joke/Any;setup]]
    $color[$random[0;999999]]
    $description[$api[https://sv443.net/jokeapi/v2/joke/Any;delivery]]
    $onlyAdmin[]
    `
  
   })



bot.Command({
name: "seteditmsg",
  aliases: ["messageedit", "msgedit", "editmsg", "editmessage"], 
code: `
$setServerVar[messageedit;$message[]]
$deletecommand[30000ms]
$deleteIn[30s]
  <:success:850913520408068098> **Message ID for i edit is \`$message[]\`**
  $onlyIf[$isNumber[$message[1]]==true;You can't put a invalid id message ]
$onlyAdmin[]

`
})

bot.Command({
name: "seteditchannel",
  aliases: ["channeledit", "cedit", "editc", "editchannel"], 
code: `
$setServerVar[channeledit;$mentionedChannels[1]]
$deletecommand[30000ms]
$deleteIn[30s]
<:success:850913520408068098> **Channel ID for the edit is <#$mentionedChannels[1]> (\`$message[]\`)**
$onlyIf[$channelExists[$findChannel[$message[]]]==true;That's not a channel]
$onlyAdmin[]
`
})

bot.Command({
name: "edit",
code: `
$deletecommand[3000ms]
$deleteIn[3s]
<:systeme1:850824160267206698><:systeme2:850824160313999370><:systeme3:850824160216481823> **Message edited.**
$editMessage[$getServerVar[channeledit];$getServerVar[messageedit];$message[]]
$onlyIf[$getServerVar[messageedit]!=Nothing;{description:<:error:850913520466919450> **The message for edit not set, make the command, make the command \`$messageedit ID_Message\`**}{color:ff0000}]
$onlyIf[$getServerVar[channeledit]!=Nothing;{description:<:error:850913520466919450> **The channel for edit not set, make the command \`$channeledit #channel\`**}{color:ff0000}]
$onlyIf[$message[1]!=;<:error:850913520466919450> **You didn't say anything, to make an edit you have to do the command \`$variable\` or \`$channeledit\` and \`$messageedit\`.**]
$onlyAdmin[]
`
})

bot.Command({
  name: "embed",
  code: `
 
  $deletecommand[3ms]
  $channelSendMessage[$getServerVar[channelembed];$message[]]
   $onlyIf[$message[1]!=;<:error:850913520466919450> **You didn't say anything, to make an embed you have to do the command \`$variable\` .**]
  $onlyIf[$getServerVar[channelembed]!=Nothing;{description:<:error:850913520466919450> **The channel to send an embed has not yet been defined, make the command \`$channelembed #channel\`**}{color:ff0000}]
 
  $onlyAdmin[]
`})


bot.Command({
  name: "channelembed",
  aliases: ["embedc","channele","embedchannel"],
  code: `
  $deletecommand[10000ms]
  $deleteIn[15s]
  $description[
<:Verified:850830649351077899> **Channel embed send definied {hyper:success:$message[]} \`($mentionedChannels[1])\`.** ]
  $setServerVar[channelembed;$mentionedChannels[1]]
  $onlyIf[$channelExists[$findChannel[$message[]]]==true;That's not a channel]
  $onlyAdmin[]
`})


bot.Command({
  name: "setupembed",
  aliases: ["setembed","configembed"],
  code: `
 
 $description[
 
<:configs:850845714531090444> **Channel Config: **
 \`$getServerVar[channelembed]\`
 \`\`\` $channelembed #channel  \`\`\` 
 
 
 ]
 $color[36393F]
`})

bot.Command({
  
  name: "snipe",
code:`
$channelSendMessage[$channelID[];{description:$getChannelVar[usertext]}{author:$getChannelVar[username]}{authoricon:$getChannelVar[useravatar]}{timestamp}{color:RANDOM}]
$onlyIf[$getChannelVar[usertext]!=;{title::x: Something went wrong!}{color:d0321d}{description:There is nothing to snipe!}]
$onlyAdmin[]
`
})

bot.Command({
   name: "variable",
 code: `
 $color[36393F]
 
 $description[
 <:settings:850845365003223090> **Here are all the variables you can use on the bot.**
 $addField[<:addfield:850966075033387058> Field;
\`\`\`{field:TITLE:BODY:yes/no}\`\`\`
;yes]
 $addField[<:attachement:850959565361381377> Attachement;
\`\`\`{attachment}\`\`\`
;yes]
  $addField[<:Timestamp:850959565331628043> Timestamp;
\`\`\`{timestamp}\`\`\`
;yes]
 $addField[<:images:850959565184565259> Image;
\`\`\`{image:IMAGEURL}\`\`\`
;yes]
   $addField[<:footer2:850959565305806848> FooterIcon;
\`\`\`{footericon:IMAGEURL}\`\`\`
;yes]
 $addField[<:footer:850959565431242812> Footer;
\`\`\` {footer:STUFF HERE}\`\`\`
;yes]
  $addField[<:image:850959565125320725> Thumbnail;
\`\`\`{thumbnail:IMAGEURL}\`\`\`
;yes]
 $addField[<:color:850959564849020979> Color;
\`\`\` {color:COLOR}\`\`\`
;yes]
   $addField[<:authorIcon:850966075016609852> AuthorIcon;
\`\`\`{authoricon:IMAGEURL}\`\`\`
;yes]
 $addField[<:author:850959565075644416> Author;
\`\`\`{author:STUFF HERE}\`\`\`
;yes]
  $addField[<:title:850966075108622386> Title;
\`\`\`{title:STUFF HERE}\`\`\`
;yes]
 $addField[<:rr:850959564957810708> Description;
\`\`\`{description:TEXT}\`\`\`
;yes]
 
 
 
 ]
 $footer[For more help make the command $support;https://images-ext-1.discordapp.net/external/mAOeFbfJExEySphC00eDc8Xdvx-LjxMvFPJkmq167aM/https/images-ext-2.discordapp.net/external/Y9A63cPGCVL68b-6taEwu9qDHHgF6BMWBpw_kL-qezU/https/images-ext-2.discordapp.net/external/TZV2fqBShHzofz9fhYUYZupLBVtMs7rH-MU9u3dR0gM/%25253Fsize%25253D128/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.webp]
 $addTimestamp
 $onlyAdmin[]
 `
})

bot.LoopCommand({
 name: "this can be anything, its just reference",
 code:`
 $color[36393e]
$description[<a:help:846518929723359272> **You need report someone who scam you or you need report a bot please report in <#$channelID[⛔・reports]>, use \`?tag report\` in <#$channelID[💻・commands]> for more infos.**
]
$useChannel[$channelID[🍀・j4j・fast]]

`
}, 3600000 )


bot.LoopCommand({
 name: "this can be anything, its just reference",
 code:`
 $deleteIn[1ms]
<a:boostgreen:844446002404524052> **Dont forgot check perks of boosters**
$useChannel[$channelID[💎・booster・perks]]

`
}, 28800000)

bot.LoopCommand({
 name: "this can be anything, its just reference",
 code:`
 $deleteIn[1ms]
<a:clover:830789995140743178> **Dont forgot check the roles you can get in our server for support us**
$useChannel[$channelID[💝・support・us]]

`
}, 28800000)
