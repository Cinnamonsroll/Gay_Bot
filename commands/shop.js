const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js");//models
module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    embed.setColor("AQUA")
    embed.setTitle("Gay_Bot's Totally Not Scam Shop")

    const items = ["Stick","Padlock", "Gold"]
    const price = ["100", "600", "100000"]

    if (!args[0]) {
        //shop menu
        embed.addField(items[0], `\`${price[0].toLocaleString()} Homo Coins\`\n Funny Stick\n`)
        embed.addField(items[1], `\`${price[1].toLocaleString()} Homo Coins\`\n Stops users from robbing you. ~~expires after evey robbery~~\n`)
        embed.addField(items[2], `\`${price[2].toLocaleString()} Homo Coins\`\n Higher daily rewards and Lower daily cooldown\n`)
        message.channel.send(embed)
        return;
    }
    if (args[0] === "buy") {

        if (!args[1]) {
            message.channel.send("You need to type the name of the item you want to buy!!")
            return;
        }
        Profile.findOne({
            userID: message.author.id
        }, (err, profile) => {
            if (err) console.log(err);
            if (!profile) {
                const newProfile = new Profile({
                    guildID: message.guild.id,
                    name: bot.users.cache.get(message.author.id).username,
                    userID: user.id,
                    lb: "all",
                    money: 0,
                    bank: 0,
                    daily: 0,
                    rob: 0,
                    inventory: [],
                })
                newProfile.save().catch(err => console.log(err));
                message.channel.send("You dont have enough money to buy anything!!")
            } else {//items buying
                const itemBuying = args[1]

                if (itemBuying === items[0].toLowerCase()) {//Stick
                    if (profile.money < price[0]) {
                        message.channel.send("You don't have enough money to but this item!!")
                        return;
                    }
                    if (profile.inventory.join(" ").toLowerCase().includes("stick")) {
                        message.reply("You already own this item")
                        return;
                    }
                    profile.money -= price[0]
                    profile.inventory.push(items[0])
                    profile.save().catch(err => console.log(err));
                    embed.setDescription(`You jus bought ${items[0]} for \`${price[0].toLocaleString()} Homo Coins\` GG`)
                    message.channel.send(embed)
                }

                if (itemBuying === items[1].toLowerCase()) {//Padlock
                    if (profile.money < price[1]) {
                        message.channel.send("You don't have enough money to but this item!!")
                        return;
                    }
                    if (profile.inventory.join(" ").toLowerCase().includes("padlock")) {
                        message.reply("You already own this item")
                        return;
                    }
                    profile.money -= price[1]
                    profile.inventory.push(items[1])
                    profile.save().catch(err => console.log(err));
                    embed.setDescription(`You jus bought ${items[1]} for \`${price[1].toLocaleString()} Homo Coins\` GG`)
                    message.channel.send(embed)
                }

                if (itemBuying === items[2].toLowerCase()) {//Gold
                    if (profile.money < price[2]) {
                        message.channel.send("You don't have enough money to but this item!!")
                        return;
                    }
                    if (profile.inventory.join(" ").toLowerCase().includes("gold")) {
                        message.reply("You already own this item")
                        return;
                    }
                    profile.money -= price[2]
                    profile.inventory.push(items[2])
                    profile.save().catch(err => console.log(err));
                    embed.setDescription(`You jus bought ${items[2]} for \`${price[2].toLocaleString()} Homo Coins\` GG`)
                    message.channel.send(embed)
                }
            }
        })
    }
}

module.exports.help = {
    name: "shop",
    description: "Buy items",
    usage: " buy <item>",
    aliases: ["store"]
}