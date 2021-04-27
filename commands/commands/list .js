module.exports = {
    name: "bump",
    aliases: ["testlist","testlist"],
    code: `
    $addReactions[772119320389484544;772119189225734154]
    $author[$getUserVar[listname] ・ Server List;$getUserVar[listlogo]]
    $description[ $getUserVar[listdesc]

    <:members:751759196911042560> **Members:** \`$getUserVar[listmember]\`  <:online:751759197028483093>**Online:** \`$getUserVar[listonline]\`  **Etat:** $getUserVar[listetat]
    <:invite:751759197087072377> **Invite:**  {hyper:**Join Now!**:$getUserVar[listinvite]}   <:pen:774560204783747072> **Langage:** \`$getUserVar[listlang]\` <a:or:773635941767446588> **Puber: ** <@$getUserVar[listpuber]>
        $footer[ Server Info when adding ;$userAvatar[$getUserVar[listpuberID]]]
        $addTimestamp
        $color[$getUserVar[listcolor]]
        $deletecommand[1ms]
]
**$getUserVar[listinvite]**

    
$onlyForUsers[315244741287477250;784348505615499314;784505815112613888;784879604099317811;691118003827507202;713747686083395585;]
  
    
    
    
    
    `
}