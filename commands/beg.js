const Discord = require("discord.js")
const mongoose = require("mongoose");
const config = require("../config.json");
const db = require("quick.db")
mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    const random = Math.floor(Math.random() * 500) + 1;

    let daily = await db.fetch(`cooldown_${message.author.id}`);
    let timeout = 10000
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        const embed = new Discord.MessageEmbed()
        embed.setColor("a83232");
        embed.setTitle("Command Cooldown!!")
        embed.setDescription(`**You're on a cooldown please wait \`10\` seconds before useing this command again**`)
        embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
        message.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
        message.delete({ timeout: 1 })
    } else {
        db.set(`cooldown_${message.author.id}`, Date.now());

        Profile.findOne({
            userID: message.author.id
        }, (err, profile) => {
            if (err) console.log(err);
            if (!profile) {
                const newProfile = new Profile({
                    guildID: message.guild.id,
                    name: message.author.username,
                    userID: message.author.id,
                    lb: "all",
                    money: random,
                    bank: 0,
                    daily: 0,
                    rob: 0,
                    inventory:[],
                })
                newProfile.save().catch(err => console.log(err));

                const embed = new Discord.MessageEmbed()
                    .setColor("00ffff")
                    .setDescription(`${message.author.username} just begged for \`${random.toLocaleString()} Homo Coins.\``)
                return message.channel.send(embed)

            } else {

                profile.money += random;
                profile.save().catch(err => console.log(err))
                const embed = new Discord.MessageEmbed()
                    .setColor("00ffff")
                    .setDescription(`${message.author.username} just begged for \`${random.toLocaleString()} Homo Coins.\``)
                return message.channel.send(embed)

            }
        })
    }
}

module.exports.help = {

    name: "beg",
    description: "beg for Homo Coins",
    usage: " ",
    aliases: [],

}