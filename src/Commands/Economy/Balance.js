const { getMoney, registerMember } = require("../../Helpers/Functions/Economy")
const { MessageEmbed } = require("discord.js")
const BaseCommand = require("../../Helpers/Structures/BaseCommand")
const User = require("../../Models/User")

module.exports = class Balance extends BaseCommand {
	constructor() {
		super("balance", ["bal"], "Balance command", [], "Economy")
	}

	async run(client, message, args) {
		const member = message.mentions.members.first() || message.member
		const memberMoney = await User.findOne({
			userId: member.id,
			guildId: member.guild.id
		})

		if(!memberMoney) {
			registerMember(message.member)
		}

		message.channel.send(`${memberMoney}$`)
	}
}
