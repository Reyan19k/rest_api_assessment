const { Router } = require('express');
const { createMovie, readMovies, updateMovie, deleteMovie } = require('./movieControllers')

const movieRouter = Router()

movieRouter.post("/createMovie", createMovie)
movieRouter.get("/readMovie", readMovies)
movieRouter.put("/updateMovie", updateMovie)
movieRouter.delete("/deleteMovie/:title", deleteMovie)

module.exports = movieRouter