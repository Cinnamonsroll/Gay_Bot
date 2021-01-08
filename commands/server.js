const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {


    let ree = message.guild.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(r => r)
        .join(",");
    if (ree.length > 1024) ree = "To many roles to display";
    if (!ree) ree = "No roles";

    let region = {
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa",
        "japan": ":flag_jp: Japan",
        "india": ":flag_in: India",
        "europe": ":flag_eu: Europe"
    }
    let bots = message.guild.members.cache.filter(mem => mem.user.bot === true).size;

    let x = Date.now() - message.guild.createdAt
    const created = Math.floor(x / 86400000);

    const embed = new Discord.MessageEmbed()
        .setColor("a8ffff")
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .addField('Owner', message.guild.owner.user.tag, true)
        .addField('Server ID', message.guild.id)
        .addField('Members', message.guild.memberCount - bots, true)
        .addField('Bot Count', bots, true)
        .addField(`🌎Region`, region[message.guild.region], true)
        .addField(`Channel Count`, message.guild.channels.cache.size, true)
        .addField('Roles', message.guild.roles.cache.size, true)
        .addField('Verification Level', message.guild.verificationLevel, true)
        .addField('Created On', `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do, YYYY")} \n \`${created} day(s) ago\``, true)
        .addField(`Role List `, ree)
        .setTimestamp()

    message.channel.send(embed);

}

module.exports.help = {
    name: "s_info",
    description: "gets info about the server",
    aliases: ["serverinfo", "si"]

}