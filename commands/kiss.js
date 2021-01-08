const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const user = message.mentions.users.first();
    let gifs = [
        "https://pa1.narvii.com/5823/f10cce909b5bfa6f05f0af496558a16ed4840c06_hq.gif",
        "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
        "https://31.media.tumblr.com/40e8d551473cab28d04dc5fdfc0a98ec/tumblr_n473d8T0WX1t0q458o1_500.gif",
        "https://31.media.tumblr.com/28be9398582acc543016b4233ff12d77/tumblr_nlfjtwF2sA1u4fj88o1_500.gif",
        "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
        "https://33.media.tumblr.com/7f2ba325d9fa18695a3f610fc5179fb4/tumblr_n35r8zuIgJ1rveihgo1_500.gif",
        "https://i.pinimg.com/originals/f8/b3/e0/f8b3e099268d394fc3507aeed16982f0.gif",
        "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
        "https://38.media.tumblr.com/68a7e942719ef5cf68a3cb6a812a950f/tumblr_n63zdvAIJ31qfbz1so1_500.gif",
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)];


    if(!user){
        let embed = new Discord.MessageEmbed()
        .setColor('eba0e4')
        .setTitle(`look here ${message.author.username} have to ping someone to kiss them, if you have no one well um *kisses* :flushed:`)
        .setImage(pick)
        message.channel.send(embed)
    }else{
        let embed = new Discord.MessageEmbed()
        .setColor('eba0e4')
        .setTitle(`${message.author.username} just kissed ${user.username}`)
        .setImage(pick)
       message.channel.send(embed)    
    }

 
}

module.exports.help = {
    name: "kiss",
    description:"sends a kiss gif",
    aliases: ["kiss_user"]  

}