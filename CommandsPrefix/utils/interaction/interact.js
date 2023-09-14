const { Message, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    name: 'interact',
    alias: ['act', 'inter'],
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
            case 'nuzzle': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'nuzzle';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Hemorrágia nasal ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Ha frotado su cara con <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'pat': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'pat';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Pat - Pat! ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Acarisió la cabeza de <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'pinch': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'pinch';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Pellizcar ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Está pellizcando a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'poke': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'poke';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Tocar ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Está tocando a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'pout': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'pout';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Mohín ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Le hizo un mohín a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'punch': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'punch';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Golpe ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Ha golpeado a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'slap': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'slap';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Bofeteo ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Bofeteó a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (args[0]) {
            case 'nervous': {
                //tipo
                R = 'nervous';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Nervios ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Está nervios@.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Dijo NO.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Ha comído.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Tiene hemorrágia nasal.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> NYAH! UwU.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está observando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está rodando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está corriendo.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está triste.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está asustado.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> No sabe nada.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Es tímido.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Ha suspirado.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está sorbiendo.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está durmiemdo.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está aplaudiendo lento.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Sonríe.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Ha estornudado.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }
    }
}