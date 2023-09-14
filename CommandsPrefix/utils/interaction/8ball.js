const { Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: '8ball',
    /**
     * @param {Message} message
     */
    async execute(client, message, args, wait, prefix) {
        try {
            const replys = [
                'Si',
                'No',
                'Tal ves',
                'Probablemente',
                'Probablemente no',
                'No sera posible',
                'Sería posible',
                'Tendría sentido',
                'No tendría sentido',
                'No vale la pena intentarlo',
                'Valdrá la pena intentarlo',
                'Simon',
                'Nunca',
                'idk',
                'Sin duda, claro que si',
                'Meh..',
                'Nop, pero lo mejor sería intentarlo'
            ];

            const msg = args.join(' ');

            
            if (args[0] === 'info' || args[0] === undefined) {
                return message.reply(`Sintaxis: **__${prefix}8ball <pregunta>__**`);
            }
            
            if (!msg.endsWith('?')) return message.reply('Tu mensaje debe contener un \'?\' al final.');

            //variable random
            let random = Math.floor(Math.random() * (replys.length + 1));

            const ball = 'https://cdn.discordapp.com/attachments/1133122455163109417/1133122550793244794/dandom.png';

            const embed = new EmbedBuilder()
                .setAuthor({
                    name: message.author.globalName,
                    iconURL: message.author.displayAvatarURL({ size: 64 })
                })
                .setThumbnail(ball)
                .addFields({
                    name: 'Pregunta:',
                    value: `${msg}`,
                })
                .addFields({
                    name: 'Respuesta:',
                    value: `${replys[random]}`,
                })
                .setColor(0x440000)
                .setTimestamp();

            message.reply({
                embeds: [embed]
            });
        } catch (e) {
            console.error('Error a!8ball: ' + e);
        }
    },
};
