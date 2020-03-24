
const Discord = require("discord.js");
const botconfig = require("../../botconfig");
let coins = require("../../coins.json");
let purple = botconfig.purple;
let xp = require("../../xp.json");

module.exports = { 
    config: {
        name: "stats",
        description: "ehehe",
        usage: "+coins",
        category: "fun",
        accessableby: "Members",
        aliases: ["coins"]
    },

run: async (bot, message, args) => {

  //** coins **//
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  //** xp **//
  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;
  let uCoins = coins[message.author.id].coins;

  let statsembed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setImage('https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif')
    .setColor("#00FF00")
    .addField("You've been here since", message.member.joinedAt)
    .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
    .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL)
    .addField("Coins", uCoins, true);

  message.channel.send(statsembed); //.then(msg => {msg.delete(5000)});

}
}