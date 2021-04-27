module.exports = ({
    name: "beg",
    code: `
    $setVar[money;$sum[$getVar[money;$authorID];$random[0;60]];$authorID]
    $title[<a:please:741882047894781982>**Beg** ]
    $description[$randomText[ **Bob L'éponge** a refusé de vous donner de l'argent..Du coup son manager vous a donné $; **MisterV** vous a fait un don de $; **Laylow** vous a donné $;**Dyno Bot** : Tu me fais pitié petit , tien $; **Dracula** te mort et te donne du sang qui vaut $; **Tim McGraw** te laisse un de ses chapeaux préféré , celui-ci vaut $; **Rowan Atkinson** te sourit en laissant $; **Eddie Murphy** se batte avec toi pour $; **Chuck Lorre** te fait un don de $; **Danica Patrick** te fait un clin d'oeil et te laisse $; **Kanye West** te donne méchamment $; **Lady Gaga** te vole $; **Stephen Hawking** avec la force de sa pensée te donne $; **SonBest** te donne carrément $; **Un inconnue** te tabasse mais laisse tomber $]**$random[0;60]**]
    $footer[Vous faite pitié quand même..;$userAvatar[$authorID]]   
    $color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
    $globalCooldown[119s;<:temp:741859094003974146> Tu dois attendre encore \`{time}\` pour remédier un passant, tu es envahissant..]
    $onlyIf[$getVar[réputation;$authorID]>0;🚨Désormais tu ne peux plus mendier de l'argent, tu as trop demandé aux célébrités,  maintenant, ils te repoussent tous..Ta réputation doit être de plus de 1%.]
    $setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];1];$authorID]
    $setVar[réputation;$sub[$getVar[réputation;$authorID];1];$authorID]
    $suppressErrors[<a:thefalse:744770469122539521> **| Tu as mal exécuté la commande vérifie là .**] 
    
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];$random[0;6]]]
    
    `
})