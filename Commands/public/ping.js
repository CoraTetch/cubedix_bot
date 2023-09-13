const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('🟩 Latencia del bot.')

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    ,async execute(client, interaction, options) {
        interaction.reply({
            content: `> **__Ping:__** \`${client.ws.ping}ms\``,
            ephemeral: true
        });
    }
}