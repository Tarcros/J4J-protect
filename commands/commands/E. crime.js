module.exports = ({
    name: "crime",
    code: `
    $onlyIf[$getVar[Police;$authorID]<6;<:no:765020908833341490> Désormais tu ne peux plus faire de crime car tu as **$getVar[Police;$authorID]** Policiers à tes trousses.]
$setVar[Cash;$sum[$getVar[Cash;$authorID];$random[-300;800]];$authorID]
$replaceText[$replaceText[$checkCondition[$random[-300;800]<0];true;$randomText[Tu ne pouvais pas faire ton crime en volant la banque de New York, alors tu as perdu **$$random[-300;800]**;Vous avez essayé de voler un homme sur un vélo mais il a rapidement appelé les policiers et vous vous êtes fait arrêter, vous perdez **$$random[-300;800]**;Il y avait des gens autour de toi pour te signaler quand ils t'ont vu voler, tu as perdu **$$random[-300;800]**]];false;**$username[$authorID]** Tu as **$randomText[volé discrètement à la banque; tué un policier; tué un inconnu; volé des saucisses aux marchands du coin; volé une vieille voiture; braquer des prostituées ; volé la sucette du fils du maire de la ville ; vendu des bébés chats à une personne  visuellement incorrecte; écrasée une passante ; vendue des albums de music illégaux ; vendu de la drogue ; braqué une épicerie ; donné des fausses informations sur quelqu'un de politique; distribué à des gangs des armes à bas prix; kidnappés la grenouille du maire; prit un objet un musée; échangé des bébés à la maternité...]** et tu as pu récupérer **$$random[-300;800]** Cash.]
$globalCooldown[25m;<:temp:741859094003974146> Vous ne pouvez pas commettre de crime si le temps de recharge n'est pas terminé \`{time}\` .]
$setVar[Police;$sum[$getVar[Police];$random[0;3]]]
$setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];3];$authorID]
$suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**]
$setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]

`
})