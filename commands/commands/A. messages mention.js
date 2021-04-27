module.exports = ({ 
    name: "messages",
    code: `
    
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Messages 💬 ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Message envoyé sur le serveur par \`$username[$mentioned[1;yes]]\`**: \`$getUserVar[messages;$mentioned[1;yes]] messages 💬\`
        
    ]
    $footer[ $serverName[$guildID] Messages ]
    $color[$random[0;999999]]
    $addTimestamp
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $onlyIf[$message[1]!=;]
    
    `
})