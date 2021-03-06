const Discord = require("discord.js");
const colors = require("../../colors.json");
const countriesJSON = require("../../countries.json");
const novelcovid = require("novelcovid")
const fetch = require("node-fetch");
const { red_light } = require("../../colours.json");

Object.defineProperty(String.prototype, "toProperCase", {
    value: function () {
        return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
});

module.exports = {
    config: {
    name: "corona",
    category: "informartion",
    description: "Shows stats about the corona virus.",
    usage: "[country]",
    },
    run: async (bot, message, args) => {
        if (!args[0]) {
            const stats = await novelcovid.all();
            const countryStats = await novelcovid.countries();
            var todayDeaths = 0;
            var todayCases = 0;
            countryStats.forEach(country => { todayDeaths += country.todayDeaths; todayCases += country.todayCases });
            const embed = new Discord.MessageEmbed()
                .setAuthor("Coronavirus Stats", message.author.username)
                .setColor(red_light)
                .addField("Confirmed Cases", `${stats.cases.toLocaleString()} Cases`, true)
                .addField("Deaths", `${stats.deaths.toLocaleString()} Deaths`, true)
                .addField("Perecent Dead", `${((stats.deaths / stats.cases) * 100).toFixed(2)}%`, true)
                .addField("Perecent Recovered", `${((stats.recovered / stats.cases) * 100).toFixed(2)}%`, true)
                .addField("Today Cases", `${todayCases.toLocaleString()} Cases`, true)
                .addField("Today Deaths", `${todayDeaths.toLocaleString()} Deaths`, true)
                .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/COVID-19_Outbreak_World_Map.svg/330px-COVID-19_Outbreak_World_Map.svg.png")
                .setColor("#000acf")
                .setTimestamp();
            message.channel.send(embed);
        } else {
            const countryInput = args.join(" ").toProperCase();
    var countries = await novelcovid.countries();
    const objCountries = {};
    countries.forEach(c => objCountries[c.country] = c);
    countries = objCountries;
    var name;
    if (countriesJSON[args[0].toUpperCase().trim()]) {
      name = countriesJSON[args[0].toUpperCase().trim()];
    } else {
      name = countryInput;
    }
    if (!countries[name]) return message.channel.send("Country not found.");
    const country = countries[name];
    var wikiName;
    const wikiAliases = {
      "S. Korea": "South Korea",
      "UK": "United Kingdom",
      "USA": "United States"
    };

    const thePrefixedContries = ["United States", "Netherlands"];

    if (wikiAliases[country.country]) {
      console.log("hi");
      wikiName = wikiAliases[country.country];
    } else {
      wikiName = country.country;
    }

    const WikiPage = await fetch(`https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_${thePrefixedContries.includes(wikiName) ? "the_" : ""}${wikiName.replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_")}`).then(res => res.text());
    const ImageRegex = /<meta property="og:image" content="([^<]*)"\/>/;
    const ImageLink = ImageRegex.exec(WikiPage);
    var imageLink;
    if (ImageLink) imageLink = ImageLink[1];

    var embed = new Discord.MessageEmbed()
      .setAuthor(country.country)
      .setColor(red_light)
      .setDescription(`**${country.cases.toLocaleString()} Confirmed Cases**`)
      .addField("Today Cases", `${country.todayCases.toLocaleString()} Cases`, true)
      .addField("Today Deaths", `${country.todayDeaths.toLocaleString()} Deaths`, true)
      .addField("Recovered", `${country.recovered.toLocaleString()} (${((country.recovered / country.cases) * 100).toFixed(2)}%) Recovered`)
      .addField("Deaths", `${country.deaths.toLocaleString()} (${((country.deaths / country.cases) * 100).toFixed(2)}%) Deaths`, true)
      .setThumbnail(`https://www.countryflags.io/${require("../../countries_abbreviations.json")[country.country]}/flat/64.png`)
      .setColor("#000acf")
      .setFooter("We are in shit.")
      .setTimestamp();
    if (imageLink) embed.setImage(imageLink);
    message.channel.send(embed);
  }
},
};