const Client = require("./Client")
const database = require("./database")
require("dotenv").config()

const client = new Client()

database()
client.init()

