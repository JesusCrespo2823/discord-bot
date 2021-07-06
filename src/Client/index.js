const { Client, Collection } = require("discord.js")
const addCommands = require("../Helpers/Handlers/AddCommands")
const addEvents = require("../Helpers/Handlers/AddEvents")

module.exports = class MyClient extends Client {
	constructor() {
		super(...arguments)
		this.prefix = "!"
		this.commands = new Collection()
		this.aliases = new Collection()
	}

	init() {
		this.login(process.env.DISCORD_TOKEN)
		addCommands(this, "../../Commands")
		addEvents(this, "../../Events")
	}
}
