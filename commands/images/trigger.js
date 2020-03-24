
module.exports = { 
    config: {
        name: "trigger",
        description: "im done",
        usage: "*trigger",
        category: "images",
        accessableby: "Members",
        aliases: ["triggered"]
    },

run:    async (bot, message, args) => {

        let profilepic = message.author.avatarURL;
    
        message.channel.send({
            file: {
                attachment: "https://cute-api.tk/v1/generate/triggered?url=" + profilepic,
                name: "triggered.gif"
            }
        });
    
    }
}
