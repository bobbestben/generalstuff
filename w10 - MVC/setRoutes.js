//How to Refactor This?
//Create new folder -> Routes
//then in server.js here create a "router" to that Route file
//app.use('/routes/pokemon.js',route);
//If many route files then how?
//JS script to pull all the route path
const fs = require('fs')
const basePath = './routes'

function setRoutes(app) {
    fs.readdirSync(basePath)
        .forEach(fileName => {
            const baseFileName = `/${removeExtension(fileName)}`
            console.log('filename:', fileName);
            console.log('baseFileName: ', baseFileName)
            console.log('filename',fileName)
        })
}

function removeExtension(fileName) {
    const list = fileName.split('.')
    list.pop();
    return list.join('/')
}


module.exports = setRoutes

//Then invoke the function
setRoutes = require('./routes')
setRoutes(app)