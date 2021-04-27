module.exports = ({ 
    name: "rob",
    aliases: [ "steal"],
    code: `
    $setVar[money;$sub[$getVar[money;$mentioned[1;yes]];$random[0;1500]];$mentioned[1;yes]]
    $setVar[money;$sum[$getVar[money;$authorID];$random[0;1500]];$authorID]
    $author[Rob;$userAvatar[$authorID]]
    $color[$random[0000;99999]]
    $description[$username[$authorID] vole de l'argent à <@$mentioned[1;yes]> **$randomText[ en lui pointant un fusil entre les deux yeux et réussi à lui soutirer **\`$$random[0;1500]\`**  ; en lui donnant des coups de couteau et réussi à lui voler **\`$$random[0;1500]\`** ; en l'aveuglant avec un désinfectant et réussi à lui soutirer **\`$$random[0;1500]\`** ; en lui cognant la tête avec une grosse pierre et réussi à lui soutirer **\`$$random[0;1500]\`; durant son sommeil et réussi à lui volé discretement **\`$$random[0;1500]\`; lors d'un câlin amical et réussi à lui prendre **\`$$random[0;1500]\`; en lui roulant dessus et réussi à récupéré **\`$$random[0;1500]\` et sa montre ; pendant qu'il écoutais de la musique et réussi à lui déraubé **\`$$random[0;1500]\`; durant un concert et réussi à lui soutirer **\`$$random[0;1500]\`] ]
    $setVar[réputation;$sub[$getVar[réputation;$authorID];$random[1;3]];$authorID]
    $setVar[Evenement;$sum[$getVar[Evenement;$authorID];4];$authorID]
    $globalCooldown[12m;<:temp:741859094003974146> Tu dois attendre \`{time}\` pour pouvoir de nouveau tenter de volé quelqu'un ]
    $onlyIf[$userExists[$mentioned[1;yes]]==true;<:no:765020908833341490>  Ce n'est pas une mention. ]
    $onlyIf[$mentioned[1;yes]!=735499202582413342;<:no:765020908833341490> **| Tu ne peux pas mentionner le bot pour ce genre de commande.**]
    $onlyIf[$mentioned[1;yes]!=$authorID;<:no:765020908833341490> Tu ne peux pas te mentionner toi-même.]
    $onlyIf[$getVar[garde;$mentioned[1;yes]]<1;<:no:765020908833341490> ⚠️🕴🏾 **Cette personne a __un Garde du corp__ donc ne peux pas être victime d'un vole ⚠️!**]
    $onlyIf[$getVar[Police;$authorID]<5;<:no:765020908833341490> Tu as trop de policier autour de toi, fait de bonne action ou ils finiront par t'attraper ...]
    $onlyIf[$getVar[money;$authorID]>1500;<:no:765020908833341490> Vous n'avez pas assez d'argent. Vous devez avoir au moins **$1500 de Money** pour pouvoir commettre un vole.]
    $onlyIf[$getVar[money;$mentioned[1;yes]]>1500;<:no:765020908833341490> Cette personne doit avoir **plus de $1500** pour être victime d'un vole.]
    $onlyIf[$message[1]!=;<:no:765020908833341490> Tu dois mentionner quelqu'un.]
    $onlyIf[$isBot[$mentioned[1;yes]]!=;]

    
    `
})