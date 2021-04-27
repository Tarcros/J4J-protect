module.exports = {
    name: "channelcount",
    aliases: ["channelscount","channel-count","channels-count"],
code: `
<:channel:759898754433679400> En ce moment, le serveur a $replaceText[$replaceText[$checkCondition[$channelCount==0];true;\`Aucune\`];false;\`$channelCount\`] **channels** de créer.

`
}