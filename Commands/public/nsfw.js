const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nsfw')
        .setDescription('🎭 Mira imágenes cachondas animé. 👀')
        .setNSFW(true)
        .addStringOption(option => option
            .setName('categoria')
            .setDescription('🎭 ¿Qué quieres ver? 👀')
            .addChoices(
                { name: 'Waifu', value: 'waifu' },
                { name: 'Neko', value: 'neko' },
                { name: 'Trap', value: 'trap' },
                { name: 'Blowjob', value: 'blowjob' }
        )
            .setRequired(true)
        )
    
    /**
     * @param {ChatInputCommandInteraction} interaction
     */

    , async execute(client, interaction, options) {

        if (interaction.channel.nsfw == false) {
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: 'Hola ' + interaction.user.username
                })
                .setTitle('Canal no permitido')
                .setDescription('> Este comando solo se puede usar en canales con acceso a NSFW.\n\n> Pidele a un moderador que cree uno o ve a un canal con ese acceso.')
                .setTimestamp()
                .setColor(0xFF0000);

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        }

        const categ = options.getString('categoria');

        const url = `https://api.waifu.pics/nsfw/${categ}`;

        const api = await fetch(url);
        const data = await api.json();
        const image = await data.url;

        const embed = new EmbedBuilder()
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL({ size: 64 })
            })
            .setTitle(`**NSFW:** __${categ}__`)
            .setImage(image)
            .setColor(0xFF44FF)
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });

    }
}