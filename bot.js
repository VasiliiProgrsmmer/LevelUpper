const RichEmbed = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

var prefix = "lev!"
let UserData = JSON.parse(fs.readFileSync("UserData.json", "utf8"));
client.on("ready", () => {
  console.log("Ready");
  client.user.setPresence({ game: { name: 'Хентай', type: 0 } });
});


client.on('message', message =>{
	if(!!message.guild){
	if(message.author === client.user) message.delete();
	let mGuild = message.guild;
	let sender = message.author;
	if(!UserData[sender.id + message.guild.id]) UserData[sender.id + message.guild.id] = {};
	if(!UserData[sender.id + message.guild.id].money) UserData[sender.id + message.guild.id].money = 0;
	if(!UserData[sender.id + message.guild.id].appedSatan) UserData[sender.id + message.guild.id].appedSatan = false;
	if(!UserData[sender.id + message.guild.id].appedAnime) UserData[sender.id + message.guild.id].appedAnime = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedVal2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedAnime2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedSatan2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedActiv = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedActiv2 = false;
	if(!UserData[sender.id + message.guild.id].appedVal) UserData[sender.id + message.guild.id].appedVal = false;
	
	const laMember = message.guild.member(message.author);
	
	if(UserData[sender.id + message.guild.id].appedSatan === false){
		if (message.guild.member(message.author).roles.find('id' , '527101457007247372')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedSatan = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedAnime === false){
		if (message.guild.member(message.author).roles.find('id' , '527105592087674880')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedAnime = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedVal === false){
		if (message.guild.member(message.author).roles.find('id' , '527112341628780555')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedVal = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedActiv === false){
		if (message.guild.member(message.author).roles.find('id' , '527915620369563668')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedActiv = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedSatan2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527227720279654409')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedSatan2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedAnime2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527420158906597378')){
			UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedAnime2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedVal2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527420175931408384')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedVal2 = true;
		}
	}
	if(UserData[sender.id + message.guild.id].appedActiv2 === false){
		if (message.guild.member(message.author).roles.find('id' , '527915919599468554')){
		UserData[sender.id + message.guild.id].money += 1;
			UserData[sender.id + message.guild.id].appedActiv2 = true;
		}
	}
	fs.writeFile("UserData.json", JSON.stringify(UserData), (err) =>{
	if (err) console.error (err);
	});
	
	
	
	if(message.content.startsWith(prefix + 'balance')){
        sender.send("Ваш баланс уровней:" + UserData[sender.id + message.guild.id].money);
		message.delete();
		};
	if(message.content.startsWith(prefix + 'shop')){
		sender.send("1.Ньюфаг - 3 левела");
		message.delete();
		};
	if(message.content.startsWith(prefix + 'buy 1')){
		if(UserData[sender.id + message.guild.id].money >= 3){
			message.member.addRole('527113461617000448');
			UserData[sender.id + message.guild.id].money -= 3;
			message.author.send("Теперь Вы ньюфаг!!!");
			message.delete();
		}else{
			message.author.send("Ти нищий кролб");
			message.delete();
		};
		};
		if(message.content.startsWith(prefix + 'buy 2')){
		if(UserData[sender.id + message.guild.id].money >= 10){
			message.member.addRole('527113461617000448');
			UserData[sender.id + message.guild.id].money -= 10;
			message.author.send("Теперь Вы ньюфаг!!!");
			message.delete();
		}else{
			message.author.send("Ти нищий кролб");
			message.delete();
		};
		};
		if(!message.guild){
		        if(!(message.content.startsWith('Ти нищий кролб') || message.content.startsWith('1.Ньюфаг - 3 левела') || message.content.startsWith("Теперь Вы ньюфаг!!!"))){
				message.delete();
			}	
		}
	};
});

client.login(process.env.BOT_TOKEN);
