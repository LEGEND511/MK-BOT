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
client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('476118785011613696').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('476118847720652820').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('476118785011613696').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('476118847720652820').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on("ready", function() {
	console.log("ready");
	
	client.user.setStatus("dnd");
	client.user.setGame("MK_FOR_EVER");
});

client.login(process.env.BOT_TOKEN);
