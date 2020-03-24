const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
let coins = require("../../coins.json");
const botconfig = require("../../botconfig");
let purple = botconfig.purple;
let xp = require("../../xp.json");



module.exports = { 
    config: {
        name: "level",
        description: "ehehe",
        usage: "+coins",
        category: "fun",
        accessableby: "Members",
        aliases: ["coins"]
    },
    
    run: async (bot, message, args) => {
        
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
 
   let lvlEmbed = new Discord.MessageEmbed()
   .setAuthor(message.author.username)
   .setColor('#000acf')
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed); //.then(msg => {msg.delete(5000)});
 
 }
}