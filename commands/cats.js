const Discord = require('discord.js');
const querystring = require('querystring');
const r2 = require('r2');
module.exports.run = async (bot, message, args) => {
    const DOG_API_URL = "https://api.thecatapi.com/"
    const DOG_API_KEY = "6ba807a4-15c1-4de3-a225-2b8716305cc4";

    try {
        var images = await loadImage(message.author.username);

        var image = images[0];

        const embed = new Discord.MessageEmbed()
        embed.setTitle(`kitty`)
        embed.setURL(`${image.url}`)
        embed.setImage(image.url)
        embed.setColor('AQUA')

        message.channel.send(embed);

    } catch (error) {
        console.log(error)
    }

    async function loadImage(sub_id) {
        var headers = {
            'X-API-KEY': DOG_API_KEY,
        }
        var query_params = {
            'has_breeds': true,
            'mime_types': 'jpg,png',
            'size': 'small',
            'sub_id': sub_id,
            'limit': 1
        }

        let queryString = querystring.stringify(query_params);

        try {
            let _url = DOG_API_URL + `v1/images/search?${queryString}`;
            var response = await r2.get(_url, { headers }).json
        } catch (e) {
            console.log(e)
        }
        return response;
    }
}

module.exports.help = {
    name: "cat",
    description: "Sends picture of cats",
    usage: " ",
    aliases: ["cats", "caaat", "pussy"]
}