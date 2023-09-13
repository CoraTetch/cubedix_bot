const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, Events, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uwu')
        .setDescription('🎭 Transforma tu texto en una versión cute.'),
        /**
         * @param {ChatInputCommandInteraction} interaction
         */
    async execute(client, interaction, options) {
        const Text = new TextInputBuilder()
			.setCustomId('text')
			.setLabel("Ingresa el texto:")
			.setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('l / r → w | L / R → W')
            .setMinLength(1);

		const row = new ActionRowBuilder()
            .addComponents(Text);

        const modal = new ModalBuilder()
            .setCustomId('modal')
            .setTitle('Text to UwU')
            .setComponents(row)

        await interaction.showModal(modal);

        client.on(Events.InteractionCreate, async interaction => {

            if (!interaction.isModalSubmit()) return;

            const newText = interaction.fields.getTextInputValue('text').replace(/[lr]/g, 'w').replace(/[LR]/g, 'W');
            await interaction.reply({
                content: newText
            });
        });
    }
}