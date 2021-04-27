module.exports = ({
    name: "listlang",
    code: `
    $deleteIn[30s]
    $deletecommand[29s]
$setUserVar[listlang;$message[1]]
$author[Langage Bump;https://cdn.discordapp.com/avatars/736555562472570981/0c97697752b378540ede2348452a276b.png?size=4096]
$description[ <:pen:774560204783747072> **The global language to speak on your server is now: \`$message[1]\` <:yes:772119320389484544>**]
$color[99aab5]
    $suppressErrors[ <:no:765020908833341490> **Error ! \n For help look in <#774569955286450196> !**]
    $onlyIf[$message[1]!=;<:no:765020908833341490>** Give me the information(s).**]
    $onlyForUsers[315244741287477250;784348505615499314;784505815112613888;784879604099317811;691118003827507202;713747686083395585;]

 
    `
})