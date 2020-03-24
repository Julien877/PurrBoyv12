
const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "hentai",
        description: "sends a picture of a cat!",
        usage: "!cat",
        category: "nsfw",
        accessableby: "Members",
        aliases: ["dbz"]
    },
    run: async (bot, message, args) => {
    if(!message.channel.nsfw) return message.channel.send("Please run this command in a `NSFW` channel.");
    let msg = await message.channel.send("Generating...")

    fetch(`https://nekos.life/api/v2/img/Random_hentai_gif`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new MessageEmbed()
        .setImage(body.url)
        .setColor(cyan)
        .setAuthor(`${bot.user.username} Hentai`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}