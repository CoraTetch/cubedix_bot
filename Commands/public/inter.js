const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inter')
        .setDescription('🎭 Haz una interacción con usted o con un usuario.')
        .addSubcommand(subcommand=>subcommand
            .setName('airkiss')
            .setDescription('🎭 Lanza un beso.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('angrystare')
            .setDescription('🎭 Da una mirada enojada.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('bite')
            .setDescription('🎭 Da una mordida a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('bleh')
            .setDescription('🎭 Saca la lengua.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('blush')
            .setDescription('🎭 Sonrojate.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('brofist')
            .setDescription('🎭 Da el puño a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('celebrate')
            .setDescription('🎭 Haz una celebración.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('cheers')
            .setDescription('🎭 Haz un brindis.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('clap')
            .setDescription('🎭 Da un aplauso.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('confused')
            .setDescription('🎭 Confundido.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('cool')
            .setDescription('🎭 Hazte cool.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('cry')
            .setDescription('🎭 Ponte a llorar.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('dance')
            .setDescription('🎭 Ponte a bailar.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('drool')
            .setDescription('🎭 Babea.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('evillaugh')
            .setDescription('🎭 Haz una risa malvada.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('facepalm')
            .setDescription('🎭 Date una palmada en la cara.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('handhold')
            .setDescription('🎭 Dale la mano a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('happy')
            .setDescription('🎭 Ponte felíz.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('headbang')
            .setDescription('🎭 Date un golpe en la pared.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('hug')
            .setDescription('🎭 Da un habrazo.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('kiss')
            .setDescription('🎭 Da un beso a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('laugh')
            .setDescription('🎭 Ríete.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('lick')
            .setDescription('🎭 Lame a un usuario.')
            .addUserOption(option=>option
                .setName('usuario')
                .setDescription('🎭 Interacción a un usuario.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand=>subcommand
            .setName('love')
            .setDescription('🎭 Enamorate.')
        )
        .addSubcommand(subcommand=>subcommand
            .setName('mad')
            .setDescription('🎭 Locura.')
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

        //interaccion con otro usuario / 16
        switch (SubcommandName) {
            case 'bite': {
                //tipo
                R = 'bite';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Mordida ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha mordido a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'brofist': {
                //tipo
                R = 'brofist';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Puño ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Dio el puño a ${usuario.id}.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'handhold': {
                //tipo
                R = 'handhold';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Dar la mano ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> & <@${usuario.id}> se han dado la mano 💕.`)

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'hug': {
                //tipo
                R = 'hug';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Abrazo ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> dió un abrazo a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'kiss': {
                //tipo
                R = 'kiss';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Beso ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha besado a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'lick': {
                //tipo
                R = 'lick';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Lamida ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha lamido a <@${usuario.id}>.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (SubcommandName) {
            case 'airkiss': {
                //tipo
                R = 'airkiss';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Beso al aire ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha lanzado un beso.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'angrystare': {
                //tipo
                R = 'angrystare';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Mirada enojada ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha hecho una mirada enojada.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'bleh': {
                //tipo
                R = 'bleh';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Bleh ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> ha sacado la lengua.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'blush': {
                //tipo
                R = 'blush';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Sonrojad@ ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está sonrojad@.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'celebrate': {
                //tipo
                R = 'celebrate';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Celebrar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Hizo una celebración.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'cheers': {
                //tipo
                R = 'cheers';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Brindis ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Hizo un brindis.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'clap': {
                //tipo
                R = 'clap';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Aplauso ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Dió un aplauso.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'confused': {
                //tipo
                R = 'confused';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Confundido ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está confundido.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'cool': {
                //tipo
                R = 'cool';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Cool ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Es cool ahora.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'cry': {
                //tipo
                R = 'cry';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Llorar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está llorando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'dance': {
                //tipo
                R = 'dance';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Bailar ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está bailando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'drool': {
                //tipo
                R = 'drool';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`babear ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está babeando.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'evillaugh': {
                //tipo
                R = 'evillaugh';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Risa malvada ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Hizo una risa malvada.`)

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'facepalm': {
                //tipo
                R = 'facepalm';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Palmada en la cara ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Se ha dado una palmada en la cara.`)

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'happy': {
                //tipo
                R = 'happy';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Felíz ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está felíz.`)

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'headbang': {
                //tipo
                R = 'headbang';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Golpe en la pared ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Se ha dado un golpe en la pared.`)

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'laugh': {
                //tipo
                R = 'laugh';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Risa ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Se ha reído.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'love': {
                //tipo
                R = 'love';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Enamorado ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está enamorado.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
            case 'mad': {
                //tipo
                R = 'mad';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Locura ${emoji[rand]}`)
                embed.setDescription(`<@${interaction.user.id}> Está loc@.`)
                embed.setImage(res.data.url);

                return await interaction.reply({
                    embeds: [embed]
                });
            }
        }
    }
}