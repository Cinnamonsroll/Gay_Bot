module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {
        message.reply("You don't have the perms to delete the messages idiot")
    }
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("I dont have the `Manage Messages` permissions please give me the perms and try again");
    }
    let num = Math.floor(args[0])
    if (!args[0]) return message.channel.send('wtf stop trying to break me (add the number of chat massages you want me to delete)');
    if (args[0] > 100) return message.channel.send('The provided value is higher then the max vlause of messages you can delete, The max vlaue of messages you can delete is 100');
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return;
    }
    else {
        message.channel.bulkDelete(num, filterOld = true);
    }

}

module.exports.help = {
    name: "clear",
    description: "Deletes the amount of messages",
    usage: " <amount of messages to delete>",
    aliases: ["clean", "purge"]
}