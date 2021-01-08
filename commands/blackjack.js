const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission("ADD_REACTIONS"))
        return message.channel.send("I don't have the add reactions permission")
    let playerCard1 = Math.floor(Math.random() * 11) + 2;
    let playerCard2 = Math.floor(Math.random() * 11) + 2;
    let botCard1 = Math.floor(Math.random() * 11) + 2;
    let botCard2 = Math.floor(Math.random() * 11) + 2;
    let playerTotal = playerCard1 + playerCard2;
    let playerArray = [];
    let botArray = [];
    playerArray.push(playerCard1)
    playerArray.push(playerCard2)
    botArray.push(botCard1)
    botArray.push(botCard2)

    let embed = new Discord.MessageEmbed()
        .setTitle("Blackjack :diamonds::clubs::hearts::spades:")
        .setColor('BLACK')
        .setDescription(
            `Your hand: ${playerCard1},${playerCard2}:${playerTotal}\nBots hand: ${botCard1}, ???, ???`
        )
    message.channel.send(embed).then(msg => {
        msg.react("✅").then(r => {
            msg.react("❌");
            const standFilter = (reaction, user) =>
                reaction.emoji.name === "❌" && user.id === message.author.id;
            const hitFilter = (reaction, user) =>
                reaction.emoji.name === "✅" && user.id === message.author.id;
            const stand = msg.createReactionCollector(standFilter, {
                time: 60000,
                max: 1
            });
            const hit = msg.createReactionCollector(hitFilter, {
                time: 60000
            });

            let sum2 = botArray.reduce(function (a, b) {
                return a + b;
            }, 0);
            let botCount = sum2
            let sum1 = playerArray.reduce(function (a, b) {
                return a + b;
            }, 0);
            let playerCount = sum1
            if (playerCount > 21 && botCount > 21) {
                embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                    )
                    .setColor("RED")
                msg.edit(embed)
                hit.stop()
                stand.stop()
            } else if (playerCount === 21 && botCount < 21) {
                embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                    )
                    .setColor("GREEN")
                msg.edit(embed)
                hit.stop()
                stand.stop()
            } else if (playerCount < 21 && botCount === 21) {
                embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                    )
                    .setColor("RED")
                msg.edit(embed)
                hit.stop()
                stand.stop()
            } else if (playerCount > 21 && botCount === 21) {
                embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                    )
                    .setColor("RED")
                msg.edit(embed)
                hit.stop()
                stand.stop()
            } else if (playerCount === 21 && botCount > 21) {
                embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                    )
                    .setColor("GREEN")
                msg.edit(embed)
                hit.stop()
                stand.stop()
            }
            stand.on("collect", r => {
                let sum2 = botArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let botCount = sum2
                let sum1 = playerArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let playerCount = sum1;
                if (playerCount > 21 && botCount > 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount < 21 && botCount === 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > 21 && botCount === 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount > 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > botCount && playerCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount < botCount && botCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`)
                        .setColor("RED")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (botCount > 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`)
                        .setColor("GREEN")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (playerCount < 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`)
                        .setColor("RED")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (botCount < 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`)
                        .setColor("GREEN")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                }
            })
            hit.on("collect", r => {
                let playerCard3 = Math.floor(Math.random() * 11) + 2
                let botCard3 = Math.floor(Math.random() * 11) + 2
                playerArray.push(playerCard3)
                botArray.push(botCard3)

                let sum2 = botArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let botCount = sum2
                let sum1 = playerArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let playerCount = sum1;
                if (playerCount > 21 && botCount > 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount < 21 && botCount === 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > 21 && botCount === 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount > 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`)
                        .setColor("RED")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (botCount > 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`)
                        .setColor("GREEN")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (playerCount > botCount && playerCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`
                        )
                        .setColor("GREEN")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount < botCount && botCount < 21) {
                    embed.setDescription(
                            `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`
                        )
                        .setColor("RED")
                    msg.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount < 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Bot Won`)
                        .setColor("RED")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else if (botCount < 21) {
                    embed.setDescription(`Your hand: ${playerArray}:${playerCount}\nBots hand: ${botArray}:${botCount}\n Player Won`)
                        .setColor("GREEN")
                    hit.stop()
                    stand.stop()
                    msg.edit(embed)
                } else {
                    embed.setDescription(
                        `Your hand: ${playerArray}:${playerCount}\nBots hand: ${botCard1}, ???, ???`
                    )
                    msg.edit(embed)
                }
            })
        })
    })
};
module.exports.help = {
    name: "bj",
     description: "A fun game of blackjack",
    usage: " ",
    aliases: ["blackjack"],

}