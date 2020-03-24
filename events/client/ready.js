  
const { ErelaClient, Utils } = require("erela.js");
const {nodes} = require("../../botconfig.json")
const fetch = require('node-fetch');
const invites = {};

module.exports = bot => {
    console.log("================================================");
    console.log('|  ✅        The bot Purrboy work    ✅       |');
    console.log('|  ✅   Developed by Sauron for Discord   ✅  |');
    console.log('|  ❔    All command work ( i guess)    ❔    |');
    console.log('|  ⚠️If you see that , contact Sauron#0001 ⚠️   |');
    console.log('================================================');
    console.log()
    bot.music = new ErelaClient(bot, nodes)
        .on("nodeError", console.log)
        .on("nodeConnect", () => console.log("================================================"))
        .on("nodeConnect", () => console.log('|  ✅   Nodes ( Music) work               ✅  |'))
        .on("nodeConnect", () => console.log("================================================"))
        .on("queueEnd", player => {
            player.textChannel.send("Queue has ended.")
            return bot.music.players.destroy(player.guild.id)
        })
        .on("trackStart", ({textChannel}, {title, duration}) => textChannel.send(`Now playing: **${title}** \`${Utils.formatTime(duration, true)}\``).then(m => m.delete({timeout: 1500})));

    bot.levels = new Map()
        .set("none", 0.0)
        .set("low", 0.10)
        .set("medium", 0.15)
        .set("high", 0.25);

        let statuses = [
            "*help",
            "Developed by Sauron",
            "Counting down..."
        ]
    
        setInterval(function() {
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            bot.user.setActivity(status, {type: "PLAYING"});
    
        }, 10000)

        const invites = {};
        
        let server = bot.guilds.cache.get("559586825983885367");
        server.fetchInvites()
        

        bot.guilds.cache.forEach(g => {
            g.fetchInvites().then(guildInvites => {
              invites[g.id] = guildInvites;
            });
        });
    }

    