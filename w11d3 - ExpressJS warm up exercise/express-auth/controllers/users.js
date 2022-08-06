const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const express = require("express");
const users = express.Router();


users.get("/new", (req, res) => {
    res.render("users/new.ejs");
});

users.post("/", (req, res) => {
	const user ={
		username: req.body.username,
		//encrpyt password using bcrpyt and store inside mongoDB
		//if diff user but same password, the bcrpyt algo still generate diff password
		password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
	}
    User.create(user, (err, createdUser) => {
		// req.session.currentUser = createdUser;
        res.redirect("/");
    });
});

module.exports = users;
