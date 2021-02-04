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
  if (state && state === "disabled")
    return message.channel.send("This command is already disabled");
  db.set(`${message.guild.id}_${command}`, "disabled");
  message.channel.send(`Disabled the command ${command}`);
};
module.exports.help = {
  name: "disable",
  description: "Disables any command",
  usage: " [command]",
  aliases: ["getdisownedcommand"]
};
