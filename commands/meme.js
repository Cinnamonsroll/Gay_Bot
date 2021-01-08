const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const got = require("got");
module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    let MEME = [
        'https://www.reddit.com/r/memes/random/.json',
        'https://www.reddit.com/r/me_irl/random/.json',
        'https://www.reddit.com/r/dankmemes/random/.json',
        ]
    let ree = MEME[Math.floor(Math.random() * MEME.length)];
    const embed = new Discord.MessageEmbed()
        got(ree).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('AQUA')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            try{
                message.channel.send(embed);           
            }catch(e){
                return;
            }
        })
}

module.exports.help = {
    name: "meme",
    description:"*sends dank meme form reddit the funniest place on earth xD lol memes only on reddit*",
    aliases: ["memes"]
}