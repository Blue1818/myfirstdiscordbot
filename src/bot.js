require('dotenv').config();


const { token1 } = process.env;
const Discord = require('discord.js');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
//client.colour = "";
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`); // ` <- instead of ' is so weird.
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter(file => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
//client.login(token1 || token2); //for 2 tokens
client.login(token1);
