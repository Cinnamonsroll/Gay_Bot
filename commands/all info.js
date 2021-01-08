const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')
const fs = require("fs")
module.exports.run = async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: config.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    if (!message.member.hasPermission(['ADMINISTRATOR']) && message.author.id != "592715340782239754") {
        message.channel.send("You can't see that *nerd*")
    }

    else {
        const all_infoEmbed = new Discord.MessageEmbed()
            .setColor('00ffff')
            .setTitle("Gay_Bot commands and trigger words: ")
            .addField('Gay_Bot Prefix:', prefix,)
            .addField(`Trigger Words:`, `\`\`\`\naww, awww, asshole, bruh, bitch, bye, daddy, epic, even more rigged, fuck me, fuck off, fuck you, gay, hey, hello, hello there, hi, hola, im bored, jk, kill me, K, KK, KKK, lol, lmao, mudamuda, nice, no u, no you, okay, ok, omg, oof, owo, please stop, rigged, secret, shit, shut up, simp, sorry, stfu, stfu gaybot, thats gay, thanks gay bot, um, ugh, uwu, xd, yikes, 69, 420,\n\`\`\`\nYou can turn on and turn off the triggers with \`${prefix} trigger off\` or \`${prefix} trigger on\``, true)
            .addField("Commands", "\`\`\`\ntrigger , ct , kick , ban , clear , xp , leaderboard , 8ball , blackjack , blacklist , cats ,  coinflip , cuddle , darkmemes ,  dance , jojodance , jojo,  dogs , fact , gay ,  hug , kill , kiss ,  meme , pp , snipe,  about , all_info , avatar ,  help , ping , prefix ,  serverinfo , stats , userinfo ,  verison , virgin ,waifu\n\`\`\`", true)
            .setFooter(`Gay_Bot is active in ${bot.guilds.cache.size} server(s) \n Gay_Bot Help Server: https://discord.gg/83G45qt5Ja`)

        message.channel.send(all_infoEmbed);
    }

}

module.exports.help = {
    name: "all_info",
    description: "Sends all the triggers for gay bot",
    usage: " ",
    aliases: ["Ainfo", "allinfo", "cheatsheet"]
}