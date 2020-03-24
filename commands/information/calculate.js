
const math = require('mathjs');
module.exports = { 
    config: {// im using my command handler, but you should use your own...
 	name: "calcule",
    aliases: ["calc"],
    description: "",
    category: "information",
    accessableby: "Members",
    aliases: ["cal"]
    },
    run: async (bot, message, args) => {

  const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419];

  if(!args) {
    return message.channel.send('', {
      embed: {
        color: hexcols[~~(Math.random() * hexcols.length)],
        title: "Error",
        description: "You have not given any maths to calculate!"
      }
    }).catch(console.error);
  }

  let calculation = args.join(' ');

  if(calculation) {
    try {
    return message.channel.send('', {
      embed: {
        color: hexcols[~~(Math.random() * hexcols.length)],
        title: "Calulation Result",
        description: `\`\`\`${math.evaluate(calculation)}\`\`\``
      }
    }).catch(console.error);
  } catch (err) {
  return message.channel.send('', {
    embed: {
      color: hexcols[~~(Math.random() * hexcols.length)],
      title: "Calculation Failed",
      description: `\`\`\`${err}\`\`\``
    }
  }).catch(console.error);
}
}
}
}