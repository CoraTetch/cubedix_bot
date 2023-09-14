const wait = require('node:timers/promises').setTimeout;
const RSTD = require('../../Schemas/regServerToDB');
require('dotenv').config();

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        try {
            if (message.author.bot) return;

            var prefix; 

            let data = await RSTD.findOne({
                guildId: message.guild.id,
                guildName: message.guild.name,
            });

            if (data === null) {
                prefix = process.env.PREFIX;
            } else {
                prefix = data.newPrefix;
            }

            if (message.content.startsWith(`@${client.user.id}`)) return message.reply(`> Prefix: \`${prefix}\``);

            if (!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            let cmd =
                client.prefix.get(command) ||
                client.commands.find(c => command.alias && cmd.alias.includes(command));

            if (!cmd) return;

            cmd.execute(client, message, args, wait, prefix);
        } catch (e) {
            console.log('Error messageCreate: ' + e);
        }
    },
};
