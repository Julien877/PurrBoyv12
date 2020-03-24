module.exports = { 
    config: {
        name: "purr",
        description: "See purr from user",
        accessableby: "Bot Owner",
        category: "owner",
        type: "owner",
        usage: `*purr @UserID`
    },

run: async(bot, message, args) => {

    const member = message.mentions.members.first();

    if (!message.member.hasPermission('SEND_MESSAGES'))
        return message.channel.send('⚠️ You do not have permission !');
    
    if (!member)
        return message.channel.send('⚠️ You must mention a user !');

    bot.db.ensure(member.id, {
        invites: 0
    });

    message.channel.send({
        embed: {
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            description:  `📄 ${bot.db.get(member.id, 'invites')} Purr(s)`,
            color: 0x00FFFF
        }
    });
}
}