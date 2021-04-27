module.exports = ({
    name: "inv",
    aliases: [ "inventory"],
    code: `
    $author[$username[$mentioned[1;yes]] Inventaire ;$userAvatar[$mentioned[1;yes]]]
    $onlyIf[$message[1]!=;]
    $onlyIf[$memberExists[$mentioned[1]]==true;]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $footer[Inventaire de $username[$mentioned[1]] | Nuk3 - Page 1/? ;$userAvatar[$mentioned[1]]]
    $addTimestamp
    $color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]
    
    $description[
        <a:owner:741818171073232907> **__Inventaire__** de <@$mentioned[1]> :
        $replaceText[$replaceText[$checkCondition[$sum[$getVar[Keys;$mentioned[1;yes]];$getVar[nourriture;$mentioned[1;yes]];$getVar[cuisine;$mentioned[1;yes]];$getVar[peche;$mentioned[1;yes]];$getVar[Patate;$mentioned[1;yes]];$getVar[ticket;$mentioned[1;yes]];$getVar[voiture;$mentioned[1;yes]];$getVar[papier;$mentioned[1;yes]];$getVar[garde;$mentioned[1;yes]]]==0];true;
        **No Found**];false;$replaceText[$replaceText[$checkCondition[$getVar[Keys;$mentioned[1;yes]]==0];true;];false;
        **🔑Key(s)🔑**
        $getVar[Keys;$mentioned[1;yes]] clé(s).🌟🔹️]$replaceText[$replaceText[$checkCondition[$getVar[nourriture;$mentioned[1;yes]]==0];true; ];false;
        **🌮Nourriture(s)🥪**
        $getVar[nourriture;$mentioned[1;yes]] de Nourriture(s).🔸️]$replaceText[$replaceText[$checkCondition[$getVar[cuisine;$mentioned[1;yes]]==0];true; ];false;
        **👨‍🍳Cour de cuisine👨‍🍳**
        $getVar[cuisine;$mentioned[1;yes]] Cour(s) de cuisine suivie(nt).🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[peche;$mentioned[1;yes]]==0];true; ];false;
        **🎣Canne à pêche🐟**
        $getVar[peche;$mentioned[1;yes]] Canne à pêche(s).🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[Patate;$mentioned[1;yes]]==0];true; ];false;
        **🥔Patate magique🌟**
        $getVar[Patate;$mentioned[1;yes]] Patate(s) magique(s).🔹️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[ticket;$mentioned[1;yes]]==0];true; ];false;
        **🏷Ticket🎫**
        $getVar[ticket;$mentioned[1;yes]] Ticket(s).🔺️]$replaceText[$replaceText[$checkCondition[$getVar[voiture;$mentioned[1;yes]]==0];true; ];false;
        **🚙Voiture**
        $getVar[voiture;$mentioned[1;yes]] utilisation(s) restante(s).🔹️]$replaceText[$replaceText[$checkCondition[$getVar[papier;$mentioned[1;yes]]==0];true; ];false;
        **🧻Papier Toilette🧻**
        $getVar[papier;$mentioned[1;yes]] rouleau(x) de Papier(s) Toilette(s).🔹]$replaceText[$replaceText[$checkCondition[$getVar[garde;$mentioned[1;yes]]==0];true; ];false;
        **🕴🏼Garde du corp🕴🏿**
        $getVar[garde;$mentioned[1;yes]] Privilège(s) de protection.🌟]  ]
        
        ]
        
    `
})