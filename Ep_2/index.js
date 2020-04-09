const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'cant show'

const PREFIX = '!'

bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity('what you want it to be playing', { type: "PLAYING"}).catch(console.error);
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'ping':
            message.reply('pong!')
        break;

        case 'youtube':
            message.channel.send('https://youtube.com/zeekz')
        break;

        case 'info':
            if (args[1] === 'version'){
                message.channel.send('Version 1.0.1 (sub to Salvage_Dev)')
            } else{
                message.reply('Invalid args')
            }
        break;

        

    }
})

bot.login(TOKEN)
