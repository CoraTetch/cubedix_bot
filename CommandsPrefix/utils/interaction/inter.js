const { Message, EmbedBuilder } = require('discord.js');

const axios = require('axios');

module.exports = {
    name: 'inter',
    alias: ['act', 'interact'],
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

        //interaccion con otro usuario / 16
        switch (args[0]) {
            case 'bite': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'bite';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Mordida ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> ha mordido a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'brofist': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'brofist';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Puño ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> Dio el puño a ${usuario.replace(/[<@>]/g, '')}.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'handhold': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'handhold';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setImage(res.data.url)
                embed.setTitle(`Dar la mano ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> & <@${usuario.replace(/[<@>]/g, '')}> se han dado la mano 💕.`)

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'hug': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'hug';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Abrazo ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> dió un abrazo a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'kiss': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'kiss';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Beso ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> ha besado a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
            case 'lick': {
                if (!usuario || !usuario.startsWith('<@')) return message.reply('➕ Para este comando es necesario tagear a un usuario.');
                //tipo
                R = 'lick';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                embed.setTitle(`Lamida ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> ha lamido a <@${usuario.replace(/[<@>]/g, '')}>.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }

        ///////////////////////////////

        //interacción propia
        switch (args[0]) {
            case 'airkiss': {
                //tipo
                R = 'airkiss';

                //constructor
                const url = U + R + L;
                const res = await axios.get(url);

                /////////////////////////////////

                embed.setTitle(`Beso al aire ${emoji[rand]}`)
                embed.setDescription(`<@${message.author.id}> ha lanzado un beso.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> ha hecho una mirada enojada.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> ha sacado la lengua.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está sonrojad@.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Hizo una celebración.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Hizo un brindis.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Dió un aplauso.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está confundido.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Es cool ahora.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está llorando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está bailando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está babeando.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Hizo una risa malvada.`)

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Se ha dado una palmada en la cara.`)

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está felíz.`)

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Se ha dado un golpe en la pared.`)

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Se ha reído.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está enamorado.`)
                embed.setImage(res.data.url);

                return await message.reply({
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
                embed.setDescription(`<@${message.author.id}> Está loc@.`)
                embed.setImage(res.data.url);

                return await message.reply({
                    embeds: [embed]
                });
            }
        }
    }
}