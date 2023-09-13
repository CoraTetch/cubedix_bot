const { ContextMenuCommandBuilder } = require(`@discordjs/builders`);
const { ApplicationCommandType } = require('discord-api-types/v9');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Banner')
        .setType(ApplicationCommandType.User)

    , async execute(client, interaction) {

        const 
        image = interaction.targetUser.bannerURL({ size: 1024, dynamic: true }),
        user = interaction.targetUser.globalName
        ;

        const embedError = new EmbedBuilder()
            .setColor(0xFF00FF)
            .setDescription(`El usuario ${user} no posee un banner.`);

        if (!image) {
            return interaction.reply({
                embeds: [embedError],
                ephemeral: true
            });
        }

        const embed = new EmbedBuilder()
            .setColor(0xFF44FF)
            .setTitle(`Banner de: ${user}`)
            .setImage(interaction.targetUser.bannerURL({ size: 1024, dynamic: true }));

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
}