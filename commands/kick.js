module.exports.run = async (bot, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!args[0]) {
        message.channel.send("please provide the name or mantion the member you want to kick")
        return;
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("I dont have the `Kick Members` permissions please give me the perms and try again")
    }
    if (!message.member.hasPermission(['KICK_MEMBERS'])) {
        message.channel.send('sorry to tell you this but um, YOU DON\'T HAVE THE GODDAME PERMS TO KICK MEMBERS')

    } else if (user.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        message.channel.send('You cannot kick this member!!')

    } else {
        user.kick(args[1]).then(() => {
            message.channel.send(`${user} has been kicked`)
        }).catch(err => {
            message.channel.send('I was unable to kick the member');
        })
    }
}

module.exports.help = {
    name: "kick",
    aliases: ["kick_user"],
    description: "Kicks a user kek",
    usage: " <user>",
    permissions: "kick"
}