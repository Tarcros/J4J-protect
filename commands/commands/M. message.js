module.exports = ({
    name: "message",
    code: `
    $deletecommand[1ms]
    $author[$username[$authorID];$userAvatar[$authorID]]
    $description[$message[]]
    $footer[Message de $username[$authorID]]
    $onlyPerms[manageserver;<:no:765020908833341490> Tu n'as pas la permission pour réalisé cette commande. **'manage_server'**]
    $onlyIf[$message[]!=;<:no:765020908833341490> Tu dois mettre un message.]
    $color[$random[0;999999]]
    $addTimestamp
    $suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
    $globalCooldown[10s;<:temp:741859094003974146> Veuillez ne pas spam la commande.]
    
    `
})