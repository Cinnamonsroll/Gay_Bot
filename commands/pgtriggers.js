const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription("Triggers are now pg, NO SWEARING owo")
        );
        db.set(`triggerrr_${message.guild.id}`, "pg");
    } else if (args[0] === "off") {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription("PG Triggers are now Off, enjoy you fucks")
        );
        db.set(`triggerrr_${message.guild.id}`, "off");
    } else {
        return message.reply("eek")
    }


};
module.exports.help = {
    name: "pgtriggers",
    description: "makes the triggers pg, no more swearing owo",
    usage: "(off)",
    aliases: ["pgt", "PGT", "pgT"]
};