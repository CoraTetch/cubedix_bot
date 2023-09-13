const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const confession = require('../../Schemas/confesion');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('confesiones')
    .setDescription('🎭 Haz una confesión anónima.')
    .addStringOption(option=>option
        .setName('confesion')
        .setDescription('🎭 Ingresa tu confesión:')
        .setRequired(true)
    )
    .addBooleanOption(option=>option
        .setName('enviar_a_canal')
        .setDescription('🎭 Envía tu confesión al canal asignado.')
    ),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(client, interaction, options) {
        const 
        text = options.getString('confesion'),
        setChannelAsigned = options.getBoolean('enviar_a_canal') || false
        ;

        const dataSchema = await confession.findOne({
            serverId: interaction.guild.id,
            serverName: interaction.guild.name
        });
        if (!dataSchema)
        return interaction.reply({content: '🔳 No hay canal de confesiones agregado por un administrador.', ephemeral: true});

        const getChannel = interaction.guild.channels.cache.get(dataSchema.channel.replace(/[<#>]/g, ''));

        const
        white = 0xFFFFFF,
        gray = 0x888888,
        black = 0x000000,

        red = 0xFF0000,
        darkred = 0x880000,
        lightred = 0xFF8888,

        green = 0x00FF00,
        darkgreen = 0x008800,
        lightgreen = 0x88FF88,

        blue = 0x0000FF,
        darkblue = 0x000088,
        lightblue = 0x8888FF,

        purple = 0x8800FF,
        darkPurple = 0x440088,
        lightpurple = 0xcc88FF,

        cian = 0x00FFFF,
        darkcian = 0x008888,
        lightcian = 0x88FFFF,

        magenta = 0xFF00FF,
        darkmagenta = 0x880088,
        lightmagenta = 0xFF88FF,

        yellow = 0xFFFF00,
        darkyellow = 0x888800,
        lightyellow = 0xFFFF88,

        orange = 0xFF8800,
        darkorange = 884400,
        lightorange = 0xFFcc88
        ;

        const rgb = [
            white, gray, black,
            red, darkred, lightred,
            green, darkgreen, lightgreen,
            blue, darkblue, lightblue,
            purple, darkPurple, lightpurple,
            cian, darkcian, lightcian,
            magenta, darkmagenta, lightmagenta,
            yellow, darkyellow, lightyellow,
            orange, darkorange, lightorange
        ];

        const rand = Math.floor(Math.random() * 27);

        const embed = new EmbedBuilder()
        .setTitle('Confesión anónima')
        .setDescription(
            '\`\`\`\n' + 
            text + 
            '\n\`\`\`'
        )
        .setColor(rgb[rand])
        .setTimestamp();


        if (setChannelAsigned == true) {
            await getChannel.send({
                embeds: [embed]
            });
    
            await interaction.reply({
                content: '🟩 Se envió tu confesión anonimamente.',
                ephemeral: true
            });
        } else  {
            await interaction.channel.send({
                embeds: [embed]
            });
    
            await interaction.reply({
                content: '🟩 Se envió tu confesión anonimamente.',
                ephemeral: true
            });
        }
    }
}