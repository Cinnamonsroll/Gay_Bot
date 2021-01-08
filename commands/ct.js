const Discord = require("discord.js");
const custom = require("../models/custom.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")&&  message.author.id != "592715340782239754") return message.reply("You can not \`view\`,\`delete\` or \`set\` custom triggers");
  // viewing the custom triggers
  
  if(args[0] === "view".toLowerCase()){
    custom.find({Guild: message.guild.id}).
    exec((err, res) => {
      if (err) console.log(err);
      var page = Math.ceil(res.length / 4);
      let embed = new Discord.MessageEmbed()
      .setColor("00ffff")
      .setTitle("Custom commands")

      //if there are no result
      if (res.length === 0) {
        embed.setColor("RED");
        embed.addField("No data found", "No custom commands created")
      } 

      let pg = parseInt(args[1]);
      if(pg != Math.floor(pg)) pg = 1;
      if(!pg) pg = 1;
      let end = pg * 4;
      let start = (pg * 4) - 4;

      if(res.length === 0){
        embed.addField("Error"," No pages found!");
      } 
      else if(res.length <= start){
        embed.addField("Error", "Page not found!");
      }
      else if(res.length <= end){
        embed.setFooter(`page ${pg} of ${page}`);
        for(i = start; i < res.length; i++){
          embed.addField(`${i + 1}. ${res[i].Command}`,`${res[i].Content}`);
        }
      } 
      else{
        embed.setFooter(`page ${pg} of ${page}`);
        for(i = start; i < end; i++){
        embed.addField(`${i + 1}. ${res[i].Command}`,`${res[i].Content}`);
      }
    }
    message.channel.send(embed);
  })
}

  //deleteing the custom triggers
  
  else if(args[0] === "delete".toLowerCase()){
    if (!args[1]) return message.channel.send(`Provide a custom trigger you want to delete`);
    custom.findOne(
      { Command: args[1], Guild: message.guild.id },
      async (err, data) => {
      if (err) throw err;
      if (!data) return message.channel.send(`That is not a custom trigger`);
      custom.findOneAndDelete(
        { Command: args[1], Guild: message.guild.id },
        (err) => {
          if (err) throw err;
        }
      );
      return message.channel.send(`Successfully deleted the custom trigger ${args[1]}`);
    }
  );
}

  //setting the custom trigger 

  else if(args[0] === "set".toLowerCase()){
  if (!args[1])
    return message.channel.send(`Please specify a name for the custom trigger`);
  if (!args.slice(2).join(" ")) return message.channel.send(`Please specify content for the custom trigger`);

  if(args.slice(2).join(" ").toLowerCase().replace(/\s+/g,"").includes("nigger")||args.slice(2).join(" ").toLowerCase().replace(/\s+/g,"").includes("nigga")){
    message.channel.send("NO N WORDS !!!")
    return;
  }

  custom.findOne(
    { Guild: message.guild.id, Command: args[1] },
    async (err, data) => {
      if (err) throw err;
      if (data) {
        data.Content = args.slice(2).join(" ");
        data.save();

        message.channel.send(`Name: ${args[1]}\n New Contents: ${args.slice(2).join(" ")}`);
      } else if (!data) {
          let newData = new custom({
            Guild: message.guild.id,
            Command: args[1],
            Content: args.slice(2).join(" ")
          });
          newData.save();
          message.channel.send(`Name: ${args[1]}\n Contents: ${args.slice(2).join(" ")}`);
        }
      }
    );
  }

  else{
    return message.reply("Please only use `set`, `delete` or `view` for the custom trigger")
  }

};
module.exports.help = {
  name: "ct",
   description: "Sets deletes or views custom triggers",
    usage: " <set/view/delete> <command content>",
  aliases: ["customtrigger"]
};