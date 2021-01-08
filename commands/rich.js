const Discord = require('discord.js');
const mongoose = require("mongoose");
const config = require('../config.json')

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Profile = require("../models/profile.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] === "all") {
        Profile.find({
            lb: "all",

        }).sort([
            ['money', 'descending']
        ]).exec((err, res) => {
            if (err) console.log(err);

            var page = Math.ceil(res.length / 4);

            let embed = new Discord.MessageEmbed();
            embed.setTitle("LEADERBOARD");
            embed.setColor('AQUA')
            embed.setThumbnail("https://i.imgur.com/eoBrM4z.png")
            let pg = parseInt(args[1]);
            if (pg != Math.floor(pg)) pg = 1;
            if (!pg) pg = 1;
            let end = pg * 4;
            let start = (pg * 4) - 4;

            if (res.length === 0) {
                embed.addField("Error", " No pages found!");
            } else if (res.length <= start) {
                embed.addField("Error", "Page not found!");
            } else if (res.length <= end) {
                embed.setFooter(`page ${pg} of ${page}`);
                for (i = start; i < res.length; i++) {
                    embed.addField(`${i + 1}. ${res[i].name}`, `$${res[i].money}`);
                }
            } else {
                embed.setFooter(`page ${pg} of ${page}`);
                for (i = start; i < end; i++) {
                    embed.addField(`${i + 1}. ${res[i].name}`, `$${res[i].money}`);
                }
            } message.channel.send(embed);
        });
    } else{
        Profile.find({
            lb: "all",
            guildID: message.guild.id
        }).sort([
            ['money', 'descending']
        ]).exec((err, res) => {
            if (err) console.log(err);

            var page = Math.ceil(res.length / 4);

            let embed = new Discord.MessageEmbed();
            embed.setTitle("LEADERBOARD");
            embed.setColor('AQUA')
            embed.setThumbnail("https://i.imgur.com/eoBrM4z.png")
            let pg = parseInt(args[0]);
            if (pg != Math.floor(pg)) pg = 1;
            if (!pg) pg = 1;
            let end = pg * 4;
            let start = (pg * 4) - 4;

            if (res.length === 0) {
                embed.addField("Error", " No pages found!");
            } else if (res.length <= start) {
                embed.addField("Error", "Page not found!");
            } else if (res.length <= end) {
                embed.setFooter(`page ${pg} of ${page}`);
                for (i = start; i < res.length; i++) {
                    embed.addField(`${i + 1}. ${res[i].name}`, `$${res[i].money}`);
                }
            } else {
                embed.setFooter(`page ${pg} of ${page}`);
                for (i = start; i < end; i++) {
                    embed.addField(`${i + 1}. ${res[i].name}`, `$${res[i].money}`);
                }
            } message.channel.send(embed);
        });
    }
}

module.exports.help = {
    name: "rich",
    description: "shows the richest people",
    usage: "all",
    aliases: ["top", "mlb",]
}