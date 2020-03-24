const { Utils } = require("erela.js")
const { MessageEmbed } = require("discord.js")
const { stripIndents } = require("common-tags")

module.exports = { 
    config: {
        name: "nowplaying",
        aliases: ["np", "now"],
        description: "Displays what the bot is currently playing.",
        accessableby: "Member",
        category: "music",
    },
    run: async (bot, message, args) => {
        const player = bot.music.players.get(message.guild.id);
        if (!player || !player.queue[0]) return message.channel.send("No song/s currently playing within this guild.");
        const { title, author, duration, thumbnail } = player.queue[0];

        const embed = new MessageEmbed()
            .setAuthor("Current Song Playing.", message.author.displayAvatarURL)
            .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
            .setThumbnail(thumbnail)
            .setDescription(stripIndents`
            ${player.playing ? "▶️" : "⏸️"} **${title}** \`${Utils.formatTime(duration, true)}\` by ${author}
            `);

        return message.channel.send(embed);
    }
}