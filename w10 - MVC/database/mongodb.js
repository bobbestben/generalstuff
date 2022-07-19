//Prior to this, need to run - npm install mongodbnod
// import MongoClient from mongodb lib, out of the many other exports
const { MongoClient } = require("mongodb");

// Connection URI
// This is the standard syntax
// const uri = "mongodb://127.0.0.1:27017";
const uri = "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority";
const dbName = "poke_express"

// Create a new MongoClient
const Client = new MongoClient(uri);
const Db = Client.db(dbName)

module.exports = {
    client: Client,
    db: Db,
}

// This way this "connection to DB code" can be re-used
// Then seed.js file just focus on manipulating data