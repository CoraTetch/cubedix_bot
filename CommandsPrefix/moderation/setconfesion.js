const { Message, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const confession = require('../../Schemas/confesion');

module.exports = {
    name: 'setconfesion',
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        if(!PermissionFlagsBits.Administrator) return;

        const data = await confession.findOne({
            serverId: message.guild.id,
            serverName: message.guild.name
        });

        const channel = args[0];

        if (!data) {
            const newData = await confession.create({
                serverId: message.guild.id,
                serverName: message.guild.name,
                channel: channel
            });

            await message.reply('🟩 Se creó el canal correctamente');
        } else {
            const newData = await confession.updateOne({
                serverId: message.guild.id,
                serverName: message.guild.name,
                channel: channel
            });

            await message.reply('🟩 Se agregó el canal correctamente');
        }
    }
}