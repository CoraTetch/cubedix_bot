const { Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'avatar',
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        try {
            const usuario = message.mentions.members.first() || message.member;

            if (args[0] == null || args[0] == '') args[0] = `<@${message.author.id}>`;

            if (!args[0].startsWith('<@')) return message.reply('Debes etiquetar al usuario.');

            if (usuario) {
                const embed = new EmbedBuilder()
                    .setTitle(`Avatar de ${usuario.user.username}!`)
                    .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
                    .setColor(0xff00ff);

                await message.reply({ embeds: [embed] });
            } else {
                const embed = new EmbedBuilder()
                    .setTitle(`Avatar de ${message.author.username}!`)
                    .setImage(message.author.displayAvatarURL({ size: 1024, dynamic: true }))
                    .setColor(0xff00ff);

                await message.reply({ embeds: [embed] });
            }
        } catch (e) {
            console.error('Error a!avatar: ' + e);
        }
    },
};
