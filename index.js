const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
require('dotenv').config();
const path = require('path');
global.appRoot = path.resolve(__dirname);

var dbInsert = require('./database/dbFunctions.js');

const TOKEN = process.env.TOKEN;
const INVITE_LINK= process.env.INVITE_LINK;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

//login
bot.login(TOKEN);

bot.on('ready', () => 
{
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => 
{
  // var prefix = dbInsert.data.getPrefix(msg.guild);
  var prefix = ">";
  console.log(prefix);
  try{
    if(message.content.substring(0, prefix.length)===prefix)
    {
        let args = message.content.substring(prefix.length, message.length).split(" ");

        switch(args[0])
        {
          case "ping":
              console.log("pinged by user: " + message.author.username);
              var embed = new Discord.RichEmbed().setTitle("pong").setColor("#ffffff");
              message.channel.send(embed);
              console.log("ponged user: " + message.author.username);
          break;
          
          case "help":
                var helpEmbed = new Discord.RichEmbed()
                .setTitle("__*help*__ \n")
                .setColor("#ffffff")
                .addField("creator: @xarmeetx#7768", "student at EVHS")
                .addField("Current Server: ", message.guild.name)
                .addField("link to add to another server: " + INVITE_LINK)
                .addField("commands:", " current commands in the server") 
                .addField(prefix + "help: ", "display the help menu")
                .addField(prefix + "ping: ", "bot responds with pong")
                .addField(prefix + "change-prefix: ", "*currently disabled* change the prefix for commands")
              message.channel.send(helpEmbed);
          break;
        }
    }     
  }catch(error)
  {
      console.log("ERROR thrown");
  }
  console.log('incrementing total messages')
  dbInsert.data.incrementTotalMessages(msg.guild);
});

bot.on('guildCreate', (guild) =>
{
  console.log('joined guild');
  dbInsert.data.addServer(guild);
});

bot.on('guildUpdate', (guild) =>
{
  console.log('guild update');
  dbInsert.data.updateServer(guild);
})
