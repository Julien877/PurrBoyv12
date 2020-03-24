const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  config: {
      name: "support",
      description: "Ask dev",
      usage: "*sport",
      category: "information",
      accessableby: "Members",
      aliases: ["sup"]
  },

  run: async (bot, message, args) => {
  let support_reason = args.slice(1).join(" ")
  if(support_reason.length < 1) return message.reply("Please provide a question for the developers.")
  message.channel.createInvite({
            maxAge: 0,
            maxUses: 0
        }).then(invite => {
          const reportEmbed = new Discord.MessageEmbed()
          .setTitle("Support requested")
          .setColor("#000acf")
          .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
          .setDescription("There is support requested by " + message.author)
          .addField("User:", message.author.tag + ` (${message.author.id})`)
          .addField("Guild:", message.guild.name + ` (${message.guild.id})`)
          .addField("Support reason:", support_reason)
          .addField("Invite code:", invite.code)
         
          let reportschannel = message.guild.channels.cache.find(x => x.name === "support-bot");
    if(!reportschannel) return message.channel.send("Couldn't find support-bot channel.");
          
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
 
        })
}
}