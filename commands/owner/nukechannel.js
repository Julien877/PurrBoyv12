const Discord = require("discord.js");

module.exports = {
    config: {
    name: "nukec",
    aliases: ["nukem", "nukeh"],
    category: "owner",
    description: "NEVER DO NUKE PLEASE",
    },
    run: async (client, message, args) => {
          if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to nuke this channel.");
              if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, I dont have the permissions to do this cmd I need MANAGE_CHANNELS.')
            await message.channel.clone().then((ch) =>{ch.setParent(message.channel.parent.id);ch.setPosition(message.channel.position); 
                                   const embed = new Discord.MessageEmbed()
                                      .setTitle('Channel has been NUKED!')
                                      .setColor(`#36393f`)
                                      .setImage(`https://images-ext-1.discordapp.net/external/rGT3vhB8xqYng_StlUaV3jNAgdIpo9SISDskCjxq5Ug/%3Fcid%3D790b7611e787b306d4cf5d03b88cc2c6870eb35b8f37e008%26rid%3Dgiphy.gif/https/media1.giphy.com/media/uSHMDTUL7lKso/giphy.gif`)
                                                       
                                                       ch.send(embed)}); message.channel.delete();
            }
        }