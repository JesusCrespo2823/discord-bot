const { addMoney } = require("../../Helpers/Functions/Economy")
const { MessageEmbed } = require("discord.js")
const BaseCommand = require("../../Helpers/Structures/BaseCommand")

module.exports = class Work extends BaseCommand {
	constructor() {
		super("work", ["w"], "Work command", [], "Economy")
	}

	run(client, message, args) {
		const money = Math.floor(Math.random() * 500) + 1

		addMoney(message.member, money)
	
		message.channel.send(new MessageEmbed()
			.setDescription(`You worked hard and earned ${money}$`)
			.setColor("#008cff")
		)
	}
}
