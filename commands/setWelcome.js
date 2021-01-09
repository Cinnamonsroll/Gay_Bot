const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args,) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS") && message.author.id !== "592715340782239754"){
        return message.reply("You need manage channels permission");
    }
    const  member =  message.member
    if(!args[0]) return message.channel.send("please mention a channel");
    let ree = member.guild.channels.cache.find(ch => ch.name === args[0]) || message.mentions.channels.first();
    if(!ree) return message.channel.send("please mention a channel");
    ree = ree.id
    
    if (ree) {
        db.set(`welcome${member.guild.id}`, ree);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`welcome channel set to <#${ree}>`)
        );
    }else{
        message.channel.send("Please mention a channel")
    }
};
module.exports.help = {
    name: "setWelcome",
    description:"set a welcome channel where Gay_Bot will send a message when a user joins the guild",
    usage:"<channel>",
    aliases: ["setwelcome","welcome"]
};