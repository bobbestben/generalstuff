//When HTTP request sent, controller talks to the model for data request
//and returns the data

//Import the data from Models
const { ObjectID, ObjectId } = require("mongodb");
const pokemon = require("../database/seed/pokemon");
const model = require("../models/pokemon");
const pokemonModel = require("../models/pokemon");

const controller = {
    //Here using json response - to send response as text
    //After trying out .send/.json - looks like expres automatically detect as json data
    //but use .send in practice
    listPokemon: async (req, res) => {
        const pokemonData = await pokemonModel.listPokemon();
        // res.json(pokemon)
        res.render("index.ejs", {
            myPageTitle: "See all the Pokemon, auto rendered by my controller",
            pokemon: pokemonData, // shortform for pokemon: pokemon
        });
    },
    //can do like this too, like in classes you write function, no need write as an object
    // listPokemon (req, res) => {
    //     // res.json(pokemon)
    //     res.render("index.ejs", {
    //         myPageTitle: "See all the Pokemon, auto rendered by my controller",
    //         pokemon, // shortform for pokemon: pokemon
    //     });
    // },
    showPokemon: async (req, res) => {
        const pokemonID = req.params.pokemon_id;
        console.log(pokemonID)

        let errMsg = "";
        if (!ObjectId.isValid(pokemonID)) {
            return res.render("show", {
                p: [],
                errMsg: "ObjectId is not valid",
            });
        }

        // If you need to catch the error in this function
        // showPokemon: async (req, res) => {
        //     let p = null
        //     try {
        //         p = await model.getPokemon(pokemonID)
        //     } catch(err) {
        //         res.render('showPokemon', {
        //             p: [],
        //             errMsg: 'failed to retrieve pokemon',
        //         })
        //         return
        //     }
        // }

        // // Updated new id after transfer to mongolDB
        // const p = pokemon[idNum];

        // get the pokemon with the id form the database
        const p = await model.getPokemon(pokemonID);

        // render the "showPoekmon" ejs template
        console.log(pokemonID)
        res.render("showPokemon.ejs", {
            p: p,
            errMsg: "",
            pokemonID: pokemonID,
            // errMsg: errMsg, //no neeed error message anymore after xfer to MongoDB
            // idNum, //no ID numb after xfer to MongoDB
        });
    },

    newPokemonForm: (req, res) => {
        res.render("new.ejs");
    },

    // createPokemon: (req, res) => {
    //     //require body-parser to parse the url encoded data from form in new.ejs -> data will be in req.body
    //     console.log(req.body);
    //     const data = req.body;

    //     //validation
    //     if (!data.pokemon_name) {
    //         res.send("pokemon name is not set");
    //         return;
    //     }

    //     //add new pokemon to the "database"
    //     pokemon.push({
    //         name: data.pokemon_name,
    //         img: "http://img.pokemondb.net/artwork/" + data.pokemon_name,
    //     });

    //     // res.send('pokemon created')
    //     //redirect to list of pokemon page
    //     res.redirect("/pokemon");
    // },
    createPokemon: async (req, res) => {
        const data = req.body;

        //validation
        if (!data.pokemon_name) {
            res.send("pokemon name is not set");
            return;
        }

        // add new pokemon to database
        try {
            pokemonModel.createPokemon({
                name: data.pokemon_name,
                img: "http://img.pokemondb.net/artwork/" + data.pokemon_name,
            });
        } catch (err) {
            res.send("failed to create new pokemon");
            return;
        }
    },

    updatePokemon: (req, res) => {
        const name = req.body.pokemon_name;
        const ind = req.params.pokemon_id;
        pokemon[ind].name = name;
        console.log("req.body", req.body);
        console.log("req.body.pokemon_name", req.body.pokemon_name);
        console.log("Updating pokemon", req);
        res.redirect(`/pokemon/${ind}`);
    },

    deletePokemon: (req, res) => {
        const name = req.body.pokemon_name;
        const ind = req.params.pokemon_id;
        pokemon.splice(ind, 1);
        console.log("Deleting pokemon", req);
        res.redirect("/pokemon");
    },
};

module.exports = controller;
