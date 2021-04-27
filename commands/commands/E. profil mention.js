module.exports = ({
    name: "profil",
    code: `
    
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $color[$random[00;999999]]
    
    $author[$username[$mentioned[1;yes]] profile  ;$userAvatar[$mentioned[1;yes]]]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $description[
        <a:owner:741818171073232907> $replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==offline];true;<:offline:765646063071264862>];false;]<@$mentioned[1;yes]> $replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BALANCE];true;<:ballance:759899412704133130>];false;]$replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BRAVERY];true;<:bravery:759899316755759114>];false;]$replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BRILLIANCE];true;<:brillance:759900477369483265>];false;]
        
    **Rank:** $replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==0];true;\`None\`\n{hyper:□□□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==1];true;<:prestiger1:749725312891224115>\n{hyper:■□□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==2];true;<:prestiger2:749725313050607626>\n{hyper:■■□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==3];true;<:prestiger3:749725312731971666>\n{hyper:■■■□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]>3];true;<:vip:766141422503067699>\n{hyper:■■■■:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]
    **Balance**:
    **$$getVar[money;$mentioned[1;yes]]** Money 💰
    **$$getVar[Cash;$mentioned[1;yes]]** Cash 💸     **| $$sum[$getVar[money;$mentioned[1;yes]];$getVar[Cash;$mentioned[1;yes]];$getVar[Bank;$mentioned[1;yes]]]** Total 📊
    **$$getVar[Bank;$mentioned[1;yes]]** en Bank :bank:

       🎖️**$getVar[réputation;$mentioned[1;yes]]%** de réputation                       **Clan:** \`$getVar[clan;$mentioned[1;yes]]\` $getVar[clanlogo;$mentioned[1;yes]]
       $replaceText[$replaceText[$checkCondition[$getVar[Gooddeed;$mentioned[1;yes]]>0];true;✨**$getVar[Gooddeed;$mentioned[1;yes]]%** de bonnes actions];false; **<:no:765020908833341490> Mauvais personne**]              ** Point Bonus:** $replaceText[$replaceText[$checkCondition[$getVar[pointbonus;$mentioned[1;yes]]==0];true;\`Aucun\` <:nuk3economie:753772063604473888> ];false;$getVar[pointbonus;$mentioned[1;yes]] Point Bonus <:nuk3economie:753772063604473888>]     
       $replaceText[$replaceText[$checkCondition[$getVar[Police;$mentioned[1;yes]]==0];true;👮**‍Aucun** Policier];false;**👮‍$getVar[Police;$mentioned[1;yes]]** Policier(s) te surveille]
       👥 $replaceText[$replaceText[$checkCondition[$getVar[Amis;$mentioned[1;yes]]==0];true;**Aucun**];false;$getVar[Amis;$mentioned[1;yes]]] Ami(s) $replaceText[$replaceText[$checkCondition[$getVar[Amis;$mentioned[1;yes]]==0];true;];false;(**$replaceText[$replaceText[$checkCondition[$getVar[Amis;$mentioned[1;yes]]==0];true;Aucun];false;$getVar[Amis;$mentioned[1;yes]]]** sur ce serveur)]
    
    
    
    
    ]
    
    `
    })