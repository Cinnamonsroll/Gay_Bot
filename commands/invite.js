const Discord = require("discord.js")
module.exports.run = async (bot, message, args) =>{
    const embed = new Discord.MessageEmbed()
    .setColor("00ffff")
    .setDescription("[Invite Gay_Bot](https://discord.com/api/oauth2/authorize?client_id=692440402988630057&permissions=2081422583&scope=bot)")
    .addField("Top.gg", "https://top.gg/bot/692440402988630057")
    .addField("Bots For Discord", "https://botsfordiscord.com/bot/692440402988630057")
    .addField("Discord.bots.gg", "https://discord.bots.gg/bots/692440402988630057")
    .setFooter(`If you can also upvote Gay_Bot that would be pretty epic ♥ \nGay_Bot help server: https://discord.gg/t8yz9UG`)
    message.channel.send(embed)
}

module.exports.help ={
    name:"invite",
     description: "Sends gay bots embed",
    usage: " ",
    aliases:["add"],
    
}