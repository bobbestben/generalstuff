//Backend Server Hosting using Express.js

//Prior to this
//Installed express library locally - for hosting server
//Installed nodemon globally, this allows server to update html page if any changes
//otherwise you have to stop server, then restart html page

//require - importing library from express node_modules
const express = require('express')
const app = express()
//Port can change, except for some special case reserved ports 2300(?)
const port = 3000

//GET request
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

//These urls are not case sensitive FOR EXPRESS JS
//./frasier or ./fraSiER all works
//other framework might be case sensitive

//GET route for /frasier path
app.get('/frasier', (req, res) => {
    res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'")
})

//GET route for /niles
app.get('/niles', (req, res) => {
    res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")
})

//GET route for /daphne
app.get('/daphne', (req, res) => {
    res.send("Well, have fun. I'm off to stick my head in the oven.")
})

//GET route for /roz
app.get('/roz', (req, res) => {
    res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!")
})

//GET route for /martin
app.get('/martin', (req, res) => {
    res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.")
})

//Query Parameters
//endpoint url append ?="query string"
//www.mysite.com/shop?=diapers

//Route Parameters
///information passed as as part of endpoint url
//www.mysite.com/shop/diapers




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//type node index.js OR
//type nodemon index.js in terminal to run server on nodemon
//Server will run, "press ctrl + c" to stop the server
//lsof -i tcp:3000 to check any running tasks, then can task kill if need