const { Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'waifu',
    /**
     * @param { Message } message
     */
    async execute(client, message, args, wait, prefix) {
        try {
            const apiUrlSearch = 'https://api.waifu.im/search';
            const apiUrlTags = 'https://api.waifu.im/tags';

            const reply = await fetch(apiUrlTags);
            const tag = await reply.json();
            const tagType = await tag.versatile;

            function validTags(tag) {
                return tag === args[0];
            }

            const tages = tagType.find(validTags);

            /* Tags:
        'maid',
        'waifu',
        'marin-kitagawa',
        'mori-calliope',
        'raiden-shogun',
        'oppai',
        'selfies',
        'uniform'
        */

            if (args[0] === 'info') {
                return message.reply(
                    `> Sintaxis: **__${prefix}waifu <etiqueta>__**\n` +
                    '```' +
                    `${tagType[0]}\n` +
                    `${tagType.join('\n')}` +
                    '```',
                );
            } else if (args[0] !== tages || args[0] === '' || args[0] == undefined) {
                return message.reply(`Debes asignar una etiqueta valida. \nUsa: \`${prefix}waifu info\``);
            }

            await message.channel.send('Obteniendo imagen...');

            const params = {
                included_tags: `${tages}`,
                height: '>=2000',
            };

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
                    name: `${message.author.globalName} | Tag: ${tages}`,
                    iconURL: message.author.displayAvatarURL({ size: 64 })
                })
                .setTitle(`Solicitado por: ${message.author.username}`)
                .setDescription('URL: ' + urlLink)
                .setImage(urlImagen)
                .setColor(color)
                .setFooter({
                    text: `ID: ${idImg}`,
                })
                .setTimestamp();

            await message.channel.bulkDelete(1);
            await message.reply({ embeds: [embed] });
        } catch (e) {
            console.error('error a!waifu: ' + e);
        }
    },
};
