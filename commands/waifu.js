const Discord = require('discord.js');
const client = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');

module.exports.run = async (bot, message, args) => {
    if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS","ATTACH_FILES")) return;
    function image(message) {// gets the images Waifu
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "cute waifus",
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
    
            console.log(urls);
    
            if (!urls.length) {
    
                return;
            }
    
            let random_url = urls[Math.floor(Math.random() * urls.length)]
            let waifuEmbed = new Discord.MessageEmbed()
                .setColor('022bb3')
                .setTitle('waifu')
                .setImage(random_url)
                .setTimestamp() 
            
            try{
                message.channel.send(waifuEmbed)    
            }catch(e){
                return;
            }
            
            
        });
    
    }

    if(!message.guild.me.hasPermission(["SEND_MESSAGES","ATTACH_FILES","EMBED_LINKS"])){
        return;
    }else{
        try{
          image(message);  
        }catch(e){
            return;
        }
    }
    
}

module.exports.help = {
    name: "waifu",
    description:"sends a waifu (IT SENDS A PICTURE NOT A REAL LIFE WAIFU TO YOUR GODDAMN HOUSE SO DONT GET YOUR HOPES UP )",
    aliases: ["waifus"]  

}