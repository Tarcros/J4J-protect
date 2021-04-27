module.exports = ({ 
    name: "messages",
    code: `
   
    $author[$username[$authorID] Messages 💬 ;$userAvatar[$authorID]]
    $thumbnail[$userAvatar[$authorID]]
    $footer[ $serverName[$guildID] Messages ]
    $color[$random[0;999999]]
    $addTimestamp
    $description[ 
        **Message envoyé sur le serveur **: \`$getUserVar[messages;$authorID] messages 💬\` 
        
    ]
    
    $onlyIf[$message[1]==;]
    
    `
})
