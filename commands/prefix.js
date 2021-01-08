const Discord = require("discord.js")
const fs = require("fs")
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: config.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix

    if (!message.member.hasPermission("MANAGE_GUILD") && message.author.id != "592715340782239754") return message.reply("You can't change the bot prefix");

    if (args[0] === "reset") {

        prefixes[message.guild.id] = {
            prefix: config.prefix
        }

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });

        let embed = new Discord.MessageEmbed()
            .setColor("34eb46")
            .setTitle("Prefix Reset")
            .addField(`Old guild prefix`, `\`\`\`\n ${prefix}\n\`\`\``)
            .addField(`Reset guild prefix to`, `\`\`\`\n${config.prefix}\n\`\`\``)

        message.channel.send(embed)

    } else {

        if (!args[0]) return message.reply("prefix cannot be a blank please enter a valid prefix");

        prefixes[message.guild.id] = {
            prefix: args[0]
        }

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });

        let embed = new Discord.MessageEmbed()
            .setColor("34eb46")
            .setTitle("Prefix")
            .addField(`Old guild prefix`, `\`\`\`\n ${prefix}\n\`\`\``)
            .addField(`New guild prefix`, `\`\`\`\n ${args[0]}\n\`\`\``)

        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "prefix",
    description: "set a custom prefix for your guild",
    usage: `<new prefix>`,
    aliases: [],

}