module.exports = {
    name: "kick",
    code: `
    $description[<:success:770826800435036162> \`$username[$mentioned[1]]\` a été **kick** du serveur par **$username[$authorID]**. ]
    $kick[$mentioned[1];Reason here (not necessary)]
    
    `
}