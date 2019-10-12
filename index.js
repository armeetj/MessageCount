const Discord = require('discord.js');
const bot = new Discord.Client();
var reply = require('./functions/reply');
const fs = require('fs');
require('dotenv').config();
const path = require('path');
global.appRoot = path.resolve(__dirname);

const token = process.env.TOKEN;
//login
bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    reply.reply(msg, bot);
});
