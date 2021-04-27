module.exports = ({
    name: "date",
    aliases: ["today?"],
    code: `
    $cooldown[10s;En si peux de temp on est toujour aujourd'hui ne t'inquiète pas!]
    <:date:775136922707951636> **La date complète est \`$day/$month/$year\`.**
    
    `
})