module.exports = ({
    name: "massrole",
    code: `
    
    $massRole[add;$mentionedRoles[1]]
    
    $onlyIf[$roleExists[$mentionedRoles[1]]==true;]
    $onlyAdmin[<:no:765020908833341490> Seul les administrateurs peuvent réalisé cette commande.]
    <:good:765025682068865054> **Rôle Massif terminé, confirmé et réalisé!**
    $onlyBotPerms[manageroles;]
    
    `
})