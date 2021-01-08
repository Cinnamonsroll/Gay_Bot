const Discord = require("discord.js")
const ms = require("parse-ms");
const mongoose = require("mongoose");
const config = require("../config.json")

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    let reward = 100;
    let timeout = 86400000;
    
    let embed = new Discord.MessageEmbed();
    embed.setTitle("Daily Reward!");

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
                money: reward,
                bank: 0,
                daily: Date.now(),
                rob: 0,
                inventory:[],

            })
            newProfile.save().catch(err => console.log(err));
            return message.channel.send(`${message.author.username} has $${reward}.`);
            
        }else if(profile.inventory.join(" ").toLowerCase().includes("gold")){
            timeout = 43200000;
            reward = 1000;
            
            if (timeout - (Date.now() - profile.daily) > 0) {

                let time = ms(timeout - (Date.now() - profile.daily));

                embed.setColor("a83232");
                embed.setDescription(`**You already collected your daily reward!**`)
                embed.addField(`Collect again in`, `**${time.hours}h ${time.minutes}m ${time.seconds}s**`);
                embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
                return message.channel.send(embed);
            } else {

                profile.money += reward;
                profile.daily = Date.now();
                profile.save().catch(err => console.log(err));

                embed.setDescription(`You collected your daily reward of \`${reward.toLocaleString()} Homo Coins\`. \nCurrent balance is \`${profile.money.toLocaleString()} Homo Coins\`.`);
                embed.setColor("00ffff");
                return message.channel.send(embed);
            }
        }else {

            reward = 100;
            timeout = 86400000;
            
            if (timeout - (Date.now() - profile.daily) > 0) {
                let time = ms(timeout - (Date.now() - profile.daily));

                embed.setColor("a83232");
                embed.setDescription(`**You already collected your daily reward!**`)
                embed.addField(`Collect again in`, `**${time.hours}h ${time.minutes}m ${time.seconds}s**`);
                embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
                return message.channel.send(embed);
            } else {

                profile.money += reward;
                profile.daily = Date.now();
                profile.save().catch(err => console.log(err));

                embed.setDescription(`You collected your daily reward of \`${reward.toLocaleString()} Homo Coins\`. \nCurrent balance is \`${profile.money.toLocaleString()} Homo Coins\`.`);
                embed.setColor("00ffff");
                return message.channel.send(embed);
            }
        }

    })
}

module.exports.help = {
    name: "daily",
    description: "Gives a daily reward of Homo Coins",
    usage: " ",
    aliases: ["timely"]
}