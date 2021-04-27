module.exports = ({
    name: "help",
    code: `
    $onlyIf[$message[1]==;]
    $color[03eb7c]
    $author[Nuk3cl3ar - Help Global;https://cdn.discordapp.com/avatars/735499202582413342/7c77c3f94af5347455713fa452b620ff.png]
    $deletecommand[1ms]
    $description[<:nuk3bot:753772063512330261> » Tu n'as pas encore <@735499202582413342> sur ton serveur **{hyper:$username[$authorID]:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot}** ?
        
         <:nuk3mod:753772063780634716> **Moderation **               <:nuk3fun:753772064015646761>** Fun**                       <:nuk3image:753772063990480927>**Image**
             \`,help admin\`                  \`,help fun\`             \`,help image\`
        
        <:nuk3economie:753772063604473888>**Economie**                   <:nuk3giveaway:753772063616925777>**Giveaway**             <:nuk3autre:753772065823260704>**Autre**
         \`,help economie\`       \`,help giveaway\`      \`,help autre\`
        
         <:nuk3music:753772063692685412>**Music**                  <:nuk3config:753772064393134164>**Config**                            <:nuk3support:753772063743017050>**Support**
           \`,music\`                        \`,config\`                           \`,support\`
        
        <:nuk3info:753805249440907295> **Bot Info  **              <:nuk3more:753805249122402304>**More Info**                   <:nuk3plus:753772063508136109>**Plus**
         \`,botinfo\`                   \`,more info\`                        \`,plus\`
        $image[https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png]
                                           **{hyper:Invite:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot}     |     {hyper:Support:https://discord.gg/nhhZxVK}     |     {hyper:Avatar:https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png}**]
        $footer[Merci de m'avoir ajouté sur ton serveur☑;$userAvatar[$authorID]]
        $globalCooldown[15s;Veuillez attendre {time} pour pouvoir réutiliser ces magnifiques commande.]
        $addTimestamp
        $thumbnail[https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
        
    `
});