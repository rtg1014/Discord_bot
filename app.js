const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json")

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.content === '안녕') {
        msg.reply('만나서 반가워!');
    }
    if (msg.content === '뭐해?') {
        msg.reply('대기중이야');
    }
    if (msg.content === '이름이 뭐야?') {
        msg.reply('내 이름은 코라스야!');
    }
    if (msg.content === '먼저갈게') {
        msg.reply('다음에 또만나!');
    }
});

client.login(token.token);
