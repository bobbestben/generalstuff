const { ObjectId } = require('mongodb')
const mongodb = require('../database/mongodb')
const collectionName = 'pokemon'
const collection = mongodb.db.collection(collectionName)

const model = {
    listPokemon: () => {
        // Syntax for find() documents
        // Why need cursor? Why not just return all the data?
        // Gives you a pointer that you can refer to, to extract data easily
        // And also if you pull all the data, imagine if data has HUGE file size
        // Will take a very long time to load
        // This cursor Returns a FindCursor, then can apply methods to get data you need
        // Such as next(), toArray(), forEach()
        const cursor = collection.find()
        return cursor.toArray()
    },

    getPokemon: pokemonID => {
        return collection.findOne(ObjectId(pokemonID))
    },

    createPokemon: fields => {
        return collection.insertOne(fields)
    },

    deletePokemon: docID => {
        collection.deteOne(docID)
    }
}

// const pokemon = [
//     { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
//     { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
//     { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
//     { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
//     { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
//     { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
//     { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
// ];

// module.exports = pokemon;
module.exports = model;
