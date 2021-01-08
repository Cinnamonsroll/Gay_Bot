const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

    if (message.author.id != "592715340782239754") return message.reply("you do not have permission to use this command!")
    const user = message.mentions.users.first()
    if (!user) return message.reply("Please mention someone!")

    let blacklist = await db.fetch(`blacklist_${user.id}`)

    if (blacklist === "Not") {
        db.set(`blacklist_${user.id}`, "Blacklisted")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user} has been blacklisted!`)

        message.channel.send(embed)
    } else if (blacklist === "Blacklisted") {
        db.set(`blacklist_${user.id}`, "Not")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user} has been unblacklisted!`)

        message.channel.send(embed)
    } else {
        db.set(`blacklist_${user.id}`, "Not")
        let embed = new Discord.MessageEmbed()
            .setColor("00ffff")
            .setDescription(`${user.username} has been saved in data!`)

        message.channel.send(embed)
    }
}

module.exports.help = {

    name: "blacklist",
    description: "",
    aliases: ["bl"],

}