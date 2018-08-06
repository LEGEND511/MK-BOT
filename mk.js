const figlet = require('figlet');
const sql = require("sqlite");
const hastebin = require('hastebin-gen');
const giphy = require('giphy-api')();
const fs = require('fs');
const Canvas = require('canvas');
const jimp = require("jimp");
///////////////////////////////////////////////
const prefix = "!";
///////////////////////////////////////////////
const moment = require('moment');
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log('-----------------')
  console.log(`${client.user.username} is online`);
  console.log('-----------------')
	

  console.log('----------------------------------------------');
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('----------------------------------------------')
});
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  message.channel.send(':white_check_mark:| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
client.on("ready", function() {
	console.log("ready");
	
	client.user.setStatus("dnd");
	client.user.setGame("MK_FOR_EVER");
});

client.login(process.env.BOT_TOKEN);
