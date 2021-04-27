module.exports = {
    name: "etat",
    code: `
    $color[36393E]
    $title[<:setting:769375912751529985> Etat de configuration du serveur ]
    $description[
        <:good:765025682068865054>: **Configurer**
        <:no:765020908833341490>: **Non configurer**

        **__Channels__**
        $replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==None];true;<:no:765020908833341490>];false;<:good:765025682068865054>] **Welcome**: $replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==None];true;\`Non Définie\`];false;<#$getServerVar[joinchannel]> \`$getServerVar[joinchannel]\`] 
        $replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==None];true;<:no:765020908833341490>];false;<:good:765025682068865054>] **Leave**: $replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==None];true;\`Non Définie\`];false;<#$getServerVar[leavechannel]> \`$getServerVar[leavechannel]\`] 
    ]  
    
    
    `
}