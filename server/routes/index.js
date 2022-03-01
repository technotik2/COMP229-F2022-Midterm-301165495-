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
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    movies: ''
   });
});
router.get('/details', (req, res, next) => {
  res.render('movies/details', {
    title: 'Movie Details',
    movies: ''
    
   });
});
router.get('/add', function(req, res, next) {
  res.render('movies/details', { title: 'Services' });
});
module.exports = router;
