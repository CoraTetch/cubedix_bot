const { ChatInputCommandInteraction, EmbedBuilder} = require('discord.js');
const welc = require(`../../Schemas/welc`);

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(member) {
        const data = await welc.findOne({
            server_name: member.guild.name,
            server_id: member.guild.id
        });
        if (!data) return;

        function conv(value) {
            if (value == null) return value = null;
            const newValue = value.replace(/{username}/g, `${member.user.username}`)
                .replace(/{usertag}/g, `<@${member.user.id}>`)
                .replace(/{server}/g, `${member.guild.name}`)
                .replace(/{count}/g, `${member.guild.memberCount}`);
            return newValue;
        }

        if (data.data.msgActive) {
            const setchannel = data.channel;
            const channel = member.guild.channels.cache.get(setchannel.replace(/[<#>]/g, ''));

            const msg = await conv(data.data.member);

            await channel.send({
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
                    name: member.user.username,
                    iconURL: member.user.displayAvatarURL({ size: 64 })
                })
                .setTitle(title)
                .setDescription(desc)
                .setThumbnail(thumb)
                .setImage(img)
                .setFooter({
                    text: footer || null
                })
                .setColor(col);

            const setchannel = data.channel;
            const channel = member.guild.channels.cache.get(setchannel.replace(/[<#>]/g, ''));

            if (hour) {
                embedTest.setTimestamp();
                await channel.send({
                    content: `<@${member.user.id}>`,
                    embeds: [embedTest]
                });

            } else {
                await channel.send({
                    content: `<@${member.user.id}>`,
                    embeds: [embedTest]
                });
            }
        }
    }
}