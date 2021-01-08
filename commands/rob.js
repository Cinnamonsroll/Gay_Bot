const Discord = require("discord.js");
const ms = require("parse-ms");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()

    let timeout = 7200000;
    const ree = Math.floor(Math.random() * 25) + 1;

    let user = message.mentions.members.first() || bot.users.cache.get(args[0])
    if (!args[0]) return message.channel.send("please ping the user you want to rob!")
    if (!user) return message.reply("oof, I couldn't find that user!");
    if (user.id === message.author.id) return message.reply("you cannot rob yourself")

    Profile.findOne({
        userID: message.author.id,
    }, (err, authorProfile) => {
        if (!authorProfile) {
            return message.reply("You dont have enough money to rob other members")
        } else {
            Profile.findOne({
                userID: user.id,
            }, (err, profile) => {
                if (err) console.log(err);

                if (authorProfile.money < 250) {
                    message.reply("You need at least `250 Homo Coins` to rob other members")
                    return
                }
                if (!profile) {
                    const newProfile = new Profile({
                        guildID: message.guild.id,
                        name: bot.users.cache.get(user.id).username,
                        userID: user.id,
                        lb: "all",
                        money: 0,
                        bank: 0,
                        daily: 0,
                        rob: 0,
                        inventory: [],
                    })
                    newProfile.save().catch(err => console.log(err));
                    return message.channel.send("Stop trying to rob this user, they're broke")

                } else {

                    if (timeout - (Date.now() - authorProfile.rob) > 0) {
                        let time = ms(timeout - (Date.now() - authorProfile.rob));

                        embed.setColor("a83232");
                        embed.setDescription(`**CHILL YOU'VE ALREADY ROBBED SOMEONE**`)
                        embed.addField(`Rob again in`, `**${time.hours}h ${time.minutes}m ${time.seconds}s**`);
                        embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
                        return message.channel.send(embed);

                    } else if (profile.inventory.join(" ").toLowerCase().includes("padlock")) {
                        
                        embed.setColor("a83232")
                        embed.setTitle("Gay_Bot Criminals")
                        embed.setDescription(`THE USER HAS A PADLOCK, YOU GET CAUGHT\nYou lost \`500 Homo Coins\``)
                        embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)

                        authorProfile.money -= "500";
                        authorProfile.save().catch(err => console.log(err));
                        profile.inventory.pull("Padlock");
                        profile.save().catch(err => console.log(err));
                        return message.channel.send(embed);

                    } else if (ree === 23 || ree === 1 || ree === 25 || ree === 12 || ree === 20) {

                        embed.setColor("a83232")
                        embed.setTitle("Gay_Bot Criminals")
                        embed.setDescription(`YOU GOT COUGHT\nYou lost \`250 Homo Coins\``)
                        embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)

                        authorProfile.money -= "250";
                        authorProfile.save().catch(err => console.log(err));
                        return message.channel.send(embed);
                    } else {

                        if (profile.money <= 250) {
                            message.channel.send("They're broke stop trying to rob them")
                            return
                        }

                        let random = Math.floor(Math.random() * profile.money) + 1;
                        random = random / 4;
                        Math.floor(random)

                        if (random > profile.money) {
                            message.channel.send("THE RNG BROKE REEEEEEEEEEEEEEEEEEEEEEEE")
                            return;
                        }
                        authorProfile.money += parseInt(random.toFixed(0));
                        authorProfile.rob = Date.now();
                        profile.money -= parseInt(random.toFixed(0));
                        profile.save().catch(err => console.log(err));
                        authorProfile.save().catch(err => console.log(err));

                        embed.setColor("AQUA")
                        embed.setTitle("Gay_Bot Criminals")
                        embed.setDescription(`${message.author.username} just robbed \`${random.toFixed(0)} Homo Coins\` from ${bot.users.cache.get(user.id).username}`)
                        return message.channel.send(embed);
                    }
                }
            })
        }
    })
}

module.exports.help = {
    name: "rob",
    description: "rob members for Homo Coins",
    usage: "<user>",
    aliases: ["steal"]
}