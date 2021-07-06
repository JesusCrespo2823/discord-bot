const BaseEvent = require("../Structures/BaseEvent")
const path = require("path")
const fs = require("fs")

const addEvents = (bot, dir) => {
	const Route = path.resolve(__dirname, dir)
	const Files = fs.readdirSync(Route)
	for (const File of Files) {
		if (File.endsWith(".js")) {
			const Event = require(path.join(Route, File))
			if (Event.prototype instanceof BaseEvent) {
				const event = new Event()
				bot.on(event.name, event.run.bind(event, bot))
			}
		}
	}
}

module.exports = addEvents
