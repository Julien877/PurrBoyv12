
const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    config: {
    name: "love",
    category: "miscellaneous",
    description: "Calculates the love affinity you have for another person.",
    usage: "[mention | id | username]",
    },
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members.cache
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
            .setColor("#000acf")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}