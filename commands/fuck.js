module.exports.run = async (client, message, args) =>{
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    const taggedUser2 = message.mentions.users.first()|| message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    message.channel.send(` *fucks* ${taggedUser2}` ); 
}

module.exports.help ={
    name:"fuck",
     description: "no",
    usage: " <user>",
    aliases:[],
}