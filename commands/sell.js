const mongoose = require("mongoose");
const config = require("../config.json");
const Discord = require("discord.js")

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Profile = require("../models/profile.js");//models

module.exports.run = async (bot, message, args) => {

    const items = ["Stick","Padlock", "Gold"]
    const Price = ["100", "600", "100000"]

    const embed = new Discord.MessageEmbed()
    embed.setColor("AQUA")
    embed.setTitle("Gay_Bot's Toally Not A Scam Buy N Sell Shop")

    Profile.findOne({
        userID: message.author.id
    }, (err, profile) => {

        if (err) console.log(err)

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
                inventory: [],
            })
            newProfile.save().catch(err => console.log(err));
            message.channel.send("You dont have any items to sell")
        } else {
            const itemSelling = args[0];

            if (itemSelling === items[0].toLowerCase()) {//Stick
                let spoopky = Math.random() * Price[0] + 1;
                if (!profile.inventory.join(" ").toLowerCase().includes("stick")) {
                    message.channel.send("You don't own this item you")
                    return;
                }
                profile.money += parseInt(spoopky)
                profile.inventory.pull(items[0])
                profile.save().catch(err => console.log(err));
                embed.setDescription(`You just sold ${items[0]} for ${parseInt(spoopky)}`)
                return message.channel.send(embed)
            }

            if (itemSelling === items[1].toLowerCase()) {//Padlock
                let spoopky = Math.random() * Price[1] + 1;
                if (!profile.inventory.join(" ").toLowerCase().includes("padlock")) {
                    message.channel.send("You don't own this item you")
                    return;
                }
                profile.money += parseInt(spoopky)
                profile.inventory.pull(items[1])
                profile.save().catch(err => console.log(err));
                embed.setDescription(`You just sold ${items[1]} for ${parseInt(spoopky)}`)
                return message.channel.send(embed)
            }

            if (itemSelling === items[2].toLowerCase()) {//Gold
                let spoopky = Math.random() * Price[2] + 1;
                if (!profile.inventory.join(" ").toLowerCase().includes("gold")) {
                    message.channel.send("You don't own this item you")
                    return;
                }
                profile.money += parseInt(spoopky);
                profile.inventory.pull(items[2])
                profile.save().catch(err => console.log(err));
                embed.setDescription(`You just sold ${items[2]} for ${parseInt(spoopky)}`)
                return message.channel.send(embed)
            }
        }
    })
}

module.exports.help = {
    name: "sell",
    description: "sell items from you inventory",
    usage: "<item>",
    aliases: []
}