const BaseCommand = require("../../Helpers/Structures/BaseCommand")
const { MessageEmbed } = require("discord.js")
const ms = require('pretty-ms')

module.exports = class Uptime extends BaseCommand {
	constructor() {
		super("uptime", [], "Display uptime", [], "Information")
	}

	run(client, message, args) {
		message.delete().catch((error) => {})

		message.channel.send(new MessageEmbed()
			.setDescription(`**\`\`\`ini\n[ ${ms(client.uptime, { verbose: true, secondsDecimalDigits: 0 })} ]\`\`\`**`)
			.setColor("#008cff")
		)
	}
}
