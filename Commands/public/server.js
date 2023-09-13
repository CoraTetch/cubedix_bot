const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('🟩 muestra la información del servidor actual')
        .addStringOption(option =>option
            .setName('etiqueta')
            .setDescription('🟩 Selecciona una etiqueta:')
            .setRequired(true)
            .addChoices(
                { name: 'Info', value: 'info' },
                { name: 'Icon', value: 'icon' },
                { name: 'Banner', value: 'banner' },
            ),
        ),
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction, options) {
        const tag = options.getString('etiqueta');

        // nombre del servidor
        const serverName = interaction.guild.name;

        // ID del servidor
        const GUILD_ID = interaction.guild.id;

        // fecha de creacion del servidor
        const server = interaction.guild;
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

        if (tag === 'icon') {
            if (interaction.guild.iconURL() === null) {
                await interaction.reply({
                    content: 'El servidor no cuenta con un icono.',
                    ephemeral: true,
                });
                return;
            }
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: message.author.globalName,
                    iconURL: message.author.displayAvatarURL({ size: 64 })
                })
                .setTitle(`Icono de: ${serverName}`)
                .setImage(interaction.guild.iconURL({ size: 1024, dynamic: true }))
                .setColor(0xffffff);

            interaction.reply({ embeds: [embed] });
        } else if (tag === 'banner') {
            if (interaction.guild.bannerURL() === null) {
                await interaction.reply({
                    content: 'El servidor no cuenta con un banner.',
                    ephemeral: true,
                });
                return;
            }

            const embed = new EmbedBuilder()
                .setAuthor({
                    name: message.author.globalName,
                    iconURL: message.author.displayAvatarURL({ size: 64 })
                })
                .setTitle(`Banner de: ${serverName}`)
                .setImage(interaction.guild.bannerURL({ size: 1024, dynamic: true }))
                .setColor(0xffffff);

            interaction.reply({ embeds: [embed] });
        } else if (tag === 'info') {
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: message.author.globalName,
                    iconURL: message.author.displayAvatarURL({ size: 64 })
                })
                .setThumbnail(interaction.guild.iconURL({ size: 512, dynamic: true }))
                .addFields({
                    name: '🤴 **Dueño:** 🤴',
                    value: '> ' + `<@${interaction.guild.ownerId}>`,
                    inline: true,
                })
                .addFields({
                    name: '🆔 **Server ID:** 🆔',
                    value: '> ' + interaction.guild.id,
                    inline: true,
                })
                .addFields({
                    name: '📅 **Fecha creación:** 📅',
                    value: '> ' + createdAt.getDate() + ' ' + mes + ' ' + createdAt.getFullYear(),
                    inline: true,
                })
                .addFields({
                    name: `💬 **Canales:** 💬`,
                    value: '> ' + interaction.guild.channels.cache.size,
                    inline: true,
                })
                .addFields({
                    name: '🟢 **Roles:** 🟢',
                    value: '> ' + interaction.guild.roles.cache.size,
                    inline: true,
                })
                .addFields({
                    name: '👤 **Miembros:** 👤',
                    value: '> ' + interaction.guild.memberCount,
                    inline: true,
                })
                .addFields({
                    name: '🔼 **Mejoras:** 🔼',
                    value: '> ' + interaction.guild.premiumTier,
                    inline: true,
                })
                .setColor(0xffffff);

            interaction.reply({ embeds: [embed] });
        }
    },
};