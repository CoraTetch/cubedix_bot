const { ContextMenuCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require(`@discordjs/builders`);
const { ApplicationCommandType, ButtonStyle } = require('discord-api-types/v9');
const { ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Perfil')
        .setType(ApplicationCommandType.User)

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    , async execute(client, interaction) {
        const thumb = interaction.targetUser.displayAvatarURL({ size: 1024 }),
            image = interaction.targetUser.bannerURL({ format: 'png', size: 1024 });

        const fetch = new Date(interaction.targetUser.createdTimestamp);

        const member = interaction.guild.members.cache.get(interaction.targetUser.id),
        nickname = interaction.targetUser.globalName,
        username = interaction.targetUser.username
        ;

        const 
        iconUser = new ButtonBuilder()
            .setCustomId('avatar')
            .setLabel('🔳 Avatar')
            .setStyle(ButtonStyle.Secondary),

        bannerUser = new ButtonBuilder()
            .setCustomId('banner')
            .setLabel('🌆 Banner')
            .setStyle(ButtonStyle.Secondary)
        ;
        if (!interaction.targetUser.banner) bannerUser.setDisabled(true);

        if (!interaction.targetUser.avatar) iconUser.setDisabled(true);


        const row = new ActionRowBuilder()
            .addComponents(iconUser, bannerUser);

        const embed = new EmbedBuilder()
            .setTitle(`${nickname}`)
            .setDescription(
                `> **__ID:__** \n\`${interaction.targetUser.id}\`\n▰▱▰▱▰▱▰▱▰▱\n` +
                `> **__Usuario:__** \n\`${nickname}\`\n▰▱▰▱▰▱▰▱▰▱\n` +
                `> **__Nombre:__** \n\`${username}\`\n▰▱▰▱▰▱▰▱▰▱\n` +
                `> **__En Discord:__** \n\`${fetch.getDate() + '/' + fetch.getMonth()+ '/' + fetch.getFullYear()}\`\n`
            )
            .setThumbnail(thumb);

        const embedIconUser = new EmbedBuilder()
            .setTitle(`Avatar de ${nickname}`)
            .setImage(thumb);

        const embedBannerUser = new EmbedBuilder()
            .setTitle(`Banner de ${nickname}`)
            .setImage(image);

        const res = await interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        });

        const coll = await res.awaitMessageComponent();

        if (coll.customId === 'avatar') {
            return interaction.followUp({
                embeds: [embedIconUser],
                ephemeral: true
            });
        }

        if (coll.customId === 'banner') {
            return interaction.followUp({
                embeds: [embedBannerUser],
                ephemeral: true
            });
        }
    }
}