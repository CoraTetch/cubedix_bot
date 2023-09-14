const { Message, PermissionsBitField } = require('discord.js');
const RSTD = require('../../Schemas/regServerToDB');

module.exports = {
    name: 'prefix',
    /**
     * @param {Message} message
     */
    async execute(client, message, args, wait, prefix) {
        try {
            if (!message.content.startsWith(prefix)) return;
            if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
                await message.channel.send('❌');
                return;
            }

            if (args[0] !== 'set' || args[0] === undefined) {
                message.reply('Sintaxis: **__a!prefix set <nuevo prefijo>__**');
                return;
            }

            let newPrefix = args[1];

            if (args[0] === 'set' && !newPrefix) {
                await message.reply('por favor, añade el nuevo prefijo.');
                await wait(3000);
                await message.channel.bulkDelete(1);
                return;
            }

            if (newPrefix < 10) {
                await message.channel.send('el nuevo prefijo no puede contener mas de **10** caracteres.');
                await wait(5000);
                await message.channel.bulkDelete(1);
                return;
            }

            let data;

            if (newPrefix === prefix) {
                await message.channel.send('Intentas agregar el mismo prefijo.');
                await wait(3000);
                await message.channel.bulkDelete(1);
                return;
            }

            data = await RSTD.find();

            if (data.guildId == message.guild.id) {
                const newData = await RSTD.updateOne({
                    guildId: message.guild.id,
                    guildName: message.guild.name,
                    newPrefix: newPrefix,
                });
                await message.channel.send(`**${newPrefix}** actualizado ✅`);
            } else if (data === null || data === undefined || data.guildId !== message.guild.id) {
                const newData = await RSTD.create({
                    guildId: message.guild.id,
                    guildName: message.guild.name,
                    newPrefix: newPrefix,
                });
                await message.channel.send(`**${newPrefix}** agregado ✅`);
            }
        } catch (e) {
            console.error('Error prefix: ' + e);
        }
    },
};
