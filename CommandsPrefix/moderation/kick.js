const { Message, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'kick',
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        if (!PermissionFlagsBits.KickMembers) return;

        const 
        userBan = args[0],
        razon = args.slice(0).join(' ') || 'No hay razón.'
        ;

        const member = await message.guild.members.fetch(userBan.id).catch(console.error);

        if (userBan.id === message.user.id)
            return message.reply({ content: '🟥 No puedes kickearte a ti mismo.'});

        if (userBan.id === client.user.id)
            return message.reply({ content: '🟥 No puedes kickearme.'});

        if (member.roles.highest.position >= message.member.roles.highest.position)
            return message.reply({ content: '🟥 No puedes kickear a alguien con igual o mayor rango a tí.'});

        if (!member.kickable)
            return message.reply({ content: '🟥 No puedo kickear con mayor rango a mí.'});

        await member.kick({ deleteMessageSeconds: 0, reason: razon }).catch(console.error);

        await message.reply({
            content: `🟩 Usuario <@${userBan.id}> - Kickeado del servidor.\n🔳 Razon: ${razon}`
        });

    }
}