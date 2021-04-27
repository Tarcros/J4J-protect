module.exports = ({
    name: "inv",
    aliases: ["inventory"],
    code: `
    $author[🤵🏻INVENTAIRE💰]
    
    $onlyIf[$message[1]==;]
    $footer[Inventaire Nuk3 - Page 1/? ;$userAvatar[$authorID]]
    $thumbnail[$userAvatar[$authorID]]
    $addTimestamp
    $color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]
    
    $description[
        <a:owner:741818171073232907> **__Inventaire__** de <@$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]> :
        $replaceText[$replaceText[$checkCondition[$sum[$getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]];$getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]]==0];true;
        **No Found**];false;$replaceText[$replaceText[$checkCondition[$getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true;];false;
        **🔑Key(s)🔑**
        $getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] clé(s).🌟🔹️]$replaceText[$replaceText[$checkCondition[$getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🌮Nourriture(s)🥪**
        $getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] de Nourriture(s).🔸️]$replaceText[$replaceText[$checkCondition[$getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **👨‍🍳Cour de cuisine👨‍🍳**
        $getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] Cour(s) de cuisine suivie(nt).🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🎣Canne à pêche🐟**
        $getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] Canne à pêche(s).🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🥔Patate magique🌟**
        $getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] Patate(s) magique(s).🔹️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🏷Ticket🎫**
        $getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] Ticket(s).🔺️]$replaceText[$replaceText[$checkCondition[$getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🚙Voiture**
        $getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] utilisation(s) restante(s).🔹️]$replaceText[$replaceText[$checkCondition[$getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🧻Papier Toilette🧻**
        $getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] rouleau(x) de Papier(s) Toilette(s).🔹]$replaceText[$replaceText[$checkCondition[$getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🕴🏼Garde du corp🕴🏿**
        $getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1;yes]];true;$authorID];false;$mentioned[1;yes]]] Privilège(s) de protection.🌟]  ]
        
        ]
        
    `
})