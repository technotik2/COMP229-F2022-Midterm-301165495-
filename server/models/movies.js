let mongoose = require('mongoose');

// create a model class
let Movies = mongoose.Schema({
    Title: String,
    Description: String,
    Released: String,
    Director: String,
    Genre: String
},
{
  collection: "Movie"
});

module.exports = mongoose.model('Movies', Movies);