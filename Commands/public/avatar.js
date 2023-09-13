const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('🎭 Muestra la imagen de un usuario.')
        .addUserOption(option => option.setName('usuario').setDescription('🎭 Selecciona el usuario:').setRequired(true)),

    /**
     * @param {ChatInputCommandInteraction} interaction
     */

    async execute(client, interaction, options) {
        const user = interaction.options.getUser('usuario');
        if (user) {
            const embed = new EmbedBuilder()
                .setTitle(`Avatar de ${user.username}!`)
                .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
                .setColor(0xff00ff);

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setTitle(`Avatar de ${interaction.user.username}!`)
                .setImage(interaction.user.displayAvatarURL({ size: 1024, dynamic: true }))
                .setColor(0xff00ff);

            await interaction.reply({ embeds: [embed] });
        }
    },
};