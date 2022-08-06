//npm i express
//npm i ejs
//npm i express-session
//npm i bcrypt - for hashing passwords + adding SALT string, (bcrpyt or SHA256)

//if require only use once, put tgt with function
//if not define at the top
const express = require("express");
const app = express();
const port = 3000;

// why we don’t need to set view engine to ejs and it still working?
// app.set('view engine', 'ejs');
// If the view engine property is not set, you must specify the extension of the view file.

const methodOverride = require('method-override');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/express-auth");
mongoose.connection.once("open", () => {
    console.log("----> Connected to mongo");
});

//The order matters, where you use urlencode, then use session
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const session = require("express-session");
app.use(
    session({
        secret: "feedmeseymour", //some random string
        resave: false,
        saveUninitialized: false,
        //To access cookie information, set httpOnly to false
        //But try not to use this - unless you have good reason
        // cookie: {
        //     httpOnly: false
        // }
    })
);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        currentUser: req.session.currentUser,
    });
});

const usersController = require("./controllers/users.js");
app.use("/users", usersController);

const sessionsController = require("./controllers/sessions.js");
app.use("/sessions", sessionsController);

const articlesController = require("./controllers/articles.js");
app.use("/articles", articlesController);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
