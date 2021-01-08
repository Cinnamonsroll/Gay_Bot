const Discord = require("discord.js")
const factGenerator = require('facts-generator')
const facts = require("../node_modules/facts-generator/index");
module.exports.run = async (client, message, args) =>{
    
    const fact = facts.getFact()
    const embed = new Discord.MessageEmbed()
    .setColor('00ff00')
    .addField("Fact: ", fact.fact)
    .addField("Category", fact.category)
    message.channel.send(embed)
}

module.exports.help ={
    name:"fact",
     description: "Sends a fact",
    usage: " ",
    aliases:["getfact","facts"],
    
}