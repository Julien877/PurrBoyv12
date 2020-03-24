const { Client, Collection } = require("discord.js");
const Discord = require('discord.js')
const { token } = require("./botconfig.json");
const snekfetch = require('snekfetch');
const { MessageEmbed } = require("discord.js");
const bot = new Client();
const enmap = require('enmap');
bot.snipes = new Map();
const express = require('express');
const fs = require("fs");
const botconfig = require("./botconfig.json");
const prefixes = require("./botconfig.json");

let coins = require("./coins.json");
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 3;

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.on('messageDelete', (messageDelete) => {
    const mention = messageDelete.mentions.members.first();

    const embed = new MessageEmbed()
    .setAuthor('Ghost ping', messageDelete.author.displayAvatarURL())
    .setImage('https://media.discordapp.net/attachments/687626901618950146/687957954481094676/ezgif.com-crop_3.gif')
    .setColor('#000acf')
    .setDescription(`**User:** ${messageDelete.author.username}\n**Message:** ${messageDelete.content}`)
    
    if (mention) return messageDelete.channel.send(embed)
})

    bot.login(botconfig.token);