//Prior to this, need to run - npm install mongodbnod
// import MongoClient from mongodb lib, out of the many other exports
const { MongoClient } = require("mongodb");

// Connection URI
// This is the standard syntax
// const uri = "mongodb://127.0.0.1:27017";
const uri = "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority"

// Create a new MongoClient
const client = new MongoClient(uri);

const seedPokemonData = [
    { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
];

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
    const insertResult = await client.db('pokemon_express').collection('pokemon').insertMany(seedPokemonData)
    console.log(insertResult)

  } finally {

    // Ensures that the client will close when you finish/error
    await client.close();

  }

}

run().catch(console.dir);

//after that type node mongoconnect.js