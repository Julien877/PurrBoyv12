const { MessageEmbed } = require('discord.js');

module.exports = (bot, message, args) => {
    bot.snipes.set(message.channel.id, {
        sender: message.author,
        content: message.content
    });
  };