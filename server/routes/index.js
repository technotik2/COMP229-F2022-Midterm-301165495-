/*****************
     * Peyman Talkhekar
     * 301165495
     * 05-03-2022
     * server\routes\index.js *
     *****************/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { title } = require('process');

// define the game model
let movies = require('../models/movies');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    movies: ''
   });
});

module.exports = router;
