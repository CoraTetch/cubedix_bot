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

        if (mongoose.connect) console.log('CubedixDB ready\n');

        await loadPrefix(client);
        await loadSlash(client);

        console.log('Cliente iniciado.\n');
    },
};
