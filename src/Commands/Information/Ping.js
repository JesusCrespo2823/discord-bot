const BaseCommand = require("../../Helpers/Structures/BaseCommand")
const { MessageEmbed } = require("discord.js")
const ms = require("ms")

module.exports = class Ping extends BaseCommand {
	constructor() {
		super("ping", [], "Ping command", [], "general")
	}

	run(client, message, args) {
		message.delete().catch((error) => {})

		message.channel.send(new MessageEmbed()
			.setDescription(`**\`\`\`ini\n[ 🚀 Pong | ${client.ws.ping}ms ]\`\`\`**`)
			.setColor("#008cff")
		)
	}
}
