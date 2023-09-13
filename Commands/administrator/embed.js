const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, PermissionFlagsBits, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('🛡️ Crea un embed.')
        .addStringOption(option => option
            .setName('author')
            .setDescription('🛡️ Agrega el autor:')
    )
        .addStringOption(option => option
            .setName('author-icon')
            .setDescription('🛡️ Agrega el icono del autor:')
    )
        .addStringOption(option => option
            .setName('author-url')
            .setDescription('🛡️ Agrega la URL del autor:')
    )
        .addStringOption(option => option
            .setName('title')
            .setDescription('🛡️ Agrega el título:')
    )
        .addStringOption(option => option
            .setName('url')
            .setDescription('🛡️ Agrega la URL:')
    )
        .addStringOption(option => option
            .setName('description')
            .setDescription('🛡️ Agrega la descripción:')
    )
        .addAttachmentOption(option => option
            .setName('image')
            .setDescription('🛡️ Agrega la imagen:')
    )
        .addAttachmentOption(option => option
            .setName('thumbnail')
            .setDescription('🛡️ Agrega la miniatura:')
    )
        .addStringOption(option => option
            .setName('footer')
            .setDescription('🛡️ Agrega el pie de página:')
    )
        .addStringOption(option => option
            .setName('footer-icon')
            .setDescription('🛡️ Agrega el icono del pie de página:')
    )
        .addStringOption(option => option
            .setName('color')
            .setDescription('🛡️ Agrega el color:')
    )
        .addStringOption(option => option
            .setName('text-json')
            .setDescription('🛡️ Agregue el embed en formato JSON.')
    )

        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    ,async execute(client, interaction, options) {

        const
            autor =      options.getString('author'),
            autorIcon =  options.getString('author-icon'),
            autorUrl =   options.getString('author-url'),
            title =      options.getString('title'),
            url =        options.getString('url'),
            desc =       options.getString('description'),
            image =      options.getAttachment('image'),
            thumb =      options.getAttachment('thumbnail'),
            footer =     options.getString('footer'),
            footerIcon = options.getString('footer-icon'),
            color =      options.getString('color') || 0x000000,

            jsonE =       options.getString('text-json') || null
        ;

        interaction.reply({
            content: '🟩 Embed creado!',
            ephemeral: true
        });

        var e = jsonE;

        var embedse = await (e.embeds[0]) ? e.embeds[0]: e;

        if (jsonE !== null) {
            return await interaction.channel.send({
                embeds: [embedse]
            });
        }

        const embed = new EmbedBuilder()
            .setAuthor({
                name: autor,
                iconURL: autorIcon,
                url: autorUrl
            })
            .setTitle(title)
            .setURL(url)
            .setDescription(desc)
            .setImage(image.url)
            .setThumbnail(thumb.url)
            .setFooter({
                text: footer,
                iconURL: footerIcon
            })
            .setColor(color);

        let a = [autor, autorIcon, autorUrl, title, url, desc, image, thumb, footer, footerIcon];

        if (a == null || a == undefined) return interaction.reply('🟥 No se ha agregado un embed. :(');
        
        

        

        await interaction.channel.send({
            embeds: [embed]
        });
    }
};
