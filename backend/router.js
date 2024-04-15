const express = require("express");
const router = express.Router()
const Movies = require("./controller/Movies");

router.get("/", (req, res) => {
  res.send({ Hi: "Server is running..." });
});

// Get Movies
router.get("/getMovies", Movies.getMovies);

module.exports = router