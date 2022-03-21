const MovieController = require('../controllers/movie.controller')

module.exports= (app) => {
    app.get('/api/movies', MovieController.findAllMovies)

    app.post('/api/movies', MovieController.createMovie)

    app.get('/api/movies/:_id', MovieController.findMovieById)

    app.delete('/api/movies/:_id', MovieController.deleteMovie)

    app.put('/api/movies/:_id', MovieController.updateMovie)
}