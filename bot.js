const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By asfoura");


client.on("ready", () => {
let channel =     client.channels.get("573156516425760770")
setInterval(function() {
channel.send(`gg`);
}, 30)
})

client.login(process.env. BOT_TOKEN);
