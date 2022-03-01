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
  collection: "movies"
});

module.exports = mongoose.model('Movies', Movies);