module.exports = ({
    name: "listreset",
    code: `
    $deleteIn[30s]
    $deletecommand[29s]
$setUserVar[listname;Nothing]
$setUserVar[listdesc;Nothing]
$setUserVar[listinvite;Nothing]
$setUserVar[listmember;Nothing]
$setUserVar[listlang;Nothing]
$setUserVar[listpuber;Nothing]
$setUserVar[listcolor;Nothing]
$setUserVar[listetat;Nothing]
$setUserVar[listonline;Nothing]
$setUserVar[listlogo;Nothing]

$author[Reset stats Bump;https://cdn.discordapp.com/avatars/736555562472570981/0c97697752b378540ede2348452a276b.png?size=4096]
$description[ **All stats is now \`Reset\` by <@$authorID> <:yes:772119320389484544>**]
$color[ff0000]
    $suppressErrors[ <:no:765020908833341490> **Error ! \n For help look in <#774569955286450196> !**]
    
    $onlyForUsers[315244741287477250;784348505615499314;784505815112613888;784879604099317811;691118003827507202;713747686083395585;]

 
    `
})