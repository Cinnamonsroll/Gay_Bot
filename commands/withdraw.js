const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../config.json")

const Profile = require("../models/profile.js");

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports.run = async (bot, message, args) => {
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
            return message.reply("Sorry, you don't have money. Use daily command")
        } else {
            Profile.findOne({
                userID: message.author.id
            }, (err, bankProfile) => {
                if (err) console.log(err);
                    if (!bankProfile) {
                        message.channel.send(`There Was An Error Running This Command`)
                        return;
                    }
                Profile.findOne({
                    userID: message.author.id
                }, (err, userProfile) => {
                    if (err) console.log(err);
                    
                    var lowestWith = 1

                    if (profile.bank <= 0) return message.reply("you don't have any money in your bank.");
                    if(!args[0]){
                        message.channel.send("You need to enter the amout you want to deposit, you poopy head")
                        return;
                    }
                    if (args[0].toLowerCase() == "all"|| args[0].toLowerCase() == "max") args[0] = profile.bank;
    
                    try {
                        var wit = parseFloat(args[0]);
                    } catch {
                        return message.reply("you can only enter whole numbers.");
                    }

                    const embed = new Discord.MessageEmbed()

                    if (!args[0]) return message.reply("Enter money to deposit")
                    if (args[0] != Math.floor(wit)) return message.reply("you can only enter whole numbers.");
                    if (args[0] < lowestWith) return message.reply("You cannot enter a number below 0!");
                    if (profile.bank < args[0]) return message.reply("you don't have that much money.");
                    profile.bank -= parseInt(args[0])
                    profile.money += parseInt(args[0])
                    profile.save().catch(err => console.log(err));
                    embed.setColor("AQUA")
                    embed.addField(`Gay_Bot Bank`, `Withdrawed \`${args[0].toLocaleString()} Homo Coins\``)
                    return message.reply(embed)
                })
            })
        }

    })

}
module.exports.help = {
    name: "withdraw",
    aliases: ["with"],
    description: "Take Homo Coins out of your bank",
    usage: "<all> / <amount>"
} 