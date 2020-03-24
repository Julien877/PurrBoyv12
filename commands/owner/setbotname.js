const Discord = require('discord.js');
const ownerid = "525857003684495361";

module.exports = { 
    config: {
        name: "setbotname",
        description: "For Sauron####",
        accessableby: "Bot Owner",
        category: "owner",
        type: "owner",
        usage: `can't say c:`
    },

run: async (bot, message, args) => {
    if(message.author.id === ownerid) {
    	const newName = message.content.split(' ');

    	try {
        	bot.user.setUsername(newName[1])
                .then(user => message.channel.send(`My new username is **${user.username}**`))
                .catch(console.error);
    	} catch(error) {
        	message.channel.send("I could not set my new username rip")
    	}
    } else {
     	return message.channel.send("You are not the bot owner!");   
    }
}
}
