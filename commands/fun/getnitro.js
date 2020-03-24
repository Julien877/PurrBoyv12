const { MessageEmbed } = require("discord.js")
const { blue_light } = require("../../colours.json");


module.exports = { 
    config: {
        name: "nitro",
        description: "FREE NITRO OMG",
        usage: "",
        category: "fun",
        accessableby: "miscellaneaous",
        aliases: ["NITROOOOOOO"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")

            let embed = new MessageEmbed()
            .setColor(blue_light)
            .setAuthor(`${bot.user.username} ACCEPT FASTTTT`, message.guild.iconURL)
            .setImage('https://cdn.discordapp.com/attachments/559615681104969750/686462055179354123/NITRO.png')
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        }
    }