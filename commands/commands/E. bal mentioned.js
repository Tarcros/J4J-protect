module.exports = ({
    name: "bal",
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[Balance $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
    $description[💳 Balance <@$mentioned[1;yes]>  <a:owner:741818171073232907>
        **Money💰 **
        $$getVar[money;$mentioned[1;yes]]                    **Point Bonus <:nuk3economie:753772063604473888>**
        **Cash💸    **             $getVar[pointbonus;$mentioned[1;yes]] 
        $$getVar[Cash;$mentioned[1;yes]]
       ** Bank:bank:   **            **Gems** <:gems:741859115718017065>
       $$getVar[Bank;$mentioned[1;yes]]                      $getVar[diamand;$mentioned[1;yes]]  
       ** Total📊   **
       $$sum[$getVar[money;$mentioned[1;yes]];$getVar[Cash;$mentioned[1;yes]];$getVar[Bank;$mentioned[1;yes]]]
    ]
    $color[F9F517]
    
    `
})