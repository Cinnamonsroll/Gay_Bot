const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author
    if (!user) {
        message.channel.send("user could not be found")
    }

    let HT = [
        "Not Virgin",
        "Virgin"
    ]
    let pick = HT[Math.floor(Math.random() * HT.length)];

    if (pick === "Virgin") {
        const embed1 = new Discord.MessageEmbed()
        embed1.setColor("a83232")
        embed1.setTitle('Virgin Rate')
        embed1.setDescription(`${user} is ${pick}`)
        embed1.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
        message.channel.send(embed1)

    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle('Virgin Rate')
            .setDescription(`${user} is ${pick}`)
        message.channel.send(embed)
    }
}

module.exports.help = {

    name: "virgin",
    description: "vrate",
    aliases: [],

}