const mongoose = require("mongoose");
const config = require("../config.json");
const Discord = require("discord.js")

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//models
const Profile = require("../models/profile.js");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    if (!user) return message.reply("oof, I couldn't find that user!");
    if (!(user.id = message.mentions.members.first())) return message.reply("you cannot pay yourself")

    Profile.findOne({
        userID: message.author.id
    }, (err, authorProfile) => {
        if (err) console.log(err);
        if (!authorProfile) {
            return message.reply("You dont have any money to send");
        } else {
            Profile.findOne({
                userID: user.id
            }, (err, userProfile) => {
                if (err) console.log(err);

                if (!args[0]) return message.reply(`I cant pay ${user} nothing, specify the amount you want to pay`);
                if (parseInt(args[0]) > authorProfile.money) return message.reply("The amout of `Homo Coins` is higer then what you have right now")
                if (parseInt(args[0]) < 1) return message.reply("you cant pay users `0 Homo Coin`");
                if (args[0] != Math.floor(args[0])) return message.reply("Enter only numbers!");

                if (!userProfile) {
                    const newProfile = new Profile({
                        guildID: message.guild.id,
                        name: bot.users.cache.get(user.id).username,
                        userID: user.id,
                        lb: "all",
                        money: parseInt(args[0]),
                        bank: 0,
                        daily: 0,
                        rob: 0,
                        inventory: [],

                    })
                    newProfile.save().catch(err => console.log(err));
                    authorProfile.money -= parseInt(args[0]);
                    authorProfile.save().catch(err => console.log(err));

                } else {
                    authorProfile.money -= parseInt(args[0]);
                    userProfile.money += parseInt(args[0]);
                    userProfile.save().catch(err => console.log(err));
                    authorProfile.save().catch(err => console.log(err));
                }
                const embed = new Discord.MessageEmbed()
                    .setColor("AQUA")
                    .setTitle("Owner Pay")
                    .setDescription(`${message.author.username} just gave \`${args[0]} Homo Coins\` to ${bot.users.cache.get(user.id).username}`)
                return message.channel.send(embed);
            })
        }
    })
}

module.exports.help = {
    name: "pay",
    aliases: ["give"],
    usage: " <amount> <user>",
    description: "Pays Homo Coins to a user",
}