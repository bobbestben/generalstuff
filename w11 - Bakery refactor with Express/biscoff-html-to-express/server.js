//npm init -y
//npm i express

//Prior to this, npm init
//npm install express.js
//(nodemon already installed globally)
//npm install body-parser
//sometimes url can be binary, encoded, json - can use body parser to do something
//npm installed methodoverrider locally
//template from https://expressjs.com/en/starter/hello-world.html

//install ejs - npm i ejs

//Mongoose - quick start - npm install mongoose --save

//npm install joi - for validation

//Dotenv for managing ur passwords - to store your username and password as key value pair in .env file (put it in GIT ignore so no one can see)
//npm insitall dotenv --save 
require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

const pageController = require('./controllers/pages/page_controller')
const productController = require('./controllers/products/products_controller')

// const connStr = "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority";
//Here using dotenv to store user and password in a .env file which we put under .gitignore - so no one can see
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority`;

// const uri = "mongodb+srv://bobbest:wangweijie@generalassembly.imxw3.mongodb.net/?retryWrites=true&w=majority"


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

//Express static - to park images etc in static folder - need middleware
//Exposes your files to it can be publicly accessed at yourdomainurl/backgroundimg.jpg
//Because when rendering from backend, it will not recognize your local files/folder structure
//it goes through the domainurl
//meaning your CSS files, images, all cannot have relative domain, instead use Absolute domain
//and park them in "Public" folder
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.render('pages/home')
// })

app.get('/', pageController.showHome)
app.get('/contact', pageController.showContact)

//Create product
app.post('/products', productController.createProduct)

//List/Show Products
app.get('/products', productController.listProducts)
app.get('/products/:product_id', productController.getProduct)

//Connecting to Mongoose database
//connect is a promise
// mongoose.connect(connStr, { dbName: 'biscoff_bakery'});

// app.listen(port, () => {
    
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(port, async () => {
    try {
        await mongoose.connect(connStr, { dbName: 'biscoff_bakery'});
    } catch(err) {
        console.log('Failed to connect to DB')
        process.exit(1) //so that we wont run the application
    }

  console.log(`Example app listening on port ${port}`)
})