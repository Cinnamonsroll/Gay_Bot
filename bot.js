const Discord = require('discord.js');
const config = require('./config.json');
const triggers = require('./triggers.json')
const custom = require("./models/custom.js");
const Levels = require("discord-xp-fix");
Levels.setURL(config.mongoPass)
let fetch = require("node-fetch"); //bot list server count
/*const Constants = require("discord.js/src/util/Constants.js")// green online thingy
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android';*/
const db = require("quick.db")
const fs = require("fs");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't Find Commands!");
  }
  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
    //console.log(`${f} loaded!`);
    if (props.help && props.help.name) {
      bot.commands.set(props.help.name, props);
    } else {
      console.error(`file ${f} does not have .help or .help.name property!`);
    }
    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    })
  });
});

// bot online stuff 
bot.once('ready', () => {
  console.log(`${bot.user.username} is now active in ${bot.guilds.cache.size} servers`)
   //Auto Activities List
    const activities = [{
            "text": "Gay porn",
            "type": "WATCHING"
        },
        {
            "text": "Blitz by Technoblade",
            "type": "LISTENING"
        },
        {
            "text": `over ${bot.guilds.cache.size} guilds`,
            "type": "WATCHING"
        },
        {
            "text":"^help",
            "type": "WATCHING"
        },
        {
            "text":"YOU",
            "type":"WATCHING"
        },{
            "text":"gay people being happy, Gay_Bot supports LGBTQ+ Rights <3",
			"type":"WATCHING"
        }
    ];
    setInterval(() => {
        const activity = activities[Math.floor(Math.random() * activities.length)];
        bot.user.setActivity(activity.text, {
            type: activity.type
        });
    }, 10000);
    
});

//xp system
bot.on("message", async message => {
  function emoji (id){
    return bot.emojis.cache.get(id).toString()
  }
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (message.guild == null) return
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;

  //other shit
  if (message.content.startsWith(prefix)) return;
  if(message.channel == "dm") return;
  if (!message.guild) return;
  if (message.author.bot) return;
  
  const randomAmountOfXp = Math.floor(Math.random() * 16) + 1; // Min 1, Max 16
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  /*if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`${message.author}, GG! You just leveled up to **${user.level}** ${emoji("726173991022362745")}`);
  }*/
})

//the good shit
bot.on("message", async message => {  
  let blacklist = await db.fetch(`blacklist_${message.author.id}`)
  if (blacklist === "Blacklisted"){
    return;
  } 
  if(message.channel.id === "735809920259325992" && message.content.includes("vote")){
    message.react("👍");
    message.react("👎");
  }
 //Gay_Bot prefix 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (message.guild == null) return
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;
  
  if(message.content === "<@!692440402988630057>"||message.content ==="<@692440402988630057>"){
    message.channel.send(`my prefix is ${prefix} \n\`${prefix}help to get list of commands\``)
  }

  //triggers
  if (!message.guild) return console.log("couldn't find a guild")
  if (!message.channel.permissionsFor(message.guild.me).toArray().includes("SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "MANAGE_MESSAGES", "READ_MESSAGE_HISTORY", "ATTACH_FILES")) return;
  if (!message.guild.me.hasPermission(["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "READ_MESSAGE_HISTORY", "ATTACH_FILES"])) {
    return;
  }
  if (message.author.bot) return;
  let triggerr = db.fetch(`triggerr_${message.guild.id}`)
  if (!triggerr) triggerr = "on"
  if (message.author.id !== bot.user.id) {
    if (message.content.toLowerCase() in triggers && triggerr === "on") {
      message.channel.send(triggers[message.content.toLowerCase()]);
    }
  }

 //custom triggers  
  let ctargs = message.content.toLowerCase()
  let ct;
  ct = ctargs
  if(!custom) return;
  custom.findOne({
    Guild: message.guild.id,
    Command: ct
  },
  async (err, data) => {
    if (err) throw err;
    if (data && triggerr === "on") return message.channel.send(data.Content);
    else return;
  })

  if (!message.content.startsWith(prefix)) return; //looks for if the prefix is in the message
  let args = message.content.slice(prefix.length).trim().split(/ +/g); //splits the prefix from the command
  let cmd;
  cmd = args.shift().toLowerCase();
  let command;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
  if (message.author.bot || message.channel.type === "dm") return; //if the message channel is a DM the commands and triggers will not work

  const sender = message.author
  const embed = new Discord.MessageEmbed();
  embed.setColor("00FFFF")
  embed.setTitle("Commands Using !")
  embed.addField('Command User:', `\`\`\`${sender.tag}\`\`\``, true)
  embed.addField('Id:', `\`\`\`(${sender.id})\`\`\``, true)
  embed.addField('Ran a command:', `\`\`\`${cmd}\`\`\``, true)
  embed.addField('In guild', `\`\`\`${message.guild.name}\`\`\`'`, true)
  embed.addField('Guild ID', `\`\`\`${message.guild.id}\`\`\``, true)
  embed.addField('Channel ID', `\`\`\`${message.channel.id}\`\`\``, true)
  embed.setTimestamp()
  
  //bot.shard.broadcastEval(`this.channels.cache.get('789141220098179113')`).then( results => results.send(embed)).catch(console.error);

  //bot.channels.cache.get('731259195441020981').send(embed);

  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd))
  }
  try {
    command.run(bot, message, args);
  } catch (e) {
    return;
  }
})

//the snipe command shit
bot.on("messageDelete", async (message) => {
  require("./messageDelete")(message);
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
//process.on('unhandledRejection', error => {return});

//bot.login(config.Not_Gay_Bot_token);
bot.login(config.bot_token);