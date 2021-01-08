const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const creditEmbed = new Discord.MessageEmbed()
    .setColor('00ffff')
    .setTitle('CREDITS: ')
    .setDescription("written and coded by: <@592715340782239754>")
    .addField("Created On:","`25,3,2020`")
    message.channel.send(creditEmbed);   

}

module.exports.help = {
    name: "credits",
     description: "Sends gay bots credits",
    usage: " ",
    aliases: ["author"]
}