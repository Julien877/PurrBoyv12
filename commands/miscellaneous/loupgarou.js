
const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["✅"];

module.exports = {
    config: {
    name: "tete",
    category: "miscellaneous",
    description: "Jouez au loup garou",
    usage: "lp",
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
            .setColor("#000acf")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("React avec ✅ Pour participer a la parti de Loup garou!!!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "✅" && clientChosen === "✅")) {
                    return "Role added !";
            } else if (me === clientChosen) {
                return "It's a tie!";
            } else {
                return "You lost!";
            }
        }
    }
}
