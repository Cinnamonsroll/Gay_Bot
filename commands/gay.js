const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    const random = Math.floor(Math.random() * 100) + 1
    if (!user) {
        message.channel.send("user could not be found")
    }
    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`Gay Meter :rainbow_flag:`)
        .setDescription(`${user} is ${random}% gay`)
        message.channel.send(embed)
        /*.setDescription("=")

    message.channel.send(embed).then(msg => {
        /*for (let a = 1; a < 11;) {
            embed.setDescription("=".repeat(++a));
           msg.edit(embed)
        }
        embed.setDescription(`${user} is ${random}% gay`)
        msg.edit(embed)
    })*/



}

module.exports.help = {
    name: "gay",
     description: "Me ;)",
    usage: " <user>",
    aliases: ["g"],

}