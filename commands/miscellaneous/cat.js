const { MessageEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "cat",
        description: "sends a picture of a cat!",
        usage: "!cat",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["catto"]
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new MessageEmbed()
        .setColor(cyan)
        .setAuthor(`${bot.user.username} CATS!`, message.guild.iconURL)
        .setImage(body.file)
        .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}