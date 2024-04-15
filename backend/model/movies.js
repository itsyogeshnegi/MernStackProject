const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  plot: String,
  genres: Array,
  runtime: Number,
  cast: Array,
  poster: String,
  title: String,
  languages: Array,
  released: Date,
  directors: Array,
  year: Number,
  imdb: Array,
});

const ModelClass = mongoose.model("movies", movieSchema);

module.exports = ModelClass;
