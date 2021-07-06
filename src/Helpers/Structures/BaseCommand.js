module.exports = class BaseCommand {
	constructor(name, aliases, description, permissions, category) {
		this.name = name
		this.aliases = aliases
		this.description = description
		this.permissions = permissions
		this.category = category
	}
}
