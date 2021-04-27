module.exports = ({
    name: "listinvite",
    code: `
    $deleteIn[30s]
    $deletecommand[29s]
$setUserVar[listinvite;$message[1]]
> <:invite:795471356283715625> **The invitation link is now: \`$message[1]\` <:yes:772119320389484544>**

    $suppressErrors[ <:no:765020908833341490> **Error ! \n For help look in <#774569955286450196> !**]
    $onlyIf[$message[1]!=;<:no:765020908833341490>** Give me the information(s).**]
    $onlyForUsers[315244741287477250;784348505615499314;784505815112613888;784879604099317811;691118003827507202;713747686083395585;]

    `
})