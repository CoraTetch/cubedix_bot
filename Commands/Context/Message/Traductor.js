const { ContextMenuCommandBuilder } = require(`@discordjs/builders`);
const { ApplicationCommandType } = require('discord-api-types/v9');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Traductor')
        .setType(ApplicationCommandType.Message)

    , async execute(client, interaction) {

        const targetMessage = interaction.targetMessage.content;

        let apiKey = 'AIzaSyCHuzsGxzoXs9aotcamo97CygFo14d0Fww';
        const text = 'Hi, ¿How are you?';
        const targetLanguage = interaction.locale;
        
        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${targetMessage}&target=${targetLanguage}`;

        const datajson = await fetch(url);

        const data = await datajson.json();

        const txt = data.data.translations[0].translatedText;

        await interaction.reply({
            content: '> \`A ⇌ あ:\` '+ txt,
            ephemeral: true
        });
    }
}