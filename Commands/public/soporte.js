const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('soporte')
        .setDescription('🟩 Link del servidor oficial de soporte.')

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    
    ,async execute(client, interaction, options) {

        const
        link = 'https://discord.gg/qf9Ch5hcNB',
        icon = 'https://cdn.discordapp.com/attachments/1146098464485281944/1146098464858579065/cortSug.png',
        username = interaction.user.globalName,
        usericon = interaction.user.displayAvatarURL({ size: 64 })
        ;

        const embed = new EmbedBuilder()
            .setAuthor({
                name: username,
                iconURL: usericon
            })
            .setTitle('Soporte CubeDix')
            .setURL(link)
            .setDescription(
                `Hola ${username}, Puedes entrar al servidor de soporte de **CubeDix** aqui:\n▱▰▱▰▱▰▱▰▱▰\n` + 
                `[Clic aquí o toca el título.](${link})`
            )
            .setThumbnail(icon);

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
}