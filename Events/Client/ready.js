const { ActivityType } = require('discord.js');
const mongoose = require('mongoose');
const { loadPrefix } = require('../../Handlers/prefixHandler');
const { loadSlash } = require('../../Handlers/slashHandler');
require('dotenv').config();

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await loadPrefix(client);
        await loadSlash(client);

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
        console.log(`Cliente ${client.user.username} iniciado`);
    },
};
