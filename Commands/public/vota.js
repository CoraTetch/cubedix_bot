const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vota')
        .setDescription('🟩 Considera un momento para votar por mi.'),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */

    async execute(client, interaction, options) {
        const
        username = interaction.user.globalName,
        avatar64 = interaction.user.displayAvatarURL({ size: 64 }),
        avatarXL = interaction.user.displayAvatarURL({ size: 512 }),

        topgg = 'https://top.gg/bot/1123401179142045727?s=02209a61a8247',
        DBL = 'https://discordbotlist.com/bots/cubedix/upvote',
        DiscordList = 'https://discordlist.gg/bot/1123401179142045727',
        image = 'https://cdn.discordapp.com/attachments/1133122455163109417/1143255878955446313/Noche.png',

        linkServer = 'https://discord.gg/6KBDQhXGdj'
        ;


        const embed = new EmbedBuilder()
            .setAuthor({
                name: username,
                iconURL: avatar64
            })
            .setTitle(`✅ Votaciones`)
            .setURL(linkServer)
            .setDescription(
                `¡Muchas gracias por considerar votar ${username}!\n` +
                'Esta pequeña ayuda hace crecer el bot mucho más.\n\n' +

                'Aquí tienes los links en donde puedes ír a votar al bot:\n\n' +

                `> Top.gg: [__Haz clic aquí__](${topgg})\n` +
                `> (DBL) DiscordBotList: [__Haz click aquí__](${DBL})\n\n` +
                `> (DL) DiscordList: [__Haz click aquí__](${DiscordList})\n\n` +

                `Espero tu voto con mucha emoción ${username}!`
            )
            .setImage(image)
            .setThumbnail(avatarXL)
            .setFooter({
                text: 'Haz click en el título para ír al servidor oficiál.'
            })
            .setColor(0xFF00FF);

        interaction.reply({
            embeds: [embed]
        });

    }
}