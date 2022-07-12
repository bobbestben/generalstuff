const express = require('express')
//Importing data from models folder
const pokemon = require('./models/pokemon')
//Importing controller
const pokemonController = require('./controllers/pokemon_controller')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Here using json response - to send response as text
//After trying out .send/.json - looks like expres automatically detect as json data
//but use .send in practice
app.get('/pokemon', pokemonController.listPokemon)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})