const Levels = require("discord-xp-fix");
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    const target = message.mentions.users.first() || message.author;
    const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.
    if (!user) return message.channel.send("Seems like this user has not earned any xp so far.");

    let embed = new Discord.MessageEmbed()
        .setColor("00ffff")
        .setAuthor(target.username, message.guild.iconURL())
        .setThumbnail(target.avatarURL())
        .setDescription(`**LEVEL** ${user.level}\n **XP:** ${user.xp}`)
        .setFooter(`Level of: ${target.username}`, bot.user.displayAvatarURL())
        .setTimestamp()

    message.channel.send(embed)
}
module.exports.help = {
    name: "rank",
    description:"sends a rank card",
    aliases: ["xp"],

}