const { Message, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: 'servidor',
    alias: ['server', 'servidor'],
    /**
     * @param {Message} message
     */
    async execute(client, message, args, wait, prefix) {
        try {
            // nombre del servidor
            const serverName = message.guild.name;

            // ID del servidor
            const GUILD_ID = message.guild.id;

            // fecha de creacion del servidor
            const server = message.guild;
            const createdAt = new Date(server.createdAt);

            //obtener mes
            const mesNum = createdAt.getMonth() - 1;
            const mesMon = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
            ];
            mes = mesMon[mesNum];

            if (args[0] === null || args[0] === undefined) {
                await message.reply(
                    `Sintaxis: **__${prefix}server <etiqueta>__**\n\' + \'Etiquetas (actualmente):\n\`\`\`icon \nbanner \ninfo\`\`\``,
                );
            }

            if (args[0] === 'icon') {
                if (message.guild.iconURL() === null) {
                    await message.reply('El servidor no cuenta con un icono.');
                    await wait(5000);
                    message.channel.bulkDelete(1);
                    return;
                }

                const embed = new EmbedBuilder()
                    .setAuthor({
                        name: message.author.globalName,
                        iconURL: message.author.displayAvatarURL({ size: 64 })
                    })
                    .setTitle(`Icono de: ${serverName}`)
                    .setImage(message.guild.iconURL({ size: 1024, dynamic: true }))
                    .setColor(0xffffff);

                message.reply({ embeds: [embed] });
            } else if (args[0] === 'banner') {
                if (message.guild.bannerURL() === null) {
                    await message.reply('El servidor no cuenta con un banner.');
                    await wait(5000);
                    message.channel.bulkDelete(1);
                    return;
                }

                const embed = new EmbedBuilder()
                    .setAuthor({
                        name: message.author.globalName,
                        iconURL: message.author.displayAvatarURL({ size: 64 })
                    })
                    .setTitle(`Banner de: ${serverName}`)
                    .setImage(message.guild.bannerURL({ size: 1024, dynamic: true }))
                    .setColor(0xffffff);

                message.reply({ embeds: [embed] });
            } else if (args[0] === 'info') {
                const embed = new EmbedBuilder()
                    .setAuthor({
                        name: message.author.globalName,
                        iconURL: message.author.displayAvatarURL({ size: 64 })
                    })
                    .setThumbnail(message.guild.iconURL({ size: 512, dynamic: true }))
                    .addFields({
                        name: '🤴 **Dueño:** 🤴',
                        value: '> ' + `<@${message.guild.ownerId}>`,
                        inline: true,
                    })
                    .addFields({
                        name: '🆔 **Server ID:** 🆔',
                        value: '> ' + message.guild.id,
                        inline: true,
                    })
                    .addFields({
                        name: '📅 **Fecha creación:** 📅',
                        value: '> ' + createdAt.getDate() + ' ' + mes + ' ' + createdAt.getFullYear(),
                        inline: true,
                    })
                    .addFields({
                        name: `💬 **Canales:** 💬`,
                        value: '> ' + message.guild.channels.cache.size,
                        inline: true,
                    })
                    .addFields({
                        name: '🟢 **Roles:** 🟢',
                        value: '> ' + message.guild.roles.cache.size,
                        inline: true,
                    })
                    .addFields({
                        name: '👤 **Miembros:** 👤',
                        value: '> ' + message.guild.memberCount,
                        inline: true,
                    })
                    .addFields({
                        name: '🔼 **Mejoras:** 🔼',
                        value: '> ' + message.guild.premiumTier,
                        inline: true,
                    })
                    .setColor(0xffffff);

                message.reply({ embeds: [embed] });
            }
        } catch (e) {
            console.error('Error a!server: ' + e);
        }
    },
};
