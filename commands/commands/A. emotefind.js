module.exports = ({
    name: "emotefind",
        aliases: ["emojifind","findemote","findemoji"],
        code: `
        $color[36393E]
        $description[<:emote:759898470080577558> **Emoji ID ($message[1]) -** \`$findEmote[$message[1]]\` $replaceText[$replaceText[$checkCondition[$findEmote[$message[1]]==false];true;];false;<:$message[1]:$findEmote[$message[1]]>]]
      
        $onlyIf[$message[]!=;<:no:765020908833341490> Fournie le nom de l'emote.]
        
      `
})