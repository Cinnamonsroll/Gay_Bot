const Discord = require('discord.js');
const beautify = require("beautify");
const config = require("../config.json")

module.exports.run = async (bot, message, args) =>{

    if (message.author.id !== config.ownerID){
        return message.channel.send("This Command can only be  used by my owner Cyan")
        .then(m => m.delete(10000));
    }
    if (!args[0]){
       message.channel.send("You have to provide a second argument!!") 
       return; 
    }

    try{
        if (args.join(" ").toLowerCase().includes("token")){
          return message.channel.send("`ha you thought`");  
        }

        const toEval = args.join(" ");
        const evaluated = eval(toEval);
        
        let embed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setTitle("Eval")
        .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
        .addField("Evaluated:", `${evaluated}`)
        .addField("Type of:", typeof(evaluated));

        message.channel.send(embed);
    
    }catch(e){
        let embed = new Discord.MessageEmbed()
        .setColor("FF0000")
        .setTitle("\:x: Error!")
        .setDescription(e)
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed);
    }


}

module.exports.help ={
    name:"eval",
     description: "Evals code",
    usage: " <code>",
    aliases:["evaluate","e"],
    
}