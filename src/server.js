require('./db/connection')

const express = require('express')
const userRouter = require('./user/userRoutes')
const movieRouter = require('./movie/movieRoutes')

const server = express()
const port = process.env.PORT || 5002

server.use(express.json());
server.use(userRouter, movieRouter)

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})