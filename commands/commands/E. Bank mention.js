module.exports = ({ 
    name: "bank",
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Bank ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Bank :bank::** \`$$getVar[Bank;$mentioned[1;yes]]\`
        
    ]
    $footer[ Nuk3 Bank]
    $color[C900EC]
    $addTimestamp
    
    `
})