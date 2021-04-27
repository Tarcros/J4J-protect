module.exports = ({
    name: "bal",
    code: `
    $onlyIf[$message[1]!=$mentioned[1];]
    $onlyIf[$message[1]==;]
    $thumbnail[$userAvatar[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]]
    $author[Balance $username[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]];$userAvatar[$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]]
    $description[💳 Balance <@$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]>  <a:owner:741818171073232907>
        **Money💰 **
        $$getVar[money;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]                    **Point Bonus <:nuk3economie:753772063604473888>**
        **Cash💸    **             $getVar[pointbonus;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]] 
        $$getVar[Cash;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]
       ** Bank:bank:   **            **Gems** <:gems:741859115718017065>
       $$getVar[Bank;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]                      $getVar[diamand;$authorID]  
       ** Total📊   **
       $$sum[$getVar[money;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]];$getVar[Cash;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]];$getVar[Bank;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$mentioned[1;yes]];false;]$replaceText[$replaceText[$checkCondition[$message[1]!=$mentioned[1;yes]];true;$authorID];false;]]]
    ]
    $color[F9F517]
    
    `
})