module.exports = ({
    name: "cuisine",
    aliases: [ "cook" ],
    code: `
    $author[Hmm , cette bonne odeur !;$userAvatar[$authorID]]
    $description[Tu as cuisiné pour \`$$random[15;40]\` ,\nles **$randomText[politiciens;enfants de l'orphelinat;clochards;villageoises;chanteurs;chômeurs;marchants du coin ; passant; les conducteurs ]** ont adoré tes $randomText[frites🍟;biscuits aux citrons🥮;pizzas🍕;gâteaux🎂;lasagnes<<:lasagne:743090841521750088>743090841521750088>;petit plats🍱;bacons🥓;petit four🧁]\n et t'on donné un pourboire de \`$$random[0;10]\`.]
    $footer[Tu es un très bon cuisinier.🍗]
    $color[FFC500]
    $setVar[money;$sum[$getVar[money;$authorID];$sum[$random[15;40];$random[0;10]]];$authorID]
    $globalCooldown[7m;<:temp:741859094003974146>Tu doit attendre \`{time}\` pour pouvoir recommencé à cuisiné , pour le moment fait la vaisselle 🍴!]
    $setVar[Gooddeed;$sum[$getVar[Gooddeed;$authorID];1];$authorID]
    $setVar[réputation;$sum[$getVar[réputation;$authorID];$random[0;3]];$authorID]
    $suppressErrors[<:no:765020908833341490> Tu as mal exécuté la commande, vérifie là.]
    $addTimestamp
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
    $onlyIf[$getVar[cuisine;$authorID]>0;<a:thefalse:761436373005238333> Tu ne sais même pas cuisiner ..Achète un cour de cuisine à la boutique.\`(,shop)\` 👨‍🍳]
    $onlyIf[$getVar[cuisine;$authorID]<3;]
    $onlyForUsers[315244741287477250;]
    `
})