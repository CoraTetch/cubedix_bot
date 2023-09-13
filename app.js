const { Client, Collection, GatewayIntentBits, Partials, EmbedBuilder, WebhookClient } = require('discord.js');
const { ActivityType } = require('./node_modules/discord-api-types/v10');
const { loadEvents } = require('./Handlers/eventHandler');
require('dotenv').config();


const { Guilds, GuildMembers, GuildMessages, MessageContent, GuildMessageReactions, GuildVoiceStates } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel, Reaction } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent, GuildMessageReactions, GuildVoiceStates],
    partials: [User, Message, GuildMember, ThreadMember, Channel, Reaction],
});


client.events = new Collection();
client.commands = new Collection();
client.prefix = new Collection();


loadEvents(client);
require('./Handlers/anti-crash')(client); 


function activity() {
    client.user.setActivity(`/replica | cubedix.akiomae.com`, {
        type: ActivityType.Playing
    });
}
function activity2() {
    client.user.setActivity(`${client.guilds.cache.size} servers | cubedix.akiomae.com`, {
        type: ActivityType.Watching
    });
}

let contador = 0;

client
    .login(process.env.TOKEN2)
    .then(() => {
        console.log(`Cliente ${client.user.username} iniciado`);
        function incrementarContador() {
            contador++;

            switch (contador) {
                case 10:
                    activity2();
                    break;
                case 20:
                    activity();
                    contador = 0;
                    break;
            }
        }setInterval(incrementarContador, 1000);
    })
    .catch(err => console.error);