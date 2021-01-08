const Discord = require("discord.js")
module.exports.run = async (client, message, args) =>{
    let HT = [
        "Heads",
        "Tails"
    ]
    let pick = HT[Math.floor(Math.random() * HT.length)];

    if(pick === "Tails"){
        const embed = new Discord.MessageEmbed()
        .setColor('207173')
        .setTitle('Coinflip')
        .setThumbnail('https://i.imgur.com/a3t30w3.png')
        .setDescription('Tails')
        message.channel.startTyping()
        message.channel.stopTyping(true)
        await 5; message.channel.send(embed)
    }else{
        const embed = new Discord.MessageEmbed()
        .setColor('207173')
        .setTitle('Coinflip')
        .setThumbnail('https://i.imgur.com/eoBrM4z.png')
        .setDescription('Heads')
        message.channel.startTyping()
        message.channel.stopTyping(true)
        await 5; message.channel.send(embed)
    }
}

module.exports.help ={
    name:"coinflip",
     description: "Flips a coin",
    usage: " ",
    aliases:["cf"],
    
}