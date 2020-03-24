const { MessageEmbed } = require("discord.js")
const { blue_light } = require("../../colours.json");


module.exports = { 
    config: {
        name: "chancebath",
        description: "CAHNCEEEEEEEEEEEEEEEEEEEEEE",
        usage: "*chancebath",
        category: "Chance boi",
        accessableby: "Members",
        aliases: ["chance"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("EHHHHHHHHHH")

            let embed = new MessageEmbed()
            .setColor(blue_light)
            .setAuthor(`${bot.user.username} big poop of chance`, message.guild.iconURL)
            .setImage('https://media.discordapp.net/attachments/559615681104969750/690140125706977337/image0-2.png?width=758&height=679')
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        }
    }