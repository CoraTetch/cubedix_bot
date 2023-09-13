const { ChatInputCommandInteraction, Events, ActionRowBuilder, SlashCommandBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calculo')
        .setDescription('🎭 Calculadora de aurora'),

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction, options) {
        const calc = 'https://cdn.discordapp.com/attachments/1133122455163109417/1133122550348656650/Calculator.png';

        //Agregar modal
        const modal = new ModalBuilder()
            .setCustomId('calcModal')
            .setTitle('Calculadora de CubeDix');

        //agregar input al modal
        const impresser = new TextInputBuilder()
            .setCustomId('console')
            .setLabel("Ingrese el numeral:")
            .setMaxLength(500)
            .setPlaceholder('Valores permitidos: +, -, /, *')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        //crear row
        const row = new ActionRowBuilder()
            .addComponents(impresser);

        modal.addComponents(row);

        await interaction.showModal(modal);

        client.on(Events.InteractionCreate,async interaction => {
            if (!interaction.isModalSubmit()) return;

            //calc
            const consola = interaction.fields.getTextInputValue('console');

            res = eval(consola
                .replace(/,/g, '.')

                .replace(/sqrt/g, 'Math.sqrt')
                .replace(/ceil/g, 'Math.ceil')
                .replace(/max/g, 'Math.max')
                .replace(/min/g, 'Math.min')
                .replace(/absolute/g, 'Math.abs').replace(/abs/g, 'Math.abs')
                .replace(/round/g, 'Math.round')
                .replace(/floor/g, 'Math.floor')
                .replace(/truncate/g, 'Math.trunc').replace(/trunc/g, 'Math.trunc')
            );
            
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: '🔢 '+interaction.user.username,
                    iconURL: interaction.user.displayAvatarURL({ size: 64 })
                })
                .setTitle('Calculadora')
                .setDescription(
                    `> Entrada: ${consola} \n\n` +
                    `> Salida: ${res}`
                )
                .setThumbnail(calc)
                .setColor(0xFF00FF)

            await interaction.reply({ embeds: [embed] });
        });
    }
}