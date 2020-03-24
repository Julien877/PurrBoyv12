const { MessageEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "nitroboost",
        description: "Show the nitro boost",
        usage: "*bost",
        category: "information",
        accessableby: "Members",
        aliases: ["nb"]
    },

run: (bot, message, args) => {

const embed = new MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
        .setColor("#000acf")
        .setTitle("Boost Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
        embed.addField('[**__Boosted : __**]', `\`\`\`js\n${message.guild.premiumSubscriptionCount}\`\`\``, true)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

    return message.channel.send(embed);
}
}