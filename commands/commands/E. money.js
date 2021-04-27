module.exports = ({ 
    name: "money",
    code: `
    $onlyIf[$message[1]!=$mentioned[1];]
    $onlyIf[$message[1]==;]
    $author[$username[$authorID] Money ;$userAvatar[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$mentioned[1]];false;$authorID]]]
    $thumbnail[$userAvatar[$authorID]]
    $description[ 
        **Money 💰**: \`$$getVar[money;$replaceText[$replaceText[$checkCondition[$message[1]!=];true;$mentioned[1]];false;$authorID]]\`
        
    ]
    $footer[ Nuk3 Money]
    $color[F9F517]
  
    $addTimestamp
    
    `
})