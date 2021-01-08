const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    const user = message.mentions.users.first();
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    let gifs = [
        "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif",
        "https://media.giphy.com/media/SsxVZIX3NxZwMC2uhK/giphy.gif",
        "https://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif",
        "http://3.bp.blogspot.com/-zMkaI1wwf-I/UQsuaj0L8oI/AAAAAAAAAFA/eF6ScfYlp3I/s400/url.gif",
        "https://media1.tenor.com/images/28c19622e8d7362ccc140bb24e4089ec/tenor.gif",
        "https://i.pinimg.com/originals/07/b0/4e/07b04ed34ade6c1c87d75749a3ea4b6a.gif",
        "https://66.media.tumblr.com/298df25d8156ba55e9865e87c8c88ce9/tumblr_p496zbg7Bw1wz6squo1_500.gif",
        "http://pa1.narvii.com/5798/a16a122dbebab84191587c4a863571a7a88c4e52_hq.gif",
        "https://66.media.tumblr.com/2288b9b77b5f28e8c0f251d024e303e2/tumblr_ps10fyzPa41sxfvy5o2_500.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    if(!user){
        message.reply('You have to ping the person you want to kill, SMH ')
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('b01200')
        .setTitle(`${message.author.username} just killed ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }

    

 
}

module.exports.help = {
    name: "kill",
     description: "Sends kill image",
    usage: " <user>",
    aliases: ["kill_user"]

}