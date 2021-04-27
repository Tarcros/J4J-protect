module.exports = ({ 
    name: "bank",
    code: `
   
    
    $author[$username[$authorID] Bank ;$userAvatar[$authorID]]
    $thumbnail[$userAvatar[$authorID]]
    $footer[ Nuk3 Bank]
    $color[C900EC]
    $addTimestamp
    $description[ 
        **Bank :bank:**: \`$$getVar[Bank;$authorID]\`
        
    ]
    $onlyIf[$message[1]==╬╬;]
    
    `
})