const { readdirSync } = require("fs")

const ascii = require("ascii-table");

let table = new ascii("Commands");
table.setHeading("Command", "Load status");


module.exports = (bot) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            if (pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
          };
        };
        ["miscellaneous", "images", "Chance boi", "information", "music", "fun", "owner", "nsfw", "moderation" ].forEach(x => load(x));
};