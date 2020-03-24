const { prefix } = require("../../botconfig.json");

module.exports = async (bot, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

        if(message.mentions.users.first()===bot.user) {
           message.channel.send("Hello player of CatTower Gaming. \nMy prefix is ``+``\nYou can type ``+help`` for see all the commands")
        }

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)

}
