const express = require("express");
const Article = require("../models/article.js"); // Need this to load mongoose schema
const articles = express.Router();

//Middleware - check if user is logged in first, then process other methods
articles.use((req, res, next) => {
    if(req.session.currentUser) {
        //so that we dont need to check if user is logged in everytime
        next()
    } else {
        res.redirect('/sessions/new')
    }
})

articles.get("/", (req, res) => {
    // if (req.session.currentUser) {
        //find all articles, if author = current user id
        //Why this one need async await?
        //there are two ways to do mongoose queries, in the mongoose doc i think most of the queries are in callback function, 
        //async await is just a cleaner way (personally i think) to do mongoose queries.
        Article.find({ author: req.session?.currentUser?._id }) // Find all article of "author" is currentUser ID
            .then((articles) => {
                //if im logged in, do this
                res.render("articles/index.ejs", {
                    articles,
                    currentUser: req.session.currentUser,
                });
            });
        //if not logged in, redirect
    // } else {
    //     res.redirect("/sessions/new");
    // }
});

articles.get("/", async (req, res) => {
    // if (req.session.currentUser) {
        //find all articles, if author = current user id
        //Why this one need async await?
        const articles = await Article.find({
            author: req.session?.currentUser?._id,
        }); // Find all article of "author" is currentUser ID
        //if im logged in, do this
        res.render("articles/index.ejs", {
            articles,
            currentUser: req.session.currentUser,
        });
        //if not logged in, redirect
    // } else {
    //     res.redirect("/sessions/new");
    // }
});

articles.get("/new", (req, res) => {
    // if (req.session.currentUser) {
        res.render("articles/new.ejs");
    // } else {
    //     res.redirect("/sessions/new");
    // }
});

articles.post("/", (req, res) => {
    // if (req.session.currentUser) {
        // To add article data with auther info
        const articleData = {
            ...req.body,
            author: req.session.currentUser._id,
        };

        //this is callback function, as per Mongoose way, hence no need async await
        Article.create(articleData, (err, createdArticle) => {
            res.redirect("/articles");
        });
    // } else {
    //     res.redirect("/sessions/new");
    // }
});

module.exports = articles;
