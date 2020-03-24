const { MessageEmbed } = require("discord.js"); 
const embed = new MessageEmbed()


module.exports = { 
    config: {// im using my command handler, but you should use your own...
 	name: "guilds",
    aliases: ["servers"],
    description: "Displays the bot guilds",
    category: "information",
    accessableby: "Administrators",
    aliases: ["bot", "serv", "guild"]
    },
    run: async (bot, message, args) => {

        let guilds = bot.guilds.cache.map(g => g.name).join('\n'); 
        
   	const embed = new MessageEmbed()
       embed.setColor("#000acf") // set color to red
       embed.setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
       embed.setDescription(`\`\`\`${guilds}\`\`\``) // place the varible 'guilds' into a code block.
       embed.addField('[**__Guild Size__**]', `\`\`\`js\n${bot.guilds.cache.size}\`\`\``, true)
       embed.addField('[**__User Count__**]', `\`\`\`js\n${message.guild.memberCount}\`\`\``, true)
         return message.channel.send(embed); // return and send the embed.
     
     }
   }