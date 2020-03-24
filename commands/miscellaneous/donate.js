const { MessageEmbed } = require("discord.js")
const { blue_light } = require("../../colours.json");


module.exports = { 
    config: {
        name: "donate",
        description: "Donation",
        usage: "*donate",
        category: "miscellaneous",
        accessableby: "miscellaneaous",
        aliases: ["donation"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("We love you. Please donate to our host here: @cattowersupport")

        let Cembed = new MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
            .setColor("#000acf")
            .addField(`Please donate to our host here: @cattowersupport`);

  
}
}