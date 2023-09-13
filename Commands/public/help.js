const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('🅾️ Informacion de CubeDix'),

    /**
    * 
    * @param {ChatInputCommandInteraction} interaction 
    */

    async execute(client, interaction, options) {
        //assets
        const logo = 'https://cdn.discordapp.com/attachments/1133122455163109417/1142189687407132722/webAurora.png';

        //Embed 1
        const embed = new EmbedBuilder()
            .setColor(0xff00ff)
            .setAuthor({
                    name: '🔽 '+interaction.user.username,
                    iconURL: interaction.user.displayAvatarURL({ size: 64 })
                })
            .setTitle('🔽 Ayuda')
            .setURL('https://cubedix.akiomae.com/')
            .setDescription(`Hola ${interaction.user.username},\naquí tienes mi web oficial de mi documentación.\n[Haz click aquí o toca el título.](https://aurora.akiomae.com/)`)
            .setImage(logo);

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};