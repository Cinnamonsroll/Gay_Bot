const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args,) => {

    if (!message.member.hasPermission("MANAGE_ROLES") && message.author.id !== "592715340782239754"){
        return message.reply("You need manage roles permission");
    }
    const  member =  message.member
    if(!args[0]) return message.channel.send("please mention a role");
    let reee = member.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first();
    if(!reee) return message.channel.send("please mention a role");
    reee = reee.id

    if (reee) {
        db.set(`role${member.guild.id}`, reee);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`default member role set to <@&${reee}>`)
        );
    }else{
        message.channel.send("Please mention a role")
    }
};
module.exports.help = {
    name: "setRole",
    description:"Gives a user a default role upon joining the guild",
    usage:"<role>",
    aliases: ["setrole","role"]
};