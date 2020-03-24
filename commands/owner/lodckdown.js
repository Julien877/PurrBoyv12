
const ms = require('ms');
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "lockdown",
        description: "lock",
        usage: "*lockdown",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["lock"]
    },
    run: async (bot, message, args) => {
  if (!bot.lockit) bot.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions([
        {
           id: message.guild.id,
           deny: ['SEND_MESSAGES'],
        },
    ])
    .then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions([
        {
           id: message.guild.id,
           deny: ['SEND_MESSAGES'],
        },
    ])
    .then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time),
       { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
            message.channel.overwritePermissions([
                {
                   id: message.guild.id,
                   deny: ['SEND_MESSAGES'],
                },
            ])
            .then(message.channel.send('Lockdown lifted.')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
}
};