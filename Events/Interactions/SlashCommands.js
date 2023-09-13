const { ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
        if (!(interaction.isChatInputCommand() || interaction.isMessageContextMenuCommand() || interaction.isUserContextMenuCommand())) return;

        const { options } = interaction;

        const command = client.commands.get(interaction.commandName);
        if (!command)
        return interaction.reply({
            content: 'El comando está desactualizado.',
            ephemeral: true
        });

        if (command.developer && interaction.user.id !== '1015852332266815559')
        return interaction.reply({
            content: 'El comando es para el desarrollador.',
            ephemeral: true
        });

        command.execute(client, interaction, options);
    }
}