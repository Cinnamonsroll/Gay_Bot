module.exports.run = async (bot, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("I dont have the `Ban Members` permissions please give me the perms and try again")
    }
    if (!message.member.hasPermission(['BAN_MEMBERS'])) {

        message.channel.send('sorry to tell you this but um, YOU DON\'T HAVE THE GODDAME PERMS TO BAN MEMBERS')

    } else if (!message.mentions.users.first()) {

        message.channel.send('You have to ping the person you want to ban, SMH my head')

    } else if (user.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        message.channel.send('You cannot ban this member!!')

    } else {

        message.guild.members.ban(user);
        message.channel.send(`oops ${user} got banned, F`)
    }
}

module.exports.help = {
    name: "ban",
    description: "Bans a user",
    usage: " <user>",
    aliases: ["ban_user"],
    permissions: "ban"
}