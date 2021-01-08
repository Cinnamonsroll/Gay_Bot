const Discord = require("discord.js")
const Levels = require("discord-xp-fix");
module.exports.run = async (bot, message, args) => {

    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5); // We grab top 5 users with most xp in the current server.
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
    const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard); // We process the leaderboard.
    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("00ffff")
    .setTitle("**Leaderboard**")
    .setDescription(`\n\n${lb.join("\n\n")}`)
    .setFooter(`The top 5 ranked user`, bot.user.displayAvatarURL())
    message.channel.send(embed);
}

module.exports.help = {
    name: "leaderboard",
    aliases: ["lb"],

}