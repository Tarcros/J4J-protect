module.exports = ({ 
    name: "cash",
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Cash ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Cash 💸:** \`$$getVar[Cash;$mentioned[1;yes]]\`
        
    ]
    $footer[ Nuk3 Cash]
    $color[00D5EC]
    $addTimestamp
    
    `
})