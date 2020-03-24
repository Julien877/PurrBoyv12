const { MessageEmbed } = require("discord.js")
const { blue_light } = require("../../colours.json");


module.exports = { 
    config: {
        name: "poopchance",
        description: "FREE NITRO OMG",
        usage: "",
        category: "Chance boi",
        accessableby: "images",
        aliases: ["NITROOOOOOO"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("BRO YOU POOP")

            let embed = new MessageEmbed()
            .setColor(blue_light)
            .setAuthor(`${bot.user.username} big poop of chance`, message.guild.iconURL)
            .setImage('https://assets.change.org/photos/2/ok/yt/wIOkyteTjxspEuO-800x450-noPad.jpg?1517677258.png')
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        }
    }