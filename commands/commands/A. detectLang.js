module.exports = ({
    name: "detectlang",
    aliases: ["dtlg"],
    code: `
    $author[Detect Langages; https://media.discordapp.net/attachments/768640549564448798/774858735284649984/language-icon-png-10.jpg]
    $description[ <:pen:774560204783747072> **Detection de langue...**

        :speech_balloon: **Message:** \`$message[]\`
        <:tranlate:774863222486466611> **Langue détecté:**  \`$detectLang[$message[]]\`
    
    ]
    $color[2EA67B]

    $onlyIf[$message[]!=;<:no:765020908833341490> Fournie un message.]
    
    `
})