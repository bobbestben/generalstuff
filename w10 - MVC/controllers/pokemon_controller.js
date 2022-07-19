//When HTTP request sent, controller talks to the model for data request
//and returns the data

//Import the data from Models
const pokemon = require("../models/pokemon");

const controller = {
    //Here using json response - to send response as text
    //After trying out .send/.json - looks like expres automatically detect as json data
    //but use .send in practice
    listPokemon: (req, res) => {
        // res.json(pokemon)
        res.render("index.ejs", {
            myPageTitle: "See all the Pokemon, auto rendered by my controller",
            pokemon, // shortform for pokemon: pokemon
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
    showPokemon: (req, res) => {
        const pokemonID = req.params.pokemon_id;

        //validate the pokemonID
        const idNum = parseInt(pokemonID);
        let errMsg = "";
        if (isNaN(idNum)) {
            errMsg = new Error("must be number");
        }

        if (idNum < 0 || idNum > pokemon.length) {
            errMsg = "must be within range";
        }

        const p = pokemon[idNum];

        res.render("showPokemon.ejs", {
            pokemon: p,
            errMsg: errMsg,
            idNum,
        });
    },

    newPokemonForm: (req, res) => {
        res.render("new.ejs");
    },

    createPokemon: (req, res) => {
        //require body-parser to parse the url encoded data from form in new.ejs -> data will be in req.body
        console.log(req.body);
        const data = req.body;

        //validation
        if (!data.pokemon_name) {
            res.send("pokemon name is not set");
            return;
        }

        //add new pokemon to the "database"
        pokemon.push({
            name: data.pokemon_name,
            img: "http://img.pokemondb.net/artwork/" + data.pokemon_name,
        });

        // res.send('pokemon created')
        //redirect to list of pokemon page
        res.redirect("/pokemon");
    },

    updatePokemon: (req, res) => {
        const name = req.body.pokemon_name;
        const ind = req.params.pokemon_id;
        pokemon[ind].name = name;
        console.log('req.body',req.body)
        console.log('req.body.pokemon_name',req.body.pokemon_name)
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
