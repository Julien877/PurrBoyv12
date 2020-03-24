const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
let coins = require("../../coins.json");



module.exports = { 
    config: {
        name: "coins",
        description: "ehehe",
        usage: "*coins",
        category: "fun",
        accessableby: "Members",
        aliases: ["coins"]
    },
    
    run: async (bot, message, args) => {
      if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
      }
    
      let uCoins = coins[message.author.id].coins;
    
    
      let coinEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setColor("#00FF00")
      .addField("💸", uCoins);
    
      message.channel.send(coinEmbed);//.then(msg => {msg.delete(5000)});
    
    }
}
