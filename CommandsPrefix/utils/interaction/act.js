const { Message, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    name: 'act',
    alias: ['interact', 'inter'],
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        const usuario = args[1];

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
        username = message.author.globalName || message.author.username,
        usericon = message.author.displayAvatarURL({ size: 64, dynamic: true })
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
        switch (args[0]) {
            case 'tickle': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'tickle';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Cosquillas ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Le dá cosquillas a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'tired': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'tired';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Cansado ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Está cansad@.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'wave': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'wave';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Saludo ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Está saludando a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (args[0]) {
            case 'sorry': {
                //tipo
                R = 'sorry';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Perdoname ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Pide perdón.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está mirando fijamente.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> quiere que te detengas.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está sorprendid@.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está sudando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Dió un pulgar hacia arriba.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Ha guiñado.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Ha dado un bostezo.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Hizo \"YAY!\".`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Dice \"SI!\".`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }
    }
}