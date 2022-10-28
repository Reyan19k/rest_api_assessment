const Movie = require('./movieModel')
const { response, request } = require('express');

exports.createMovie = async (request, response) => {
    try {
        const newMovie = await Movie.create(request.body);
        response.status(201).send({movie: newMovie})
    } catch (error) {
        console.log(error)
        response.status(500).send({error: error.message})
    }
}
exports.readMovies = async (request, response) => {
    try {
        const movies = await Movie.find({})
        response.status(200).send({movie: movies})
    } catch (error) {
        console.log(error)
        response.status(500).send({error: error.message})
    }
}
exports.updateMovie = async (request, response) => {
    try {
        await Movie.updateOne(
            {title: request.body.title},
            {[request.body.key]: request.body.value}
        );
        response.status(201).send({message: "Successfully updated a movie"})
    } catch (error) {
        console.log(error)
        response.status(500).send({error: error.message})
    }
}
exports.deleteMovie = async (request, response) => {
    try {
        await Movie.deleteOne({title: request.params.title});
        response.status(200).send({message: "Movie successfully deleted"})
    } catch (error) {
        console.log(error)
        response.status(500).send({error: error.message})
    }
}