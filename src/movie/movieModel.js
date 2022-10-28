const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie