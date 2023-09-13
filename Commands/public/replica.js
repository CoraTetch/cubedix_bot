const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Replicate = require('replicate');

const key = "r8_Lcb4KLKl21WzWNrJCx8C4IvTvESGRtm2hZBWM";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('replica')
        .setDescription('🎭 Crea una imagen con IA.')
        .addStringOption(option => option
            .setName('sueño')
            .setDescription('🎭 ¿Qué has soñado hoy?')
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('tamaño')
            .setDescription('🎭 Seleccione el tamaño:')
            .addChoices(
                // 1:1
                { name: '1:1 - 384x384', value: '384x384' },
                { name: '1:1 - 512x512', value: '512x512' },
                { name: '1:1 - 1024x1024', value: '1024x1024' },

                //16:9
                { name: '16:9 - 512x384', value: '512x384' },
                { name: '16:9 - 1024x512', value: '1024x512' },
                { name: '16:9 - 2048x1024', value: '2048x1024' },

                // 9:16
                { name: '9:16 - 384x512', value: '384x512' },
                { name: '9:16 - 512x1024', value: '512x1024' },
                { name: '9:16 - 1024x2048', value: '1024x2048' }
                
            )

        )

    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    , async execute(client, interaction, options) {

        await interaction.deferReply();

        const Prompt = options.getString('sueño');
        const choice = options.getString('tamaño') || '512x512';

        const size = await choice.split('x');

        const Width = parseInt(size[0]),
            Height = parseInt(size[1]);

        const replicate = new Replicate({
            auth: key,
        });

        const model = "ai-forever/kandinsky-2.2:ea1addaab376f4dc227f5368bbd8eff901820fd1cc14ed8cad63b29249e9d463";
        const input = {
            prompt: Prompt,
            width: Width,
            height: Height,
            num_outputs: 1
        };
        const img = await replicate.run(model, {
            input
        });

        const embed = new EmbedBuilder()
            .setColor(0x00FF00)
            .setAuthor({
                    name: '🌃 '+interaction.user.username,
                    iconURL: interaction.user.displayAvatarURL({ size: 64 })
            })
            .setTitle(`**Imagine**`)
            .setDescription(`> **__Sueño:__** \`${Prompt}\`\n\n> **__Tamaño de imagen:__** \'${choice}\'`)
            .setImage(img[0]);

        await interaction.editReply({
            embeds: [embed]
        });
    }
}