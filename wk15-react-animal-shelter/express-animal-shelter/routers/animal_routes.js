const express = require('express')
const animalController = require('../controllers/animal_controller')

const router = express.Router()

// GET /api/v1/animals
router.get('/', animalController.listAnimals)

// GET /api/v1/animals/:animalID
router.get('/:id', animalController.show)

router.post('/', animalController.createAnimal)

module.exports = router
