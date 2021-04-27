module.exports = ({ 
    name: "money",
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Money  ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Money 💰:** \`$$getVar[money;$mentioned[1;yes]]\`
        
    ]
    $footer[ Nuk3 Money]
    $color[F9F517]
    $addTimestamp
    
    `
})