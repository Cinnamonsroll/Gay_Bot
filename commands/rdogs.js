const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    const subReddits = ["DOG", "rarepuppers", "puppies"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`Doggo From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    try{
       message.channel.send(embed);          
    }catch(e){
        return;
    }
    

}

module.exports.help = {
    name: "redditdog",
    description:"sends a cute doggo picture from reddit",
    aliases: ["redditdogs","redditdoggo","rdoggo"]
}