const Discord = require('discord.js');
const config = require('../config.json')
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;

  const data = [];
  const { commands } = message.client;
  const name = args[0];
  if (!name) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`Gay_Bot help list`)
      .setURL('https://discord.gg/83G45qt5Ja')
      .setThumbnail('https://i.imgur.com/TEMgqPM.png')
      .setColor('48bdbd')
      .addField("Triggers", "`trigger`,`ct`", true)
      .addField("Moderation", "`kick`,`ban`,`clear`")
      .addField("Currency", "`balance`,`beg`,`daily`\n   `deposit`,`gamble`,`pay`\n   `rob`,`rich`,`shop`\n  `sell`,`inventory`,`withdraw`", true)
      .addField("XP", "`rank`,`leaderboard`", true)
      .addField("Fun", "`8ball`,`blackjack`,`cats`,  `coinflip`,`cuddle`,`darkmemes`,  `dance`,`jojodance`,`jojo`,  `dogs`,`fact`,`gay`,   `hug`,`kill`,`kiss`,   `meme`,`pp`,`snipe`,   `waifu`,`virgin`")
      .addField("Misc", "`about`,`all_info`,`avatar`,   `blacklist`,`help`,`ping`,   `prefix`,`serverinfo`,`stats`,   `userinfo`,`version`", true)
      .setFooter(`\nYou can send ${prefix}help [command name] to get info on a specific command!`, bot.user.displayAvatarURL());

    message.channel.send(embed);
  } else {
    const command =
      commands.get(name) ||
      commands.find(c => c.aliases && c.help.aliases.includes(name));

    if (!command) {
      return message.reply("that's not a valid command!");
    }
    data.push(`**Name:** ${command.help.name}`);

    if (command.help.aliases)
      data.push(`**Aliases:** ${command.help.aliases.join(", ")}`);
    if (command.help.description)
      data.push(`**Description:** ${command.help.description}`);
    if (command.help.usage)
      data.push(`**Usage:** ${prefix}${command.help.name} ${command.help.usage}`);
    if (command.help.owner)
      data.push(`**owner:** ${command.help.owner} `);

    let embed = new Discord.MessageEmbed()
      .setDescription(data, { split: true })
      .setColor("48bdbd")
      .setFooter(`Gay_Bot help`, bot.user.displayAvatarURL())
    message.channel.send(embed);
  }
  if (args[0] === "info") {
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('48bdbd')
      .setTitle(`Gay_Bot help`)
      .setThumbnail('https://i.imgur.com/TEMgqPM.png')
      .setDescription('What is Gay_Bot? Gay_Bot is a bot that annoys eveyone in the server.')
      .setURL('https://discord.gg/83G45qt5Ja')
      .addField(`Prefix:`, prefix)
      .addField(`Support`, `\[Gay_Bot help server\]\(https://discord.gg/83G45qt5Ja\)`)
      .addField(`Invite link`, `\[invite\]\(https://discord.com/api/oauth2/authorize?client_id=692440402988630057&permissions=2147483639&scope=bot\)`)
      //.addField(`GitHub`, `\[click me\]\(https://github.com/00fffff/Gay_Bot\)`)
      .addField(`Commands list`, `\`${prefix}help\` for the commands list`)

    message.channel.send(helpEmbed);
  }


}

module.exports.help = {
  name: "help",
  description: "Does what it does",
  usage: " <command name>",
  aliases: [],
}