const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("../config.json");


module.exports.run = async (client, messages, args) =>{

    const versionEmbed = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setTitle("Version")
    .setDescription('Version: '+ config.version)
    .setTimestamp()
    messages.channel.send(versionEmbed);    
}

module.exports.help ={
    name:"version",
    description:"shows what version Gay_Bot's in ",
    aliases:[],
    
}