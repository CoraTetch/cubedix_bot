const { Message, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
    name: 'love',
    /**
     * @param {Message} message
     */
    async execute(client, message, args) {
        const usuario = message.mentions.members.first() || message.member;
        if (!args[0] || !args[0].startsWith('<@')) return message.reply('➕ No se ha ingresado un tag valido de usuario.');

        const 
        me = message.author.id,
        crush = args[0]
        ;

        ////////////

        //0 - 33
        const 
        resp = [
            'Deberían salír con alguien diferente. 💔',
            'No estan destinados. 💔',
            'No es amor de verdad. 💔'
        ],
        //34 - 66
        resp2 = [
            'Tengan una cíta. 💕',
            'Romance. 💕',
            'Creando amor. 💕'
        ],
        //67 - 99
        resp3 = [
            'Casi destinados. 💗',
            'Un buen amor. 💗',
            'Romance hermoso. 💗'
        ];


        const rand = Math.round(Math.random() * 100);// 0, 1, 2, 3, ... 98, 99, 100.

        const resRand = Math.floor(Math.random() * 2.9);// 0, 1, 2.


        const heart = (rand) => {
            // 💔
            if (rand <= 33) return 'https://discord.com/assets/fda7477c4eea759cf5407472387453bf.svg';
            // 💕
            if (rand <= 66 && rand >= 34) return 'https://discord.com/assets/70b35c3dc2e909287823bd8626150089.svg';
            // 💗
            if (rand <= 99 && rand >= 67) return 'https://discord.com/assets/4bfb4661aa2746510f9e9ddcc990ccae.svg';
            // ❤️‍🔥
            if (rand == 100) return 'https://discord.com/assets/93bef14e30e0a38bbc07f733e524f652.svg';
        };

        /////////////////

        const canvas = Canvas.createCanvas(1280, 412);
		const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1133122455163109417/1151895196955590706/love-calculator.png');
	    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


	    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ extension: 'png' }));
        ctx.drawImage(avatar, 73, 54, 296, 296);
        
        const avatar2 = await Canvas.loadImage(usuario.displayAvatarURL({ extension: 'png' }));
        ctx.drawImage(avatar2, 913, 54, 296, 296);

        
        const hearth = await Canvas.loadImage(heart(rand));
        ctx.drawImage(hearth, 492, 70, 250, 250);

        ctx.font = "60px Nunito";
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${rand}%`,575, 200);


	    const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'love-calculator-cubedix.png' });

        /////////////////

        if (rand <= 33) {
            await message.reply({
                content: `${resp[resRand]} | <@${me}> & ${crush}`,
                files: [attachment] 
            });

        } else if (rand <= 66 && rand >= 34) {
            await message.reply({
                content: `${resp2[resRand]} | <@${me}> & ${crush}`,
                files: [attachment] 
            });

        } else if (rand >= 67) {
            await message.reply({
                content: `${resp3[resRand]} | <@${me}> & ${crush}`,
                files: [attachment] 
            });

        } else if (rand == 100) {
            await message.reply({
                content: `El amor perfecto. ❤️‍🔥 | <@${me}> & ${crush}`,
                files: [attachment]
            });
        }
    }
}