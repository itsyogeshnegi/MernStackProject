const Movies = require("../model/movies");

exports.getMovies = async (req, res) => {
  try {
    // const { plot, genres, poster, title, year, imdb } = req.query;
    console.log(req.query);

    const movies = await Movies.find();

    const length = movies.length;

    res.status(200).json({ length });
  } catch (error) {
    // Handling errors
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
