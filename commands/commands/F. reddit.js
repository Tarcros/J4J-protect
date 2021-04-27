module.exports = ({
    name: "reddit",
    code: `
    $color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
    $author[u/$api[https://meme-api.herokuapp.com/gimme/$message[];author]]
    $description[{hyper:$api[https://meme-api.herokuapp.com/gimme/$message[];title]:$api[https://meme-api.herokuapp.com/gimme/$message[];postLink]}]
    $image[$api[https://meme-api.herokuapp.com/gimme/$message[];url]]
    $footer[🔼 Upvotes: $api[https://meme-api.herokuapp.com/gimme/$message[];ups];https://media.discordapp.net/attachments/764705984199000105/767131664576151562/logo-reddit.png?width=663&height=663]
   
    $onlyIf[$api[https://meme-api.herokuapp.com/gimme/$message[];nsfw]!=true;{description:<:no:765020908833341490> Contenu bloqué: peut contenir du contenu réservé aux adultes.}]
    $onlyIf[$api[https://meme-api.herokuapp.com/gimme/$message[];message]!=Ce subreddit n'a pas de post ou n'existe pas.;{description:<:no:765020908833341490> Ce subreddit n'existe pas!}]
    $onlyIf[$message[]!=;{description:<:no:765020908833341490> Veuillez fournir un subreddit.}{authorIcon:$authorAvatar}{color:RED}{author:Erreur}]
    
    `
   })