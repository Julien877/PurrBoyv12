
const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "wallpaper",
        description: "sends a wallpaper",
        usage: "!cat",
        category: "image",
        accessableby: "Members",
        aliases: ["wall"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")

    fetch(`https://nekos.life/api/v2/img/wallpaper`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new MessageEmbed()
        .setImage(body.url)
        .setColor(cyan)
        .setAuthor(`${bot.user.username} Cool wallpaper`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}