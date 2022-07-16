//Prior to this, npm init
//npm install express.js
//(nodemon already installed globally)
//npm install body-parser
//sometimes url can be binary, encoded, json - can use body parser to do something

const express = require("express");
//Importing data from models folder
const pokemon = require("./models/pokemon");
//Importing controller
const pokemonController = require("./controllers/pokemon_controller");

const app = express();
const port = 3000;

//Body parser - To pass the form values in to req.body as form data is form of url encoded
//Need to tell express to use the request parsing middleware
app.use(express.urlencoded({extended: true}))
//or ap.use(express.json())


//Specifying the Template Engine to use - to render html page
//Tell express which template engine to use
//To do that need to type - npm install ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Going to controller section
app.get("/pokemon", pokemonController.listPokemon);

//This route is more specific, hence need to be placed before /pokemon/:pokemon_id
//new action: to display form to create new pokemon
app.get("/pokemon/new", pokemonController.newPokemonForm);

//Setting up show route for individual pokemon
app.get("/pokemon/:pokemon_id", pokemonController.showPokemon);

//create action
app.post("/pokemon", pokemonController.createPokemon);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
