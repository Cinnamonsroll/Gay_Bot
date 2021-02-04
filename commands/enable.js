const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_GUILD"))
    return message.channel.send("You're bad");
  let db = require("quick.db");
  let command = args[0];
  if (!command) return message.channel.send("Please include a command name");
  command = command.toLowerCase();
  if (!client.commands.get(command))
    return message.channel.send("That is not a valid command");
  let state = db.fetch(`${message.guild.id}_${command}`);
  if (!state || state === "enabled")
    return message.channel.send("This command is already enabled");
  db.set(`${message.guild.id}_${command}`, "enabled");
  message.channel.send(`Enabled the command ${command}`);
};
module.exports.help = {
  name: "enable",
  description: "Enables any command",
  usage: " [command]",
  aliases: ["getdisownedcommand"]
};
