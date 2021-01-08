const Discord = require('discord.js');
const got = require("got");
module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ATTACH_FILES")) return;
    if (!message.guild.me.hasPermission(["SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"])) {
        return;
    }
    let MEME = [
        'https://www.reddit.com/r/doggos/random/.json',
        'https://www.reddit.com/r/rarepuppers/random/.json',
        'https://www.reddit.com/r/PuppySmiles/random/.json',
    ]
    let ree = MEME[Math.floor(Math.random() * MEME.length)];
    const embed = new Discord.MessageEmbed()
    got(ree).then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;

        embed.setTitle(`DOGGO`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('AQUA')
        embed.setFooter("DOGGO :D")
        try {
            message.channel.send(embed);
        } catch (e) {
            return;
        }
    })
}

module.exports.help = {
    name: "dog",
     description: "Sends dog images",
    usage: " ",
    aliases: ["dogs","puppy","pup","puup"]
}