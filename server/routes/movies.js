// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// call the movies model
let movies = require('../models/movies');

/* GET movies List page. READ */
router.get('/', (req, res, next) => {
  // find all movie in the books collection
  movies.find( (err, list) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('movies/index', {
        title: 'Movies',
        list: list
      });
    }
  });

});

//  GET the Movies Details page in order to add a new Movies
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     movies.find( (err, list) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('movies/details', {
          title: 'Movies list',
          list: list
        });
      }
    });
   

});

// POST process the Movies Details page and create a new Movies - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     const {Title, Description, Released, Director, Genre} = req.body; // Extrapolating data from req.body

     const newmovie = new movies({
       Title,
       Description,
       Released,
       Director,
       Genre,
     });
   
     movies.create(newmovie, (err, movie) => {
       if (err) res.end(err);
       else res.redirect("/movies");
     });

});

// GET the Movies Details page in order to edit an existing Movies
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;
     movies.findById(id, (err, movieToEdit) => {
       if (err) res.end(err);
       else {
         res.render("movies/details", {
           title: "movie list",
           movies: movieToEdit,
         });
       }
     }); 
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;
     const {Title, Description, Released, Director, Genre} = req.body;
   
     const updatedmovie = new movie({
       _id: id,
       Title,
       Description,
       Released,
       Director,
       Genre,
     });
     movies.updateOne({_id: id}, updatedmovie, (err) => {
       if (err) {
         res.end(err);
       } else {
         res.redirect("/movies");
       }
     });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
