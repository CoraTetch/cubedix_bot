const { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('🎭 Responde a tu pregunta en (si y no)')
        .addStringOption(option=>option
            .setName('pregunta')
            .setDescription('🎭 Haz una pregunta.')
            .setRequired(true)
        )

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    ,async execute(client, interaction, options) {
        const replys = [
            'Si',
            'No',
            'Tal ves',
            'Probablemente',
            'Probablemente no',
            'No sera posible',
            'Sería posible',
            'Tendría sentido',
            'No tendría sentido',
            'No vale la pena intentarlo',
            'Valdrá la pena intentarlo',
            'Simon',
            'Nunca',
            'idk',
            'Sin duda, claro que si',
            'Meh..',
            'Nop, pero lo mejor sería intentarlo'
        ];
        const msg = options.getString('pregunta');

        let random = Math.floor(Math.random() * (replys.length + 1));
        const thumb = 'https://cdn.discordapp.com/attachments/1133122455163109417/1133122550793244794/dandom.png';

        const embed = new EmbedBuilder()
            .setAuthor({
                name: '🎱 '+interaction.user.username,
                iconURL: interaction.user.displayAvatarURL({ size: 64 })
            })
            .setColor(0xFF00FF)
            .setThumbnail(thumb)
            .addFields({
                name: '🔳**Pregunta**',
                value: `\`${msg}\``
            },
            {
                name: '🔳 **Respuesta**',
                value: `\`${replys[random]}\``
            })
            .setTimestamp();

        interaction.reply({
            embeds: [embed]
        });
    }
}