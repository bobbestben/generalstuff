//Prior to this, need to run - npm install mongodbnod
// import MongoClient from mongodb lib, out of the many other exports
const { MongoClient } = require("mongodb");
const pokemonData = require("./pokemon");

// Connection URI
// This is the standard syntax
// const uri = "mongodb://127.0.0.1:27017";
const uri =
    "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        // await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        // Seed the database
        // if your database has data, to populate the database with some the data
        // because insert is a promise, can add await
        // client.db('my_db') is your database name. If doesn't exist, will auto create
        const insertResult = await client
            .db("pokemon_express")
            .collection("pokemon")
            .insertMany(pokemonData);
        console.log(insertResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();

        // Here you can see we constantly initialize the connection to DB
        // So let's try to shift this to another file - mongodb.js
    }
}

run().catch(console.dir);

// after that type node mongoconnect.js

// Then why need models folder?
// Because database folder is only for seeding the dabase
// Then models folder is to access the database, do your functions to access raw data etc. here

// Raw Data
// |
// Models: Functions to access the raw Data
// |
// Controller <-- Router <-- Request
// |
// Views
