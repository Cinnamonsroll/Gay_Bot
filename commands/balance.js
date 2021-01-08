const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    if (!message.mentions.members.first()) {
        var user = message.author;
    } else {
        var user = message.mentions.users.first() || bot.users.cache.get(args[1]);
    }

    Profile.findOne({
        userID: user.id
    }, (err, profile) => {
        if (err) console.log(err);
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
                inventory:[],
            })
            newProfile.save().catch(err => console.log(err));
            const embed = new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription(`${user}s Account`)
                .addFields(
                    {name:`**Wallet:**`, value: `\`0 Homo Coins\``},
                    {name: `**Bank:**`, value: `\`0 Homo Coins\``},
                    {name: `**Total**`, value: `\`0 Homo Coins\``}
                )
            return message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor("AQUA")
                .setDescription(`${user}s Account`)
                const total = profile.money + profile.bank
                embed.addFields(
                    {name:`**Wallet:**`, value: `\`${profile.money.toLocaleString()} Homo Coins\``},
                    {name: `**Bank:**`, value: `\`${profile.bank.toLocaleString()} Homo Coins\``},
                    {name: `**Total**`, value: `\`${total.toLocaleString()} Homo Coins\``}
                )
            return message.channel.send(embed);
        }
    })

}

module.exports.help = {
    name: "balance",
    description: "Sends a users balanace",
    usage: " <user>",
    aliases: ["bal", "HC", "hc"]
}