const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const user = message.mentions.users.first();
    let gifs = [
       "https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif",
       "https://media.tenor.com/images/853bb442dd8eae619c4a524ffad4261c/tenor.gif",
       "https://66.media.tumblr.com/4481ef00b011123d1f00a030c778bc3d/tumblr_opnpsmtDYu1ql0375o1_500.gif",
       "https://espressocomsaudade.files.wordpress.com/2014/08/sllafbz.gif",
       "https://media.tenor.com/images/3f4337032181c35be63073a7e1b7ce1d/tenor.gif",
       "https://media.tenor.com/images/3f4337032181c35be63073a7e1b7ce1d/tenor.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];


    if(!user){
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`look here ${message.author.username} have to ping someone to cuddle them, if you have no one well um *cuddles you uwu* :flushed:`)
        .setImage(pick)
        message.channel.send(embed)
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('ed61a5')
        .setTitle(`${message.author.username} cuddled ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }

 
}

module.exports.help = {
    name: "cuddle",
     description: "Sends a cuddling gif",
    usage: " <user>",
    aliases: ["cuddle_user"]  

}