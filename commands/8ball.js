const Discord = require('discord.js');
module.exports.run = async (client, message, args) =>{

    let _8ballreplies = [
        //Positive Answers
        "It is certain",
        "Without a doubt",
        "You may rely on it",
        "Yes definitely",
        "It is decidedly so",
        "As I see it, yes",
        "Most likely",
        "Yes",
        "Outlook good",
        "Signs point to yes",
        //Neutral Answers
        "Reply hazy try again",
        "Better not tell you now",
        "Ask again later",
        "Cannot predict now",
        "Concentrate and ask again",
        //Negative Answers
        "Don’t count on it",
        "Outlook not so good",
        "My sources say no",
        "Very doubtful",
        "My reply is no"

    ]
    let question = args.slice(0).join(" ");
    let pick = _8ballreplies[Math.floor(Math.random() * _8ballreplies.length)];
    if (!args[0]){
        return message.channel.send('You need to ask something for the magic 8 ball to work smh!!')
    }

    const embed = new Discord.MessageEmbed()
    .setColor('1d47f0')
    .setDescription(`${message.author.username}`)
    .addField(`:question: Question`, question)
    .addField(':8ball: 8ball', pick, true)

    message.channel.send(embed)



}

module.exports.help ={
    name:"8ball",
    description: "Answers your question with an 8ball response",
    usage: " <question>",
    aliases:["8ball"],
    
}