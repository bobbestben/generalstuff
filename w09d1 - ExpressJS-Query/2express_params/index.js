//Backend Server Hosting using Express.js

//Prior to this
//Installed express library locally - for hosting server
//Installed nodemon globally, this allows server to update html page if any changes
//otherwise you have to stop server, then restart html page

//require - importing library from express node_modules
const express = require("express");
const app = express();
const port = 3000;
const usernames = ["jonathan", "siewla", "eugene"];



//Note 1.2
//Route order matters
//Specific url that is part of the below url /users/1,2,3
//so must put this on top
app.get('/users/login', (req, res) => {
    res.send("Holy Moly, Moly is Holy");
});




//GET request
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

//Query Parameters
//endpoint url append ?="query string"
//www.mysite.com/shop?=diapers

//Route Parameters
///information passed as as part of endpoint url
//www.mysite.com/shop/diapers

app.get("/users/:user_id", (req, res) => {
    //here we use : to signify route parameter
    //value is a string using
    //console.log(typeof req.params.user_id)
    //input url will be like http://localhost:3000/users/2

    //user_id represents the index of array usernames
    const userID = req.params.user_id;
    const user = usernames[userID];
    console.log(req.params);

    //Validation 1: if route parameter invalid
    // 1. validate that value passed is numeric
    // - using parseInt method, returns an integer if string is number
    // - returns NaN if string is not a number
    // - try out with below console.log
    console.log(parseInt(userID, 10))

    //if not a number
    if (isNaN ( parseInt(userID, 10) ) ) {
        res.send('error: user id must be a valid integer')
        //if you dont return here, your invalid url
        //will not stop the function from running
        //then you run the website again will encounter error
        return
    }
    // Validation 2: Check arr index if its out of range
    if (parseInt(userID,10) < 0 || parseInt(userID,10) > usernames.length) {
        res.send('error2: out of bounds')
        return
    }

    //full syntax is res.send(usernames[req.params.user_id])
    res.send(user);
});


app.get("/users", (req, res) => {

    //user input url query will be like this
    //http://localhost:3000/users?user_id=1

    const userID = req.query.user_id
    console.log('req.query',req.query)
    console.log('req.query.user_id',req.query.user_id)

    //validations here ...
    if ( !userID) {
        res.send("user_id must be set")
        return
    }

    const user = usernames[userID]


    res.send(user);
});


//Note 1.1
//Route order matters
//if you put this here, it doesnt load
//because above param encompasses this route /users/1,2,3
//Lets put it on top
// app.get('/users/login', (req, res) => {
//     res.send("Holy Moly, Moly is Holy");
// });





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//type node index.js OR
//type nodemon index.js in terminal to run server on nodemon
//Server will run, "press ctrl + c" to stop the server
//lsof -i tcp:3000 to check any running tasks, then can task kill if need
