const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('act')
        .setDescription('🎭 Haz una interacción con usted o con un usuario.')
        .addSubcommand(subcommand=>subcommand
            .setName('sorry')
            .setDescription('🎭 Pide perdón.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('stare')
            .setDescription('🎭 Mira fijamente.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('stop')
            .setDescription('🎭 Detente.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('surprised')
            .setDescription('🎭 Sorprendeme!.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sweat')
            .setDescription('🎭 Ponte a sudar.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('thumbsup')
            .setDescription('🎭 Da un pulgar hacia arriba.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('tickle')
            .setDescription('🎭 Dale cosquillas a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('tired')
            .setDescription('🎭 Cansado.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('wave')
            .setDescription('🎭 Dale un saludo a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('wink')
            .setDescription('🎭 Haz un guiño.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('yawn')
            .setDescription('🎭 Da un bostezo.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('yay')
            .setDescription('🎭 Haz una pequeña celebración.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('yes')
            .setDescription('🎭 Di SI.')
        ),
        /**
         * @param {ChatInputCommandInteraction} interaction
         */
    async execute(client, interaction, options) {
        //obtener sub-comando y parametros
        const SubcommandName = options.getSubcommand();
        const usuario = options.getUser('usuario');

        /////////////////////////////////

        //partes de URL
        let 
        U = `https://api.otakugifs.xyz/gif?reaction=`,
        R,
        L = `&format=gif`
        ;

        /////////////////////////////////

        //Nombre y avatar {64} del autor
        const
        username = interaction.user.globalName,
        usericon = interaction.user.displayAvatarURL({ size: 64, dynamic: true })
        ;

        /////////////////////////////////

        const emoji = [
            '😃',
            '😍',
            '😘',
            '🥰',
            '😗',
            '😎',
            '😚',
            '😏',
            '😮',
            '🥵',
            '😳',
            '🤪',
            '🥺',
            '❤️',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🤎',
            '🖤',
            '🤍',
            '❤️‍🔥',
            '❣️',
            '💕',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💦',
            '💥',
            '✅'
        ];

        const rand = Math.round(Math.random() * emoji.length);

        /////////////////////////////////

        const embed = new EmbedBuilder()
            .setAuthor({
                name: username,
                iconURL: usericon
            })
            .setColor(0xFF88FF);

        //comandos

        //interaccion con otro usuario
        switch (SubcommandName) {
            case 'tickle': {
                //tipo
                R = 'tickle';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Cosquillas ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Le dá cosquillas a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'tired': {
                //tipo
                R = 'tired';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Cansado ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está cansad@.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'wave': {
                //tipo
                R = 'wave';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Saludo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está saludando a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (SubcommandName) {
            case 'sorry': {
                //tipo
                R = 'sorry';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Perdoname ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Pide perdón.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'stare': {
                //tipo
                R = 'stare';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Mirada fija ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está mirando fijamente.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'stop': {
                //tipo
                R = 'stop';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Alto ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> quiere que te detengas.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'surprised': {
                //tipo
                R = 'surprised';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Sorprendido ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está sorprendid@.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sweat': {
                //tipo
                R = 'sweat';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Sudar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está sudando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'thumbsup': {
                //tipo
                R = 'thumbsup';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Pulgar hacia arriba ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Dió un pulgar hacia arriba.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'wink': {
                //tipo
                R = 'wink';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Guiño ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha guiñado.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'yawn': {
                //tipo
                R = 'yawn';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Bostezo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha dado un bostezo.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'yay': {
                //tipo
                R = 'yay';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`YAY! ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Hizo \"YAY!\".`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'yes': {
                //tipo
                R = 'yes';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`SI! ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Dice \"SI!\".`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }
    }
}