const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
let coins = require("../../coins.json");
const fs = require('fs')



module.exports = { 
    config: {
        name: "",
        description: "see how u rich",
        usage: "*daily",
        category: "fun",
        accessableby: "Members",
        aliases: ["dly"],
        cooldown: "86400",

    },
    
    run: async (bot, message, args) => {
      let coinAmt = Math.floor(Math.random() * 1) + 150;
      let baseAmt = Math.floor(Math.random() * 1) + 150;
      console.log(`${coinAmt} ; ${baseAmt}`);
      
      if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
      }
      
      if(coinAmt === baseAmt){
        coins[message.author.id] = {
          coins: coins[message.author.id].coins + coinAmt
        };
      fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console(err)
      });
      let coinEmbed = new Discord.MessageEmbed()
      .setTitle('**Daily Bonus**')
      .setAuthor(`${message.author.username}`)
      .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
      .setColor("#0000FF")
      .addField("💸", `${coinAmt} coins added!`)
      .setFooter('Once per day');
      
      message.channel.send(coinEmbed);
    }
}
}