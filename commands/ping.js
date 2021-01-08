const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor("00ffff")
        .setTitle("Ping:ping_pong:")

    const m = await message.channel.send(embed)

    embed.setColor("00ffff")
    embed.setTitle(":ping_pong:Pong")
    embed.setDescription(`Message Ping: \`${m.createdTimestamp - message.createdTimestamp}\`ms\n Websocket Ping: \`${bot.ws.ping}\`ms`)
    embed.setFooter(`Made by cyan with hate </3`, bot.user.avatarURL())

    m.edit(embed)

}

module.exports.help = {

    name: "ping",
    description: "pong",
    aliases: [],

}