const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    const reaction = ['🤢','😰','😵','😥','😕','😗','😏','😌','☺','💁']
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;
    
    const rating = Math.floor(Math.random() * 100) + 1;
    const emoji = Math.ceil(rating / reaction.length) - 1

    const embed = new Discord.MessageEmbed()
    .setTitle("waifu rateinator")
    .setColor("00ffff")
    .setDescription(`${user} is a ${rating}/100 waifu ${reaction[emoji]}`)
    message.channel.send(embed);
}

module.exports.help ={
    name:"waifu",
    description:"see good of a waifu you are",
    aliases:[`wrate`],
    
}