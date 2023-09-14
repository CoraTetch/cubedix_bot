const { Message } = require('discord.js');

module.exports = {
    name: "ping",
    /**
     * @param {Message} message 
     */
    async execute(client, message, args){
        await message.reply(`Ping: ${client.ws.ping}ms`);
    }
}