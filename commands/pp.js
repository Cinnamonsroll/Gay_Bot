const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;
    const embed = new Discord.MessageEmbed()
    .setTitle("peepee size machine")
    .setColor("00ffff")
    .setDescription(`${user}'s peepee\n\`8${'='.repeat((Math.floor(Math.random() * 10) + 1))}D\``)
    message.channel.send(embed);
}

module.exports.help ={
    name:"pp",
    description:"see how big your pp is",
    aliases:[`peepee`, `PP`, `penis`,`dick`],
    
}