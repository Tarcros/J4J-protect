module.exports = {
    name: "botinfo",
    aliases: ["bot?"],
    code: `
    $cooldown[45s;<:temp:741859094003974146> Une page avec mes informations est déjà présent sur le serveur.]
    $author[Nuk3cl3ar Bot Info ;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]
    $thumbnail[https://cdn.discordapp.com/attachments/737751320412422195/741753635779772486/unknown.png]
    $color[03eb7c]
    $description[

              **Bot » **<:botverif:767208029988847676>                                                           **Dev »** <:discord_bot_dev:741473584576200735>
       > **Bot:** {hyper:\`Nuk3\`:https://top.gg/bot/735499202582413342}$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[735499202582413342]==offline];true;<:offline:765646063071264862>];false;]                                         **Développeur :** {hyper:\`*тαя¢яσѕ#9710\`:https://top.gg/user/315244741287477250}$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==online];true;<:online:765645895685242891>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==dnd];true;<:dnd:751759197082877983>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==idle];true;<:idle:751759197095329822>];false;]$replaceText[$replaceText[$checkCondition[$status[315244741287477250]==offline];true;<:offline:765646063071264862>];false;]
       > **Descriminateur Bot:** \`#5130\`             **Descriminateur Dev:** \`#9710\`
       > **ID Bot:** \`735499202582413342\`           **ID Dev:** \`315244741287477250\`
       <:nuk3config:753772064393134164>** Systeme**
      \`\`\`xl
      Prefix: ,
      Version: 1.5.0
      Uptime: $uptime  
      Memoire: $memory Mb
      Librarie: discord.js\`\`\`
      <:stats:767214446052769843>** Stats**
      \`\`\`xl
        Serveurs: $serverCount Servers
        Utilisateurs: $allMembersCount Users
        Ping: $ping ms
        +270 Commands\`\`\`
                                                        {hyper:**Add The Bot**:https://discord.com/api/oauth2/authorize?client_id=735499202582413342&permissions=8&scope=bot} ** | ** {hyper:**Support**:https://discord.gg/5FpfExr} ** | ** {hyper:**Avatar**:https://cdn.discordapp.com/attachments/737751320412422195/745122053832835092/eRa_2.png}**  |**  {hyper:**Donate**:https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YCZV7EGC79QX2&source=url} 
       
    ]
    $footer[Nuk3 Bot Info ;$userAvatar[$authorID]]
    $addTimestamp
    
    $botTyping
     `
}