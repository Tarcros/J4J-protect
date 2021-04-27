module.exports = ({
    name: "poll",
    code: `
    $title[📋 Sondage !]
    $addReactions[✅;❎]
    $description[$message[]] 
    $footer[ Tu es pour ✅ ? - ou contre ❎ ?] 
    $suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
    $globalCooldown[10s;<:temp:741859094003974146> Veuillez ne pas spam la commande.]
    $addTimestamp
    $deletecommand[1ms] 
    $onlyBotPerms[addreactions;<:no:765020908833341490> Je n'est pas la permission pour ajouter une réaction. Il me faut la permission : **'addreactions'**.]
    $onlyPerms[manageserver;<:no:765020908833341490> Tu n'as pas la permissionne pour faire cela 'manageserver']
    $onlyIf[$message[]!=;<:no:765020908833341490> Merci respecter le plan de travaille de la commande. Mettez un message pour votre sondage]
 
    `
})