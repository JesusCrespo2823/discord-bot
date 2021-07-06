const BaseEvent = require("../Helpers/Structures/BaseEvent")
const checkPermissions = require("../Helpers/Functions/Permissions")
const { MessageEmbed } = require("discord.js")

module.exports = class Message extends BaseEvent {
	constructor() {
		super("message")
	}

	run(client, message) {
		if (message.author.bot || !message.guild || !message.content.startsWith(client.prefix)) return

		const args = message.content.slice(client.prefix.length).trim().split(/ +/g)
		const cmd = args.shift().toLowerCase()
		const command = client.commands.get(cmd) || client.aliases.get(cmd)
		if (!command) return
		if (command.permissions && command.permissions.length !== 0) {
			if (checkPermissions(command.permissions, message.member.permissions.toArray())) {
				command.run(client, message, args)
			} else {
				message.channel.send(new MessageEmbed()
					.setDescription(`You don't have sufficient permissions to use this commands\n**Required permissions:** \`${command.permissions}\``)
					.setColor("RED")
				)
			}
		} else {
			command.run(client, message, args)
		}
	}
}
