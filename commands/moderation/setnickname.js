const { MessageEmbed } = require('discord.js'); // use object destructoring to get a MessageEmbed from the discord.js module
const embed = new MessageEmbed() // define our embed

  module.exports = { // i have my own command handler, but you should use yours...
    config: {
      name: 'setnickname',
      aliases: ['setnick', 'setnickn'],
      usage: '*setnickname { @user | id } [ new username ]',
      description: 'Sets a users guild nickname.',
      example: '*setnickname @Noobchance poopo hedo weirdo medo',
      category: 'moderation',
      cooldown: 5,
      ownerCommand: false,
      botPermissions: ['MANAGE_NICKNAMES', 'SEND_MESSAGES'], // MANAGE_NICKNAMES is needed...
      userPermissions: ['SEND_MESSAGES', 'MANAGE_NICKNAMES'] // same for here.. you dont HAVE to, but its a good practice
    },
    
  run: async (bot, msg, args) => {
  let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]); // allow someone to @mention or provide an id
    if(!user) return msg.channel.send(embed.setColor('#000acf').setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif').setDescription(`${bot.user} Please provide a @mention or an id.`)); // if no user, return an embed.
    if(!user.kickable) return msg.channel.send(embed.setColor('#000acf').setDescription(`${bot.user} This user has higher roles than me. I cannot change that members nickname.`)); // if the member isn't kickable to the bot, it most likely wont be able to change the nickname.
    if(!args[1]) return msg.channel.send(embed.setColor('#000acf').setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif').setDescription(`${bot.user} Please provide a nickname.`)); // if there is no first argument, return an embed.
    if(args[1].length > 32) return msg.channel.send(embed.setColor('#000acf').setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif').setDescription(`${bot.user} Nicknames have to be 32 characters or less.`)); // if the nickname argument is more than 32 characters, return an embed.
    if(args.slice(1).join(' ') === user.displayName) return msg.channel.send(embed.setColor("#000acf").setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif').setDescription(`${bot.user} That user already has that nickname.`)); // if the user already has the provided nickname, return an embed.
      msg.channel.send(embed.setColor('#000acf').setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif').setDescription(`${bot.user} The user: \`${user.user.username}\` has been changed to: \`${args.slice(1).join(' ')}\` successfully.`)); // grab the users orginal name, 
        user.setNickname(args.slice(1).join(' ')); // finally, change the nickname to the provided argument.
    }
  }