const Discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');

module.exports.run = async (bot, message, args) => {
    //args.shift();
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    function images(message) {// gets the images
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + encodeURI(args.join(' ')), 
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
        request(options, function (error, response, responseBody) {
            if (error) {
                return;
            }

            $ = cheerio.load(responseBody);

            var links = $(".image a.link");

            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

            //console.log(urls);

            if (!urls.length) {

                return;
            }
            
            let random_url = urls[Math.floor(Math.random() * urls.length)];

            let em = new Discord.MessageEmbed()
                .setColor('022bb3')
                .setTitle(args.join(' '))
                .setImage(random_url)
                .setTimestamp();
            
            try{
                message.channel.send(em);// Send result
            }catch(e){
                return;
            }
        });

    }
    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }
    if (message.channel.nsfw){
        try{
           images(message);        
        }catch(e){
            return;
        }
    }else {
        message.channel.send("This command can only be used in a NSFW channel")
    }

}

module.exports.help = {
    name: "img",
     description: "Sends a random image",
    usage: " ",
    aliases: ["images"]
}