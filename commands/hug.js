const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const user = message.mentions.users.first();
    let gifs = [
        "https://media.tenor.com/images/15c39a7d6b03267941a87b24483ab696/tenor.gif",
        "https://31.media.tumblr.com/f1f87c6005c580ad61155ea9e26c6d88/tumblr_inline_nanykpgO701s6lw3t.gif",
        "https://media.tenor.com/images/3d9c3a9c945fa8d27e6d3a0e1ec83f03/tenor.gif",
        "https://media.tenor.com/images/834b104a7748ef6f2a15876c97fdbafa/tenor.gif",
        "https://media.tenor.com/images/071e14a3dca869d9e6e27f1aa702438b/tenor.gif",
        "https://i.pinimg.com/originals/38/93/c1/3893c18b81ef6e070f6a1c3a2f469d9d.gif",
        "https://thumbs.gfycat.com/NeedyImmenseKitten-max-1mb.gif",
        "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/popasia%20at%20the%20end%20of%20the%20day.gif?itok=Lc3GREnM&mtime=1409128852.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];


    if(!user){
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`look here ${message.author.username} have to ping someone to hug them, if you have no one well um *hugs* :flushed:`)
        .setImage(pick)
        message.channel.send(embed)
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`${message.author.username} hugs ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }

 
}

module.exports.help = {
    name: "hug",
     description: "Sends a hugging gif",
    usage: " <user>",
    aliases: ["hug_user"]  

}