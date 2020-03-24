
const Discord = require("discord.js");
const emojis = require("../../emojis.json")
const colors = require("../../colors.json")

module.exports = {
    config: {
	name: 'reload2',
	description: 'Reloads a command',
    args: true,
	usage: "<command>",
    permissions: "dev",
    },
    run: async (bot, message, args) => {

        if(message.author.id !== bot.settings.devs) return;

		const commandName = args[0].toLowerCase();
		const command = message.bot.commands.get(commandName)
			|| message.bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${commandName}.js`)];

		try {
			const newCommand = require(`./${commandName}.js`);
			message.bot.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			return message.channel.send(`There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``);
		}
		message.channel.send(`Command \`${commandName}\` was reloaded!`);
	},
};