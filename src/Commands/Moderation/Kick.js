const BaseCommand = require("../../Helpers/Structures/BaseCommand")
const { MessageEmbed } = require("discord.js")

module.exports = class Kick extends BaseCommand {
	constructor() {
		super("kick", [], "Kick command", ["KICK_MEMBERS"], "Moderation")
	}

	run(client, message, args) {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		if (!member) return message.channel.send(new MessageEmbed()
			.setTitle(":x: Error")
			.setDescription("The **user is invalid** or **is not on this server**!")
			.setColor("RED")
		)

		let reason = args.slice(1).join(" ")

		if (!reason) reason = "Not specified"

		message.channel.send(new MessageEmbed()
			.setTitle("\\✅ User successfully kicked")
			.addField("\\������ User", member.displayName)
			.addField("\\������ Reason", reason)
			.addField("\\������ Moderator", message.author.username)
			.setColor("#008cff")
		)
	}
}
