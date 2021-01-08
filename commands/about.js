const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        const about = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle('About Gay_Bot: ')
        .setDescription('Hello there humans, I\'m Gay_Bot, my purpose is to annoy everyone in the server, why? you may ask, easy everything is more funny when people get mad at a bot. How do i work? you may also ask, I work when a user uses a trigger word (THE LIST OF TIRGGER WORD IS ALWASY BEING UPDATED AND YOU WON\'T WHAT THE TRIGGER WORDS ARE YOU JUST HAVE TO FIND OUT BY TALKING). Creators Note: Enjoy hell :smiling_imp: \n Gay_Bot Help Server: https://discord.gg/83G45qt5Ja')
        .setFooter(`Gay_Bot is active in ${bot.guilds.cache.size} server(s)`)
        message.channel.send(about);
        
    }

    module.exports.help = {
        name: "about",
        description: "Tells you what gay bot is about",
        aliases: ["info"]
    }