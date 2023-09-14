const { Message, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'help',
    alias: ['help', 'ayuda'],
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        try {
        //assets
        const logo = 'https://cdn.discordapp.com/attachments/1133122455163109417/1142189687407132722/webAurora.png';

        //Embed 1
        const embed = new EmbedBuilder()
            .setColor(0xff00ff)
            .setAuthor({
                name: message.author.globalName,
                iconURl: message.author.displayAvatarURL({ size: 64 })
            })
            .setTitle('🔽 Ayuda')
            .setURL('https://cubedix.akiomae.com/')
            .setDescription(`Hola ${message.author.globalName},\naquí tienes mi web oficial de mi documentación.\n[Haz click aquí o toca el título.](https://aurora.akiomae.com/)`)
            .setImage(logo);

        await message.update({
            embeds: [embed]
        });

        } catch (e) {
            console.error('Error a!help: ' + e);
        }
    },
};
