const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../config.json");
const db = require("quick.db")

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    let daily = await db.fetch(`cooldown_${message.author.id}`);
    let timeout = 5000
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        const embed = new Discord.MessageEmbed()
        embed.setColor("a83232");
        embed.setTitle("Command Cooldown!!")
        embed.setDescription(`**You're on a cooldown please wait \`5\` seconds before useing this command again**`)
        embed.setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
        message.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
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
                    money: 0,
                    bank: 0,
                    daily: 0,
                    rob: 0,
                    inventory:[],
                })
                newProfile.save().catch(err => console.log(err));
                return message.reply("You don't have any moeny to gamble with !!");
            } else {

                var maxBet = 1000000;
                var lowestDep = 1;

                if (profile.money <= 0) return message.reply("You do not have any \`Homo Coins\` to gamble")
                if (!args[0]) return message.reply("Please enter a number.");
                if (args[0].toLowerCase() === "all" || args[0].toLowerCase() == "max") args[0] = profile.money;
                try {
                    var bet = parseFloat(args[0]);
                } catch {
                    return message.reply("You can only bet whole numbers.");
                }
                if (bet != Math.floor(bet)) return message.reply("You can only enter whole numbers.")
                if (profile.money < bet) return message.reply("The amount you enterd is higher  then your current balance")
                if (bet > maxBet) return message.reply(`The maxium amout of \`Homo Coins\` you can gamble is ${maxBet.toLocaleString()}.`);
                if (args[0] < lowestDep) return message.reply("You cannot enter a number below 0!");
                

                let ree = Math.random()

                if (ree > 0.95) {
                    let winAmount = Math.random() + 0.8
                    let random = Math.round(Math.random())
                    winAmount = winAmount + random
                    let winnings = Math.round(bet * winAmount)
                    if (winnings === bet) {
                        return message.reply('WOW you\'re lucky you won the same amout you gambled')
                    }
                    profile.money += winnings//win
                    profile.save().catch(err => console.log(err));
                    const embed = new Discord.MessageEmbed()
                        .setColor("00ffff")
                        .setTitle("Gay_Bot Casino")
                        .setDescription(`${profile.name} won \`${winnings.toLocaleString()} Homo Coins.\``)
                    return message.channel.send(embed)

                } else if (ree > 0.70) {
                    let winAmount = Math.random() + 0.4
                    let winnings = Math.round(bet * winAmount)
                    if (winnings === bet) {
                        return message.reply('WOW you\'re lucky you won the same amout you gambled')
                    }
                    profile.money += winnings//win
                    profile.save().catch(err => console.log(err));
                    const embed = new Discord.MessageEmbed()
                        .setColor("00ffff")
                        .setTitle("Gay_Bot Casino")
                        .setDescription(`${profile.name} won \`${winnings.toLocaleString()} Homo Coins.\``)
                    return message.channel.send(embed)

                } else {
                    profile.money -= bet;//lose
                    profile.save().catch(err => console.log(err));
                    const embed = new Discord.MessageEmbed()
                        .setColor("a83232")
                        .setTitle("Gay_Bot Casino")
                        .setDescription(`${profile.name} lost \`${Number(bet).toLocaleString()} Homo Coins.\``)
                        .setFooter(`"sucks to suck" - Suz Tzu The Art Of War`)
                    return message.channel.send(embed)
                }
            }
        })
    }
}

module.exports.help = {
    name: "gamble",
    description: "Gambles Homo Coins",
    usage: " <amout of \`Homo Coins\` you want to gamble>",
    aliases: ["bet"]
}