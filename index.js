const Discord = require("discord.js");
const client = new Discord.Client();
var songactive = false
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;
const settings = require('./settings.json');
// Do not change anything in here
const version = require('./version.json');
const prefix = "jb!"
const expansion1 = true

function cat() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/cat.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function blocks() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/blocks.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function thirteen() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/13.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function chirp() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/chirp.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function far() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/far.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function mall() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/mall.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function mellohi() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/mellohi.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function stal() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/stal.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function strad() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/strad.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function ward() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/ward.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function wait() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/wait.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function eleven() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/11.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function sweden() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/sweden.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function alpha() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/alpha.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function dreiton() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/dreiton.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function key() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/key.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function haggstrom() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/haggstrom.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function clark() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/clark.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function taswell() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/taswell.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function mutation() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/mutation.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function warmth() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/warmth.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function boss() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/boss.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function minecraft() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/minecraft.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function danny() {
	songactive = true
	const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.play(require("path").join(__dirname, 'songs/danny.mp3'));
dispatcher.on('finish', () => {
voiceChannel.leave()
songactive = false;
});
	})
}

function skip() {
		const voiceChannel = client.channels.cache.get("INSERTCLIENTID");
	voiceChannel.join()
	.then(connection => {
	const dispatcher = connection.dispatcher.end();
});
}

client.on("ready", () => {
  console.log("Awaiting commands!");
  status = 'Release 1.6';
	client.user.setActivity(status, { type: 'PLAYING' })
      .then(presence => console.log(status))
      .catch(console.error);
	console.log("Status Set!");
});

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
 if (command === 'play') {
	 
	if (!args.length) {
		return message.channel.send(`Songs available: \nDiscs: Cat, Blocks, 13, 11, Chirp, Far, Mall, Mellohi, Stal, Strad, Wait, Ward.\nExpansion 1: Sweden, Alpha, Haggstrom, Dreiton, Key, Minecraft, Clark, Danny, Taswell, Mutation, Warmth.`);
	}
	
	else if (args[0] == "Cat") {
		if (songactive == false){
		message.channel.send(`✅ Playing Cat!`);
		cat();
			} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	} 
		else if (args[0] == "cat") {
					if (songactive == false){
		message.channel.send(`✅ Playing Cat!`);
		cat();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	} 
		else if (args[0] == "Blocks") {
					if (songactive == false){
		message.channel.send(`✅ Playing Blocks!`);
		blocks();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	} 
			else if (args[0] == "blocks") {
						if (songactive == false){
		message.channel.send(`✅ Playing Blocks!`);
		blocks();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	} 
			else if (args[0] == "13") {
						if (songactive == false){
		message.channel.send(`✅ Playing 13!`);
		thirteen();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	} 
			else if (args[0] == "chirp") {
						if (songactive == false){
		message.channel.send(`✅ Playing Chirp!`);
		chirp();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Chirp") {
						if (songactive == false){
		message.channel.send(`✅ Playing Chirp!`);
		chirp();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "far") {
						if (songactive == false){
		message.channel.send(`✅ Playing Far!`);
		far();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Far") {
						if (songactive == false){
		message.channel.send(`✅ Playing Far!`);
		far();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "mall") {
						if (songactive == false){
		message.channel.send(`✅ Playing Mall!`);
		mall();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Mall") {
						if (songactive == false){
		message.channel.send(`✅ Playing Mall!`);
		mall();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "mellohi") {
						if (songactive == false){
		message.channel.send(`✅ Playing Mellohi!`);
		mellohi();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Mellohi") {
						if (songactive == false){
		message.channel.send(`✅ Playing Mellohi!`);
		mellohi();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "stal") {
						if (songactive == false){
		message.channel.send(`✅ Playing Stal!`);
		stal();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Stal") {
						if (songactive == false){
		message.channel.send(`✅ Playing Stal!`);
		stal();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "strad") {
						if (songactive == false){
		message.channel.send(`✅ Playing Strad!`);
		strad();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Strad") {
						if (songactive == false){
		message.channel.send(`✅ Playing Strad!`);
		strad();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "ward") {
						if (songactive == false){
		message.channel.send(`✅ Playing Ward!`);
		ward();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Ward") {
						if (songactive == false){
		message.channel.send(`✅ Playing Ward!`);
		ward();
					} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "wait") {
						if (songactive == false){
		message.channel.send(`✅ Playing Wait!`);
		wait();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "Wait") {
						if (songactive == false){
		message.channel.send(`✅ Playing Wait!`);
		wait();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "11") {
						if (songactive == false){
		message.channel.send(`✅ Playing 11!`);
		eleven();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
	}
			else if (args[0] == "sweden") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Sweden!`);
		sweden();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
				else if (args[0] == "Sweden") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Sweden!`);
		sweden();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "alpha") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Alpha!`);
		alpha();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Alpha") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Alpha!`);
		alpha();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Key") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Key!`);
		key();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "key") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Key!`);
		key();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "haggstrom") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Haggstrom!`);
		haggstrom();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Haggstrom") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Haggstrom!`);
		haggstrom();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Dreiton") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Dreiton!`);
		dreiton();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "dreiton") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Dreiton!`);
		dreiton();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "minecraft") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Minecraft!`);
		minecraft();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Minecraft") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Minecraft!`);
		minecraft();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "clark") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Clark!`);
		clark();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Clark") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Clark!`);
		clark();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "danny") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Danny!`);
		danny();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Danny") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Danny!`);
		danny();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "taswell") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Taswell!`);
		taswell();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Taswell") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Taswell!`);
		taswell();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "mutation") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Mutation!`);
		mutation();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Mutation") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Mutation!`);
		mutation();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "warmth") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Warmth!`);
		warmth();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
					else if (args[0] == "Warmth") {
				if (expansion1 == true) {
						if (songactive == false){
		message.channel.send(`✅ Playing Warmth!`);
		warmth();
							} else {
		message.channel.send(`A song is currently active, please wait till it is over.`);
	}
				} else { 
				message.channel.send('Expansion 1 has been disabled by the bot owner.');
				}
	}
	} 
});

client.on("message", (message) => {
if (message.content.startsWith("jb!skip")) {
if (songactive == true){
		message.channel.send(`Skipped!`);
		skip()
					} else {
		message.channel.send(`There is nothing playing.`);
	}
	}
});


client.on("message", (message) => {
if (message.content.startsWith("jb!debugvar")) {
message.reply(songactive)
	}
});

client.on("message", (message) => {
if (message.content.startsWith("jb!version")) {
message.channel.send("```Version Menu " + version.menuversion + "\nVersion: " + version.version + "\nSource: " + version.source + "\nUpdated: " + version.updated + "```")
}
});

client.login(settings.token);
