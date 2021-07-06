const BaseEvent = require("../Helpers/Structures/BaseEvent")

module.exports = class Ready extends BaseEvent {
	constructor() {
		super("ready")
	}

	run(client) {
		console.log(`Bot online | ${client.user.tag}`)
	}
}
