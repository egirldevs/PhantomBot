const Discord = require("discord.js");
const functions = require("../../structures/functions");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
//code starts here
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
  let warnings = db.get(`warnings_${message.guild.id}_${member.id}`)
  if(warnings === null) warnings = 0;
  const warns  = new Discord.MessageEmbed()
  .setDescription(`Warnings for ${member}\n`
                + `**${warnings}**`)
  message.channel.send(warns)
}

module.exports.help = {
  name: "warnings",
  description: "warn a member",
  aliases: ["warns", "w", "infractions"],
  category: "moderation"
}

module.exports.requirements = {
  userPerms: [],
  clientPerms: [],
  ownerOnly: false
}

module.exports.limits = {
  rateLimit: 4,
  cooldown: 1e4
}