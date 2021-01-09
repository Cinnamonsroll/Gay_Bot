const Discord = require('discord.js');
const querystring = require('querystring');
const r2 = require('r2');
const DOG_API_URL = "https://api.thedogapi.com/"
const DOG_API_KEY = "e103e50c-3520-456c-b768-008a02f93d1f";
module.exports.run = async (bot, message, args) => {

    try {
        var images = await loadImage(message.author.username);

        var image = images[0];

        const embed = new Discord.MessageEmbed()
        embed.setTitle(`doggo`)
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
    name: "dog",
    description: "Sends dog images",
    usage: " ",
    aliases: ["dogs", "puppy", "pup", "puup"]
}