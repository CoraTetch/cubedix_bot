const { ContextMenuCommandBuilder } = require(`@discordjs/builders`);
const { ApplicationCommandType } = require('discord-api-types/v9');
const { ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('ID')
        .setType(ApplicationCommandType.User),

    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(client, interaction) {
        interaction.reply({
            content: '> \`ID:\` ' + interaction.targetUser.id,
            ephemeral: true
        });
    }
}