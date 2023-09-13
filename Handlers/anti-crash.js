const { EmbedBuilder, WebhookClient } = require('discord.js');
const { inspect } = require("util");
const process = require('node:process');

const webhook = new WebhookClient({
    url: 'https://discord.com/api/webhooks/1139630178386051072/oMxOSHUH7qfE3dg2Ixu1lRuMy0uyDR_3AjmRUq2p5h-5hO-CxWzStZPxu0X_ZsnbkJvE'
});

module.exports = (client) => {
    const embed = new EmbedBuilder().setColor(0xFF0000);

    client.on("error", (err) => {
        console.log(err);

        embed.setAuthor({
            name: 'Error agregado.'
        })
            .setTitle('🔴 Aurora API error: 🔴')
            .setURL('https://discordjs.guide/popular-topics/errors.html#api-errors')
            .setDescription(`\`\`\`${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\``)
            .setTimestamp();

        return webhook.send({
            embeds: [embed]
        });

    });

    process.on("unhandledRejection", (reason, promise) => {
            console.log(reason, '\n', promise);

            embed.setTitle('unhandledRejection/Catch')
                .setURL('https://nodejs.org/api/process.html#event-unhandledrejection')
                .addFields({
                    name: 'Reason',
                    value: `\`\`\` ${inspect(reason, { depth: 0 }).slice(0, 1000)} \`\`\``
                },
                    {
                        name: 'promise',
                        value: `\`\`\` ${inspect(promise, { depth: 0 }).slice(0, 1000)} \`\`\``
                    })
                .setTimestamp();

            return webhook.send({
                embeds: [embed]
            });
        });

    process.on("uncaughtException", (err, origin) => {
            console.log(err, '\n', origin);

            embed.setTitle('uncaught Exeption')
                .setURL('https://nodejs.org/api/process.html#event-uncaughtexception')
                .addFields({
                    name: 'Error',
                    value: `\`\`\` ${inspect(err, { depth: 0 }).slice(0, 1000)} \`\`\``
                },
                    {
                        name: 'Origin',
                        value: `\`\`\` ${inspect(origin, { depth: 0 }).slice(0, 1000)} \`\`\``
                    })
                .setTimestamp();

            return webhook.send({
                embeds: [embed]
            });
        });

    process.on("uncaughtExceptionMonitor", (err, origin) => {
            console.log(err, '\n', origin);

            embed.setTitle('uncaught Exeption Monitor')
                .setURL('https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor')
                .addFields({
                    name: 'Error',
                    value: `\`\`\` ${inspect(err, { depth: 0 }).slice(0, 1000)} \`\`\``
                },
                    {
                        name: 'Origin',
                        value: `\`\`\` ${inspect(origin, { depth: 0 }).slice(0, 1000)} \`\`\``
                    })
                .setTimestamp();

            return webhook.send({
                embeds: [embed]
            });
        });

    process.on("warning", (warning) => {
            console.warn(warning);

            embed.setTitle('uncaught Exeption Monitor Warning')
                .setURL('https://nodejs.org/api/process.html#event-warning')
                .addFields({
                    name: 'Warning',
                    value: `\`\`\` ${inspect(warning, { depth: 0 }).slice(0, 1000)} \`\`\``
                })
                .setTimestamp();

            return webhook.send({
                embeds: [embed]
            });
        });
}