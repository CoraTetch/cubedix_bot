const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('doname')
        .setDescription('🟩 Información para mi apoyo.'),

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction, options) {
        const embed = new EmbedBuilder()
            .setAuthor({
                    name: interaction.user.username,
                    iconURL: interaction.user.displayAvatarURL({ size: 64 })
            })
            .setDescription(
                `Hola ${interaction.user.username}, veo que quieres donarme,\n` +
                    ' y te doy las gracias por ese apoyo de tu parte,\n' +
                    'cada día mejorando más y ganarme ese apoyo.\n\n' +
                    'Aquí te dejo el enlaze para que puedas donarme.' +
                    '\n[**__Haz click aquí__**](https://patreon.com/cubedix)',
            )
            .setImage('https://cdn.discordapp.com/attachments/1133122455163109417/1133508891964088381/AuroraApoyo.png')
            .setColor(0xff0088);

        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
};