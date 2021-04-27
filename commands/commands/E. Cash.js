module.exports = ({ 
    name: "cash",
    code: `
   
    $onlyIf[$message[1]==;]
    $author[$username[$authorID] Cash ;$userAvatar[$authorID]]
    $thumbnail[$userAvatar[$authorID]]
    $footer[ Nuk3 Cash]
    $color[F00D5EC]
    $addTimestamp
    $description[ 
        **Cash 💸**: \`$$getVar[Cash;$authorID]\`
        
    ]
    
    `
})