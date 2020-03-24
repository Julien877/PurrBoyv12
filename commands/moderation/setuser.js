module.exports = {
    config: {
        name: "username",
        description: "Mutes a member in the discord!",
        usage: "*mute <user> <reason>",
        category: "moderation",
        accessableby: "Members",
        aliases: ["m", "nospeak"]
    },
run: async (bot, message, args) => {
    if (args.join(' ').length >= 1) {
      await bot.user.setUsername(args.join(' '));
  
      await message.channel.send({
        embed: {
          color: bot.colors.GREEN,
          description: `${bot.user.username}'s username is now set to **${args.join(' ')}**`
        }
      }).catch(e => {
        bot.log.error(e);
      });
    }
}
}