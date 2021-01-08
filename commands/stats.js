const Discord = require('discord.js')
const config = require("../config.json")
let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('ms'),
    moment = require('moment')
const { format } = require('path')

function formatBytes (a,b){
    if (0 == a) return "0 Bytes";
    let c = 1024,
    d = b || 2,
    e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] 
    f= Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a/ Math.pow(c,f)).toFixed(d)) + " " + e[f]
}
function parseDur(ms) {
    let seconds = ms / 1000,
        days = parseInt(seconds / 86400);
    seconds = seconds % 86400

    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600

    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60)

    if (days){
        return `${days} day, ${hours} hours, ${minutes} minutes.`
    } else if (hours){
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds.`
    } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds.`
    }
    return `${seconds} second(s)`
}

module.exports.run = async (bot, message, args) =>{
    cpuStat.usagePercent(function (error, percent, seconds){
        if (error){
            return console.error(error)
        }
        const cores = os.cpus().length
        const cpuModel = os.cpus()[0].model
        const usage = formatBytes(process.memoryUsage().heapUsed)
        const Node = process.version
        const CPU = percent.toFixed(2)

        

        const promises = [
            bot.shard.fetchClientValues('guilds.cache.size'),
            bot.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
            bot.shard.fetchClientValues('channels.cache.size'),
        ];

        Promise.all(promises)
        .then(results => {
            const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
            const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
            const totalChannels = results[2].reduce((acc, channelCount) => acc + channelCount, 0);
            const embed = new Discord.MessageEmbed()
            embed.setColor('36393F')
            embed.addField(`Bot Statsitics`, `Gay_Bot Version: ${config.version}\nInvite: \[click me\]\(https://discord.com/api/oauth2/authorize?client_id=692440402988630057&permissions=2147483639&scope=bot\)\nSupport Server: \[Gay_Bot Help  Server]\(https://discord.gg/83G45qt5Ja)\nServers: ${totalGuilds.toLocaleString()}\nUsers: ${totalMembers.toLocaleString()} \nChannels: ${totalChannels.toLocaleString()} \nUsage: ${usage} \nNode: ${Node} \nCPU Usage: ${CPU}`);
            embed.addField(`Physical Statistics:`, `CPU: ${cores} - ${cpuModel} \nUptime: **${parseDur(bot.uptime)}**`)
            message.channel.send(embed)
        })
        .catch(console.error);
    })
}

module.exports.help ={
    name:"stats",
    description:"shows Gay_Bots stats",
    aliases:["stat","botinfo"],
    
}