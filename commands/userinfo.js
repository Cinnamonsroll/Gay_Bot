const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;

    let ree = member._roles
        .sort((a, b) => b.position - a.position)
        .map(r => r)
        .join('> <@&')
    if (ree.length > 1024) ree = "To many roles to display";
    /*user activity
    if (member.presence.status === 'dnd') member.presence.status = `${emoji("756622509872513195")}Do Not Disturb`;
    if (member.presence.status === 'online') member.presence.status = `${emoji("756622600569880657")}Online`;
    if (member.presence.status === 'idle') member.presence.status = `${emoji("756622552058691647")}Idle`;
    if (member.presence.status === 'offline') member.presence.status = `${emoji("756622471305625641")}Invisible`;
    //the platform user usage to access Discord
    let platform;
    if (member.presence.status === `${emoji("756622471305625641")}Invisible`) {
        platform = (`\`N/A\``)
    }
    if (!member.presence.clientStatus) {
        platform = (`\`N/A\``)
    } else {
        if (member.presence.clientStatus.desktop) platform = `${emoji("756659337715384330")}Desktop`;
        if (member.presence.clientStatus.web) platform = `${emoji("756659286519578688")}Web`;
        if (member.presence.clientStatus.mobile) platform = `${emoji("756659242026664069")}Mobile`;
    }
    let status = member.presence.status;
    //platform = platform;
    */

    //the user joined and created dates
    let x = Date.now() - message.guild.members.cache.get(member.id).user.createdAt
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const created = Math.floor(x / 86400000);
    const joined = Math.floor(y / 86400000);
    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY");
    const createddate = moment.utc(message.guild.members.cache.get(member.id).user.createdAt).format("dddd, MMMM Do YYYY");
    //user info embed
    const embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('a8ffff')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addField("Member ID", `${member.id}`, true)
        .addField('Created At', `${createddate} \n\`${created} day(s) ago\``)
        .addField('Joined the server At', `${joineddate} \n \`${joined} day(s) Ago\``)
        /*.addField("Status", `ree`, true)
        .addField("Platform", `ree`, true)*/
    if (!ree) {
        embed.addField('Roles', `\`No Roles\``)
    } else {
        embed.addField('Roles', `<@&${ree}>`,)
    }

    message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    description: "gets info about the user",
    aliases: ['memberinfo', 'u_info', 'ui']
}