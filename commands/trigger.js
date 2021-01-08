const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {

    
    
    if (!message.member.hasPermission("MANAGE_GUILD") && message.author.id !== "592715340782239754"){
        return message.reply("You need manage guild permission");
    }
    let fish = args[0];
    if (fish === "on") {
        db.set(`triggerr_${message.guild.id}`, "on");
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(
                "Triggers are turned on, have fun"
            )
        );
    } else if (fish === "off") {
        db.set(`triggerr_${message.guild.id}`, "off");
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(
                "Triggers are turned off, enjoy"
            )
        );
    } else {
        message.channel.send("Please only use on or off");
    }

};
module.exports.help = {
    name: "trigger",
    description:"toggle the triggers",
    usage:"<prefix>triggers on/off",
    aliases: ["triggers"]
};