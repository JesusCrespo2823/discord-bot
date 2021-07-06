const Client = require("./Client")
const addCommands = require("./Helpers/Handlers/AddCommands")
const addEvents = require("./Helpers/Handlers/AddEvents")
const database = require("./database")

const client = new Client()

database()
addCommands(client, "../../Commands")
addEvents(client, "../../Events")
client.init()

