const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('🎭 Muestra una imagen Anime.')
        .addStringOption(option => option
            .setName('etiqueta')
            .setDescription('🎭 Selecciona una etiqueta:')
            .setRequired(true)
            .addChoices(
                { name: 'Maid', value: 'maid' },
                { name: 'Waifu', value: 'waifu' },
                { name: 'Marin Kitagawa', value: 'marin-kitagawa' },
                { name: 'Mori Calliope', value: 'mori-calliope' },
                { name: 'Raiden Shogun', value: 'raiden-shogun' },
                { name: 'Oppai', value: 'oppai' },
                { name: 'Selfies', value: 'selfies' },
                { name: 'Uniform', value: 'uniform' },
            )
        ),

    /**
    * 
    * @param {ChatInputCommandInteraction} interaction 
    */

    async execute(client, interaction, options) {
        const getTag = options.getString('etiqueta');

        const apiUrlSearch = 'https://api.waifu.im/search';
        const apiUrlTags = 'https://api.waifu.im/tags';


        const reply = await fetch(apiUrlTags);
        const tag = await reply.json();
        const tagType = await tag.versatile;
        
        function validTags(tag) {
            return tag === getTag;
        }

        const tages = tagType.find(validTags);

        const params = {
            included_tags: `${tages}`,
            height: '>=2000'
        }

        const queryParams = new URLSearchParams(params);
        const requestUrl = `${apiUrlSearch}?${queryParams}`;

        const llamadaApi = await fetch(requestUrl);
        const data = await llamadaApi.json();

        const urlImagen = await data.images[0].url;
        const color = await data.images[0].dominant_color;
        const idImg = await data.images[0].image_id;
        const urlLink = await data.images[0].source;


        const embed = new EmbedBuilder()
            .setAuthor({
                    name: interaction.user.globalName,
                    iconURL: interaction.user.displayAvatarURL({ size: 64 })
            })
            .setTitle(`Solicitado por: ${interaction.user.username}`)
            .setDescription('URL: ' + urlLink)
            .setImage(urlImagen)
            .setColor(color)
            .setFooter({
                text: `ID: ${idImg}`
            })
            .setTimestamp();

        
        try {
            await interaction.reply({embeds: [embed]});
        } catch (e) {
            console.error('error: ' + e);
        }
    },
};