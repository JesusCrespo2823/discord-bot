const Client = require("./Client")
const database = require("./database")

const client = new Client()

database()
client.init()

