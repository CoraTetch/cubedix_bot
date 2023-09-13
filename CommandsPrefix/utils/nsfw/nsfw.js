const { Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'nsfw',
    /**
     * @param {Message} message
     */
    async execute(client, message, args, wait) {

        if (message.channel.nsfw == false) {
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: 'Hola ' + message.author.username
                })
                .setTitle('Canal no permitido')
                .setDescription('> Este comando solo se puede usar en canales con acceso a NSFW.\n\n> Pidele a un moderador que cree uno o ve a un canal con ese acceso.')
                .setTimestamp()
                .setColor(0xFF0000);

            return message.reply({
                embeds: [embed]
            });
        }

        const categ = args[0];

        const categoria = ['waifu', 'neko', 'trap', 'blowjob'];
        var eval = categoria.find(check);
        function check(a) {
           return a == categ;
        }
        if (!eval) return;

        const url = `https://api.waifu.pics/nsfw/${categ}`;
        const api = await fetch(url);
        const data = await api.json();
        const image = await data.url;

        const embed = new EmbedBuilder()
            .setAuthor({
                name: message.author.username,
                iconURL: message.author.displayAvatarURL({ size: 64 })
            })
            .setTitle(`**NSFW:** __${categ}__`)
            .setImage(image)
            .setColor(0xFF44FF)
            .setTimestamp();

        await message.reply({
            embeds: [embed]
        });

    }
}