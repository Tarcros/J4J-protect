module.exports = ({
    name: "leaderboard",
    aliases: ["lb", "top", "best"],
    code: `
    $author[Leaderboard $message[];https://media.discordapp.net/attachments/768640549564448798/774850753054507008/lb1.png]
    $description[
    **$globalUserLeaderboard[$message[];asc]**
    ]
    $color[35CF97]
    $footer[Top $message[];https://images-ext-1.discordapp.net/external/ewoSxNcZvj1y4x2O2Bf-YiWH8byxJvKzMRI2HVNXvTQ/https/images-ext-2.discordapp.net/external/9uQcQKx4mvr_rGQe7BpSf58FonVuD-5_SxnsekQgve0/https/cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png]
    $addTimestamp
    $onlyIf[$message[]!=;Tu dois donner une valeur \`(exemple: ,lb money ou ,top Cash)\`]
    
    `
})