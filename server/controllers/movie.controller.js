const MovieModel = require('../models/movie.model')


module.exports = {

    findAllMovies: (req,res) => {
        console.log('inside findAllMovies')
    
        MovieModel.find({})
            .then( (movieObj) => {
                console.log(movieObj)
                res.json(movieObj)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                res.status(500).send(err)
            })
    },

    createMovie: (req,res) => {
        console.log('inside createMovie')
        console.log(req.body)

        MovieModel.create(req.body)
            .then( (movieObj) => {
                console.log('Great Success! Movie written')
                res.json(movieObj)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                res.status(500).json(err)
            })
    },

    findMovieById: (req,res) => {
        console.log('inside findMovieById')
    
        MovieModel.findOne({_id:req.params._id})
            .then( (movieObj) => {
                console.log(movieObj)
                return res.json(movieObj)
            })
            .catch( (err) => {
                console.log(`err: ${err}`)
                return res.status(500).send(err)
            })
    },

    deleteMovie: (req,res) => {
        console.log('inside deleteMovie')
        //console.log(req)
        console.log(req.params)
    
        MovieModel.deleteOne({_id:req.params._id})
            .then( deletedMovie => {
                console.log('Great Success! Movie deleted')
                console.log(deletedMovie)
                return res.json(deletedMovie)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                return res.status(500).send(err)
            })
    },

    updateMovie: (req, res) => {
        MovieModel.findOneAndUpdate({_id:req.params._id},
            req.body,
            {new:true, runValidators:true}
            )
            .then(updatedMovie => {
                console.log('updated movie: ' + updatedMovie)
                res.json(updatedMovie)
            })
            .catch( (err) => {
                console.log(`error: ${err}`)
                return res.status(500).send(err)
            })
    }

}