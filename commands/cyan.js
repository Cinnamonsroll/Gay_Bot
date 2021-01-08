const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (client, messages, args) =>{
    const cyan = new Discord.MessageEmbed()
    .setColor('00ffff')
    .setTitle('Cyan:')
    .setImage('https://store.schoolspecialty.com/OA_HTML/xxssi_ibeGetWCCImage.jsp?docName=F1611670&Rendition=Large')
    messages.channel.send(cyan);
}

module.exports.help ={
    name:"cyan",
     description: "Honestly I don't even fucking know what this is",
    usage: " ",
    aliases:["aqua"],
    
}