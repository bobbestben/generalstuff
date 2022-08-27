require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const animalRouter = require('./routers/animal_routes')

const app = express()
const port = process.env.PORT || 8000
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}?retryWrites=true&w=majority`

app.use(express.urlencoded({extended: true}))
// CORS error only occur on browser
// A module to determine which domain your access comes from
// this CORS module mean request from any domain can access to server
app.use(cors({
    // this specifies which url origin you allow
    // if dont specify = all allowed
    // origin: 'http://localhost:3000'
}))

app.use('/api/v1/animals', animalRouter)

app.listen(port, async () => {
    try {
        await mongoose.connect(connStr, { dbName: process.env.MONGO_DB})
    } catch(err) {
        console.log(`Failed to connect to DB`)
        process.exit(1)
    }

    console.log(`Animal shelter backend listening on port ${port}`)
})