const BaseCommand = require("../../Helpers/Structures/BaseCommand")
const { MessageEmbed } = require("discord.js")

module.exports = class Clear extends BaseCommand {
	constructor() {
		super("clear", ["purge"], "Purge a limited amount of messages", ["MANAGE_MESSAGES"], "Moderation")
	}

	async run(client, message, args) {
		const Amount = args[0]

		if (!Amount) return message.channel.send(new MessageEmbed()
			.setTitle(":x: Error!")
			.setDescription("Enter how many messages you want to delete!")
			.setColor("RED")
		)

		if (isNaN(Amount)) return message.channel.send(new MessageEmbed()
			.setTitle(":x: Error!")
			.setDescription("The amount **must be a number**!")
			.setColor("RED")
		)

		if (Amount < 1) return message.channel.send(new MessageEmbed()
			.setTitle(":x: Error!")
			.setDescription("The amount **must be greater than 1**!")
			.setColor("RED")
		)

		if (Amount > 100) return message.channel.send(new MessageEmbed()
			.setTitle(":x: Error!")
			.setDescription("The amount **must be less than 100**")
			.setColor("RED")
		)

		const messages = await message.channel.messages.fetch({ limit: Amount })
		if (message.channel.type === "dm") {
			message.channel.bulkDelete(messages)
		}
	}
}
