const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args,) => {

    if (!message.member.hasPermission("MANAGE_CHANNEL") && message.author.id !== "592715340782239754"){
        return message.reply("You need manage channel permission");
    }
    const  member =  message.member
    let msg = args.join(" ");

    if(!args[0]) return;
    if (msg) {
        db.set(`welcomemsg${member.guild.id}`, msg);
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor("AQUA")
            .setDescription(`welcome message set to \`${msg}\``)
        );
    }else{
        message.channel.send("Please enter a welcome message")
    }
};
module.exports.help = {
    name: "setMessage",
    description:"sets a welcome message",
    usage:"<welcome message>",
    aliases: ["setmsg","setmessage"]
};