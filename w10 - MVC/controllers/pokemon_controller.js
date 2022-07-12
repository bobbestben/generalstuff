//When HTTP request sent, controller talks to the model for data request
//and returns the data

//Import the data from Models
const pokemon = require('../models/pokemon')

const controller = {

//Here using json response - to send response as text
//After trying out .send/.json - looks like expres automatically detect as json data
//but use .send in practice
    listPokemon : (req, res) => {
        // res.json(pokemon)
        res.render('index.ejs', {
            myPageTitle: "See all the Pokemon, auto rendered by my controller",
            pokemon // shortform for pokemon: pokemon
        })
    }
}

module.exports = controller