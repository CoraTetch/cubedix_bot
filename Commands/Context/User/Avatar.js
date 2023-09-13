const { ContextMenuCommandBuilder } = require(`@discordjs/builders`);
const { ApplicationCommandType } = require('discord-api-types/v9');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Avatar')
        .setType(ApplicationCommandType.User)

    , async execute(client, interaction) {

        const 
        image = interaction.targetUser.displayAvatarURL({ size: 1024, dynamic: true }),
        user = interaction.targetUser.globalName
        ;

        const embedError = new EmbedBuilder()
            .setColor(0xFF00FF)
            .setDescription(`El usuario ${user} no posee un avatar.`);

        if (!image) {
            return interaction.reply({
                embeds: [embedError],
                ephemeral: true
            });
        }

        const embed = new EmbedBuilder()
            .setColor(0xFF44FF)
            .setTitle(`Avatar de: ${interaction.targetUser.globalName}`)
            .setImage(image);

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
}