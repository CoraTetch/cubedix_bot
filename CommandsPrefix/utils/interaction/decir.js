const { Message, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'decir',
    alias: ['decir', 'say'],
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        if(!PermissionFlagsBits.MentionEveryone || !PermissionFlagsBits.SendMessages) return;

        const user = message.author.globalName;

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('button')
                    .setLabel(`${user}`)
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            )

        const msg = args.join(' ');
        await message.delete();
        await message.channel.send({
            content: msg,
            components: [row]
        });
    },
};
