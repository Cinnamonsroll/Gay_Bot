const mongoose = require("mongoose")
const Discord = require("discord.js")
const config = require("../config.json");

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Profile = require("../models/profile.js")

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    embed.setColor("AQUA")
    if (!args[0]) {
        var user = message.author;
    } else {
        var user = message.mentions.members.first()
    }

    Profile.findOne({
        userID: user.id
    }, (err, profile) => {
        if (err) console.log(err)
        if (!profile) {
            message.channel.send(`${user} Dose Not Own Any Items\n You Can Buy Items In The Shop`)
            return;
        } else {
            let ree;
            if (profile.inventory.length <= 1) {
                ree = "Item"
            } else {
                ree = "Items"
            }
            
            embed.setDescription(`${user}\`s inventory`)
            embed.addField(`**${ree}:**`,`\n ${profile.inventory.join(`\n`)}`)
            return message.channel.send(embed)
        }
    })
}
module.exports.help = {
    name: "inventory",
    aliases: ["inv"],
    descirption: "Shows your inventory",
    usage: " "
}