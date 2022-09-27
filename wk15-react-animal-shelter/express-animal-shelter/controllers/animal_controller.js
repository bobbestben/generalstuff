const animalModel = require('../models/animal')

module.exports = {
    createAnimal: async (req, res) => {
        // user gave invalid input -> bad req -> 400

        // user login fail, or not authenticated -> 401

        // resource not found -> 404

        // server problem -> 500, 501

        // successful -> 200

        // created -> 201

        try {
            await animalModel.create(req.body)
        } catch (err) {
            res.status(500)
            return res.json({error: "failed to create animal"})
        }

        return res.status(201).json()
    },

    listAnimals: async (req, res) => {
        let animals = []

        try {
            animals = await animalModel.find().exec()
        } catch (err) {
            res.status(500)
            return res.json({error: "failed to list animals"})
        }

        return res.json(animals)
    },

    show: async (req, res) => {
        try {
            const animalId = req.params.id
            // -__v means minus, the field, exclude the version field
            // or -name -species etc.
            const animals = await animalModel.findById(animalId).select('-__v')
            return res.json(animals)
        } catch (err) {
            res.status(500)
            return res.json({error: `Fail to get animal of id ${animalId}`})
        }
    },
    updateAnimal: async (req, res) => {
        // do validation...

        const animalId = req.params.id

        let animal = null

        try {
            animal = await animalModel.findById(animalId)
        } catch (err) {
            res.status(500)
            return res.json({ error: `Fail to get animal of id ${animalId}` })
        }

        if (!animal) {
            res.status(404)
            return res.json(animal)
        }

        try {
            await animal.updateOne(req.body)
        } catch (err) {
            res.status(500)
            return res.json({error: "failed to update animal"})
        }

        // if error, json cannot return empty string, need put as object
        return res.json({})
    },

    deleteAnimal: async (req, res) => {
        // do validation...

        const animalId = req.params.id

        let animal = null

        try {
            animal = await animalModel.findById(animalId)
        } catch (err) {
            res.status(500)
            return res.json({ error: `Fail to get animal of id ${animalId}` })
        }

        if (!animal) {
            res.status(404)
            return res.json(animal)
        }

        try {
            await animal.delete()
        } catch (err) {
            console.log(err)
            res.status(500).json({error: "failed to delete animal"})
        }

        return res.json()
    },
}