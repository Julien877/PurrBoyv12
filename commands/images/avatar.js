const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
    config: {
    name: "avatar",
    description: "Show the avatar",
    usage: "+avatar @UserID",
    category: "images",
    accessableby: "Members",
    aliases: ["av"]
},
 
run: async (bot, message, args) => {
    let  waiting = await message.channel.send("Generating...").catch(console.error);
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.MessageEmbed()
 
        .setImage(mentionedUser.displayAvatarURL({dynamic: true }))
        .setColor("#000acf")
        .setTitle("Avatar")
        .setFooter("Requested by " + message.author.tag)
        .setDescription("[Link of avatar](" + mentionedUser.displayAvatarURL({dynamic: true }) + ")");
 
    waiting.edit(avatarembed).catch(console.error)
}
}