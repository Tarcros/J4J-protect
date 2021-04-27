module.exports = {
    name: "caractère",
    aliases: [ "char", "caractere"],
    code: `
    
    Votre message contient \`$charCount\` caractères (espaces compris)
    $onlyIf[$message[1]!=;<:no:765020908833341490> Vous n'avez pas marque de mot.]
    
    `
}