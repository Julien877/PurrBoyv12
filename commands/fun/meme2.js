const f = require('node-fetch'); // require node-fetch
const { MessageEmbed } = require('discord.js'); // require embed
const embed = new MessageEmbed() // make embed

  module.exports = {
    config: {
      name: 'meme2',
      aliases: ['m'],
      usage: 'meme',
      description: 'For your own visual pleasures',
      category: 'Main',
      cooldown: 2,
      ownerCmd: false,
      group: 'everyone',
    },
    
  run: async (bot, msg, args) => { // bot, msg, args
    
    msg.channel.send(embed.setColor("BLUE").setDescription('Generating..')).then(m => { // senbd a base message and define m
        f('https://www.reddit.com/r/memes.json?sort=top&t=week') // fetch the link
    .then(res => res.json()).then(body => { // define body
  
  const SafeHandler = msg.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
      if(!SafeHandler.length || !body) return msg.channel.send(embed.setColor("RED").setDescription(`:x: | The post couldn't be found!`));
 // if theres no body or the channel isnt nsfw with a nsfw post,
 const Number = Math.floor(Math.random() * SafeHandler.length); // randomize of the SafeHandler varible by its length
  
      embed.setColor("BLUE") // set color to a blue
      embed.setDescription(`Author: ${SafeHandler[Number].data.author}`) // set the post author
      embed.setTitle(`**${SafeHandler[Number].data.title}**`) // set the posts title
      embed.setURL(`https://reddit.com${SafeHandler[Number].data.permalink}`) // set the link
      embed.setImage(SafeHandler[Number].data.url) // obviously, the meme
      embed.setTimestamp()
      embed.setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL) // upvotes | comments
        m.delete().catch() // delete the message
        msg.channel.send(embed); // send the embed
        })
      })
    } 
  }