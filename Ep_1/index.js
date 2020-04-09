const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'cant show'

bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity('what you want it to play', { type: "PLAYING"}).catch(console.error);
})

bot.login(TOKEN)
