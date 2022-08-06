const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const express = require("express");
const sessions = express.Router();

sessions.get("/new", (req, res) => {
    res.render("sessions/new.ejs");
});

sessions.post("/", (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        //check user typed in, compare with user info in database
        //Optional chaining - foundUser?.password
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        //instead of typing foundUser? && foundUser.password?
        //encrypt the plain text password entered, compare with encrpyted DB password
        console.log("foundUser:", foundUser);
        console.log("err:", err);
        if (foundUser && bcrypt.compareSync(req.body.password, foundUser?.password)) {
        // if (bcrypt.compareSync(req.body.password, foundUser?.password || '')) {
        // if (bcrypt.compareSync(req.body.password, foundUser?.password)) { //this one foundUser? undefined will throw error
            req.session.currentUser = foundUser;
            //after you login, check under Inspect->Application->Cookies->connect.sid
            res.redirect('/');
            // res.send("logged in");
        } else {
            res.send("wrong password");
        }
    });
});

sessions.delete('/', (req, res) => {
    req.session.destroy(()=>{
      res.redirect('/');
    });
  })

module.exports = sessions;
