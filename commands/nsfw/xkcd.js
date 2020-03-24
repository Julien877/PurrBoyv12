const { MessageEmbed } = require("discord.js");
const { cyan } = require("../../colours.json"); 
const fetch = require("node-fetch"); //npm i node-fetch

module.exports = {
    config: {
        name: "xkcd",
        description: "xkcd comics, get the latest or certain comic",
        usage: "<search|latest> (id)",
        category: "nsfw",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
        if(!message.channel.nsfw) return message.channel.send("Please run this command in a `NSFW` channel.");
        if((args[1] && isNaN(args[1])) || !["search", "latest"].includes(args[0])) return message.channel.send("`-xkcd <search|latest> (id)");
        let search = args[1] ? `http://xkcd.com/${args[1]}/info.0.json` : "http://xkcd.com/info.0.json";
            try {
                fetch(search).then(res => res.json()).then(res => {
                    if(!res) return message.channel.send("No results found for this comic, sorry!");
                    let { safe_title, img, day, month, year, num, alt} = res;

                    let embed = new MessageEmbed()
                        .setColor(cyan)
                        .setDescription(alt ? alt : "*crickets* - No Description")
                        .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
                        .setAuthor(`XKCD | ${safe_title} [${num}]`)
                        .setImage(img)
                        .setFooter(`Published ${day}/${month}/${year}`)

                        message.channel.send(embed)
                })
            } catch(e) {
                console.log(e)
                return message.channel.send("looks like ive broken! Try again.")
            }
    }
}