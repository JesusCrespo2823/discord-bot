const path = require("path")
const fs = require('fs')
const BaseCommand = require("../Structures/BaseCommand")

const addCommands = (bot, dir) => {
	const Route = path.resolve(__dirname, dir)
	const Files = fs.readdirSync(Route)
	for(const File of Files) {
		const stats = fs.lstatSync(path.join(Route, File))
		if (stats.isDirectory()) addCommands(bot, path.join(dir, File))
		if (File.endsWith(".js")) {
			const Command = require(path.join(Route, File))
			if (Command.prototype instanceof BaseCommand) {
				const cmd = new Command()
				bot.commands.set(cmd.name, cmd)
				if(cmd.aliases && cmd.aliases !== 0) {
					cmd.aliases.forEach((alias) => bot.aliases.set(alias, cmd))
				}
			}
		}
	}
}

module.exports = addCommands
