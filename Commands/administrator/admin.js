const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');
const { PermissionFlagsBits } = require('../../node_modules/discord-api-types/v10');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('admin')
        .setDescription('🛡️ Comandos de administrador.')
        .addSubcommand(subcommand => subcommand
            .setName('ban')
            .setDescription('🛡️ Banea a un usuario del seridor.')
            .addUserOption(option => option
                .setName('usuario')
                .setDescription('🛡️ Selecciona el usuario:')
                .setRequired(true)
            )
            .addStringOption(option => option
                .setName('razon')
                .setDescription('🛡️ Ingrese la razón del baneo:')
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('kick')
            .setDescription('🛡️ Expulsa a un miembro del servidor')
            .addUserOption(option => option
                .setName('usuario')
                .setDescription('🛡️ Selecciona el usuario:')
                .setRequired(true)
            )
            .addStringOption(option => option
                .setName('razon')
                .setDescription('🛡️ Ingrese la razón del kickeo:')
            )
        )

        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(client, interaction, options) {
        const userBan = options.getUser('usuario');
        const razon = options.getString('razon') || 'No hay razón.';

        const member = await interaction.guild.members.fetch(userBan.id).catch(console.error);

        const subcommandName = options.getSubcommand();

        if (subcommandName === 'ban') {

            if (!PermissionFlagsBits.BanMembers) return;

            if (userBan.id === interaction.user.id)
                return interaction.reply({ content: '🟥 No puedes banearte a ti mismo.', ephemeral: true });
            if (userBan.id === client.user.id)
                return interaction.reply({ content: '🟥 No puedes banearme.', ephemeral: true });
            if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({ content: '🟥 No puedes banear a alguien con igual o mayor rango a tí.', ephemeral: true });

            if (!member.kickable)
                return interaction.reply({ content: '🟥 No puedo banear con mayor rango a mí.', ephemeral: true });

            await member.ban({ deleteMessageSeconds: 0, reason: razon }).catch(console.error);

            await interaction.reply({
                content: `🟩 Usuario <@${userBan.id}> - Baneado del servidor.\n🔳 Razon: ${razon}`
            });
        } 
        
        if (subcommandName === 'kick') {

            if (!PermissionFlagsBits.KickMembers) return;

            if (userBan.id === interaction.user.id)
                return interaction.reply({ content: '🟥 No puedes expulsarte a ti mismo.', ephemeral: true });
            if (userBan.id === client.user.id)
                return interaction.reply({ content: '🟥 No puedes expulsarme a mí.', ephemeral: true });
            if (member.roles.highest.position >= interaction.member.roles.highest.position)
                return interaction.reply({ content: '🟥 No puedes expulsar a alguien con igual o mayor rango a tí.', ephemeral: true });

            if (!member.kickable)
                return interaction.reply({ content: '🟥 No puedo expulsar con mayor rango a mí.', ephemeral: true });

            await member.kick(razon).catch(console.error);

            await interaction.reply({
                content: `🟩 Usuario <@${userBan.id}> - Kickeado del servidor.\n🔳 Razon: ${razon}`
            });
        }
    }
}