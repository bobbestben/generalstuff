//When HTTP request sent, controller talks to the model for data request
//and returns the data

//Import the data fromf Models
const pokemon = require('../models/pokemon')

const controller = {

    listPokemon : (req, res) => {
        res.json(pokemon)
    }
}

module.exports = controller