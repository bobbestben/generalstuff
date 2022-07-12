//Prior to this, npm init
//npm install express.js
//(nodemon already installed globally)

const express = require('express')
//Importing data from models folder
const pokemon = require('./models/pokemon')
//Importing controller
const pokemonController = require('./controllers/pokemon_controller')

const app = express()
const port = 3000

//Specifying the Template Engine to use - to render html page
//Tell express which template engine to use
//To do that need to type - npm install ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Going to controller section
app.get('/pokemon', pokemonController.listPokemon)

//Setting up show route for individual pokemon
app.get('/pokemon/:pokemon_id', pokemonController.showPokemon)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})