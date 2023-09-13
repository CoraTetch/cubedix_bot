const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('decir')
        .setDescription('🎭 Escribe algo y el bot lo dirá.')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('🎭 Mensaje a decir:')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    /**
    * 
    * @param {ChatInputCommandInteraction} interaction 
    */

    async execute(client, interaction, options) {
        
        const message = options.getString('message');
        const user = interaction.user.globalName;

        if ((message.includes('@') || message.includes('<@')) && !PermissionFlagsBits.MentionEveryone) {
            interaction.reply({
                content: `🟨 Hey ${user}, se detectó mensaje con un ping, usa el comando con cuidado.`,
                ephemeral: true
            });
        } else if (message.includes('@everyone') && !PermissionFlagsBits.MentionEveryone) {
            return interaction.reply({
                content: `🛑¡ALTO ${user}!, no cuentas con los permisos necesarios.`,
                ephemeral: true
            });
        }

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('button')
                    .setLabel(`${user}`)
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            )

        await interaction.reply({
            content: 'Mensaje enviado.',
            ephemeral: true
        });

        await interaction.channel.send({
            content: message,
            components: [row]
        });
    }
};