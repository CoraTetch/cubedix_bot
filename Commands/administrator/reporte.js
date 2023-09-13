const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reporte')
		.setDescription('🟩 Reporta alguna falla surgido de AURORA.')
		.addStringOption(option=>option
			.setName('falla')
			.setDescription('🟩 La razón de la falla.')
		)
		.addAttachmentOption(option=>option
			.setName('imagen')
			.setDescription('🟩 Añade una imagen de la falla.')
	)
		.addStringOption(option => option
			.setName('comando')
			.setDescription('🟩 Comando ejecutado de la falla.')
		)

		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

		/**
		 * @param {ChatInputCommandInteraction} interaction
		 */

	async execute(client, interaction, options) {
		try {
			const falla = options.getString('falla'),
				image = options.getAttachment('imagen'),
				comando = options.getString('comando');

			const imagen = await image.url;

			await interaction.reply({
				content: 'Gracias por el reporte, sera enviado en el servidor oficial de AURORA.\n',
			});
			await interaction.followUp({
				content: 'En el reporte se agregara tu nombre de usuario y el servidor de donde lo enviaste, esto para evitar imagenes o mensajes no permitidos.',
				ephemeral: true
			})

			const embed = new EmbedBuilder()
				.setAuthor({
					name: interaction.user.username + ' | ' + interaction.guild.name,
					iconUrl: interaction.user.displayAvatarURL({ size: 128, dynamic: true })
				})
				.setDescription(falla)
				.setTitle('Enviado por: ' + interaction.user.username)
				.setImage(imagen)
				.setThumbnail(interaction.guild.iconURL({ size: 1024, dynamic: true }) || null)
				.setColor(0xb50000)
				.setTimestamp(); //https://cdn.discordapp.com/attachments/1136407616336183376/1137095514014359684/image.png

			let channel = client.channels.cache.get('1136876265928933417'); // aurora
			//let channel = client.channels.cache.get('1136701872791617649'); // cort
			await channel.send({
				content: `**Fecha:** ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}\n\n` +
					`**Imagen:** ${imagen.replace(/https/, 'aurora')}\n\n` +
					`**Comando:** ${comando}`,
				embeds: [embed]
			});
		} catch (e) {
			console.error('Error reporte: '+e);
		}
	}
}