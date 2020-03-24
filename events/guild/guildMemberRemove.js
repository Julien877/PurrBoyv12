module.exports = async (bot, member) => {
    const channel = member.guild.channels.cache.find(x => x.name === "leave");
    channel.send(`Sad to see you go,${member.user.tag}! :frowning:`)
  }