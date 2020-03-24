const { MessageEmbed } = require("discord.js")
const { blue_light } = require("../../colours.json");


module.exports = { 
    config: {
        name: "chance",
        description: "god damnit",
        usage: "",
        category: "Chance boi",
        accessableby: "images",
        aliases: ["Chance"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("CHANCE WTFFFF BRO")

            let embed = new MessageEmbed()
            .setColor(blue_light)
            .setAuthor(`${bot.user.username} Cute Chance Oh my cookie`, message.guild.iconURL)
            .setImage('https://i.pinimg.com/236x/21/f2/b2/21f2b28226179ef16cce43aa495fe8fe--food-fails-fastfood.jpg')
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        }
    }