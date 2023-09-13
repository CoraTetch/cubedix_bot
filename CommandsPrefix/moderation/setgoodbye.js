const { Message, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const bye = require('../../Schemas/bye');

module.exports = {
    name: 'setgoodbye',
    /**
     * @param {Message} message
     */
    async execute(client, message, args, wait) {
        if (!PermissionFlagsBits.Administrator) return;

        const 
        param1 = args[0],
        param2 = args.slice(1).join(' '),
        param3 = message.attachments.map(att => att.url) || null || undefined
        ;
        /**/
        const data = await bye.findOne({
            server_name: message.guild.name,
            server_id: message.guild.id
        });

        //info?
        //agregar
        switch (param1) {
            case 'channel': {
                if (!data) {
                    const newData = await bye.create({
                        server_name: message.guild.name,
                        server_id: message.guild.id,
                        channel: param2.replace(/<#>/g, '') || param2,
                    });
                    return message.reply('🟩 Canal creado!');
                } else if (data.server_id === message.guild.id) {
                    const newData = await bye.updateOne({
                        server_name: message.guild.name,
                        server_id: message.guild.id,
                        channel: param2.replace(/<#>/g, '') || param2,
                    });

                    return message.reply('🟩 Canal agregado!');
                }
            }break;
            case 'type': {
                if (param2 === 'message') {
                    if (!data) {
                        const newData = await bye.create({
                            server_name: message.guild.name,
                            server_id: message.guild.id,
                            data: {
                                msgActive: true,
                                ebdActive: false,
                            }
                        });

                        return message.reply('🟩 Estilo de mensaje creado!');
                    } else if (data.server_id === message.guild.id) {
                        const newData = await bye.updateOne({
                            server_name: message.guild.name,
                            server_id: message.guild.id,
                            data: {
                                msgActive: true,
                                ebdActive: false,
                            }
                        });

                        return message.reply('🟩 Estilo de mensaje agregado!');
                    }
                } else if (param2 === 'embed') {
                    if (!data || data.server_id !== message.guild.id) {
                        const newData = await bye.create({
                            server_name: message.guild.name,
                            server_id: message.guild.id,
                            data: {
                                embed: { type: Object},
                                msgActive: false,
                                ebdActive: true,
                            }
                        });

                        return message.reply('🟩 Estilo de mensaje creado!');
                    } else if (data.server_id === message.guild.id) {
                        const newData = await bye.updateOne({
                            server_name: message.guild.name,
                            server_id: message.guild.id,
                            data: {
                                embed: { type: Object},
                                msgActive: false,
                                ebdActive: true,
                            }
                        });

                        return message.reply('🟩 Estilo de mensaje agregado!');
                    }
                } else {
                    return message.reply('Tipos de mensaje: `message` - `embed`')
                }
            }break;
            case 'message': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: param2,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Mensaje agregado!');
            }break;
            case 'title': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: param2,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Titulo agregado!');
            }break;
            case 'description': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: param2,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Descripción agregado!');
            }break;
            case 'thumbnail': {
                if (param2 === null || param2 === undefined && param3 === null || param3 === undefined)
                    return message.reply('🟥 No se ha ingresado una imagen o url de la imagen.');

                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: param2 || param3,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Miniatura agregado!');
            }break;
            case 'image': {
                if (param2 === null || param2 === undefined && param3 === null || param3 === undefined)
                    return message.reply('🟥 No se ha ingresado una imagen o url de la imagen.');

                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: param2 || param3,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Imagen agregado!');
            }break;
            case 'color': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: param2,
                            footer: data.data.embed.footer,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Color agregado!');
            }break;
            case 'footer': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: param2,
                            hour: data.data.embed.hour
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Pie de página agregado!');
            }break;
            case 'timestamp': {
                const newData = await bye.updateOne({
                    server_name: message.guild.name,
                    server_id: message.guild.id,
                    channel: data.channel,
                    data: {
                        message: data.data.message,
                        embed: {
                            title: data.data.embed.title,
                            desc: data.data.embed.desc,
                            thumb: data.data.embed.thumb,
                            img: data.data.embed.img,
                            col: data.data.embed.col,
                            footer: data.data.embed.footer,
                            hour: param2
                        },
                        msgActive: data.data.msgActive,
                        ebdActive: data.data.ebdActive,
                    }
                });
                
                return message.reply('🟩 Tiempo agregado!');
            }break;
            /**/
        }

        function conv(value) {
            if (value == null) return value = null;
            const newValue = value.replace(/{username}/g, `${message.author.username}`)
                .replace(/{usertag}/g, `<@${message.author.id}>`)
                .replace(/{server}/g, `${message.guild.name}`)
                .replace(/{count}/g, `${message.guild.memberCount}`);
            return newValue;
        }

        //test
        if (param1 === 'test') {
            if (data.data.msgActive) {
                var msg = await conv(data.data.message);
                    
                return message.reply({
                    content: msg
                });
            } else if (data.data.ebdActive) {
                const
                embed = data.data.embed,
                titled = embed.title || null,
                descd = embed.desc || null,
                thumb = embed.thumb || null,
                img = embed.img || null,
                col = embed.col || null,
                footerd = embed.footer || null,
                hour = embed.hour || false
                ;

                //convertidor
                const
                title = await conv(titled),
                desc = await conv(descd),
                footer = await conv(footerd)
                ;

                //test
                const embedTest = new EmbedBuilder()
                    .setAuthor({
                        name: message.author.username,
                        iconURL: message.author.displayAvatarURL({ size: 64 })
                    })
                    .setTitle(title)
                    .setDescription(desc)
                    .setThumbnail(thumb)
                    .setImage(img)
                    .setFooter({
                        text: footer || null
                    })
                    .setColor(col);
                
                if (hour) {
                    embedTest.setTimestamp();

                    return message.reply({
                        content: `<@${message.author.id}>`,
                        embeds: [embedTest]
                    });
                } else {
                    return message.reply({
                        content: `<@${message.author.id}>`,
                        embeds: [embedTest]
                    });
                }
            }
        }
    }
}