const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('interact')
        .setDescription('🎭 Haz una interacción con usted o con un usuario.')
        .addSubcommand(subcommand=>subcommand
            .setName('nervous')
            .setDescription('🎭 Ponte nervioso.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('no')
            .setDescription('🎭 Di NO.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('nom')
            .setDescription('🎭 Yummy, come algo.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('nosebleed')
            .setDescription('🎭 ten una hemorrágia nasal.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('nuzzle')
            .setDescription('🎭 Frota tu cara con un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('nyah')
            .setDescription('🎭 Di "Nyah".')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('pat')
            .setDescription('🎭 Acarisia la cabeza de un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('peek')
            .setDescription('🎭 Observa.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('pinch')
            .setDescription('🎭 Pellízca a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('poke')
            .setDescription('🎭 Toca a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('pout')
            .setDescription('🎭 Haz un mohín a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('punch')
            .setDescription('🎭 Golpea a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('roll')
            .setDescription('🎭 Rueda.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('run')
            .setDescription('🎭 Corre.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sad')
            .setDescription('🎭 Ponte triste.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('scared')
            .setDescription('🎭 Asustate!.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('shrug')
            .setDescription('🎭 Encoje los ombros.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('shy')
            .setDescription('🎭 Ponte tímido.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sigh')
            .setDescription('🎭 Suspira.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sip')
            .setDescription('🎭 Sorbe.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('slap')
            .setDescription('🎭 Bofetea a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sleep')
            .setDescription('🎭 Duermete.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('slowclap')
            .setDescription('🎭 Aplaude lento.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('smile')
            .setDescription('🎭 Sonríe.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('sneeze')
            .setDescription('🎭 Estornuda.')
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
            case 'nuzzle': {
                //tipo
                R = 'nuzzle';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Hemorrágia nasal ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha frotado su cara con <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'pat': {
                //tipo
                R = 'pat';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Pat - Pat! ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Acarisió la cabeza de <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'pinch': {
                //tipo
                R = 'pinch';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Pellizcar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está pellizcando a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'poke': {
                //tipo
                R = 'poke';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Tocar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está tocando a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'pout': {
                //tipo
                R = 'pout';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Mohín ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Le hizo un mohín a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'punch': {
                //tipo
                R = 'punch';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Golpe ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha golpeado a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'slap': {
                //tipo
                R = 'slap';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Bofeteo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Bofeteó a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (SubcommandName) {
            case 'nervous': {
                //tipo
                R = 'nervous';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Nervios ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está nervios@.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'no': {
                //tipo
                R = 'no';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`NO! ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Dijo NO.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'nom': {
                //tipo
                R = 'nom';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Yumy ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha comído.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'nosebleed': {
                //tipo
                R = 'nosebleed';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Hemorrágia nasal ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Tiene hemorrágia nasal.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'nyah': {
                //tipo
                R = 'nyah';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`NYAH! ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> NYAH! UwU.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'peek': {
                //tipo
                R = 'peek';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Observar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está observando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'roll': {
                //tipo
                R = 'roll';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Rodar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está rodando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'run': {
                //tipo
                R = 'run';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Correr ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está corriendo.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sad': {
                //tipo
                R = 'sad';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Triste ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está triste.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'scared': {
                //tipo
                R = 'scared';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Susto ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está asustado.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'shrug': {
                //tipo
                R = 'shrug';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`NO sé ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> No sabe nada.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'shy': {
                //tipo
                R = 'shy';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Tímid@ ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Es tímido.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sigh': {
                //tipo
                R = 'sigh';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Suspiro ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha suspirado.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sip': {
                //tipo
                R = 'sip';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Sorbo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está sorbiendo.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sleep': {
                //tipo
                R = 'sleep';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Dormir ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está durmiemdo.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'slowclap': {
                //tipo
                R = 'slowclap';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Aplauso lento ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está aplaudiendo lento.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'smile': {
                //tipo
                R = 'smile';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Sonrisa ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Sonríe.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'sneeze': {
                //tipo
                R = 'sneeze';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Estornudo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Ha estornudado.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }
    }
}