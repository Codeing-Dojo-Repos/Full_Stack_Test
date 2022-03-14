const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true,'movie title required'],
        maxlength:[30, 'title length <= 30']
    },
    genre:{
        type: String,
        required: [true,'genre required'],
        enum:[
            "Crime Noir",
            "Romcom",
            "Horror",
            "Sci-Fi",
            "Documentary",
            "Comedy",
            "Action",
            "Thriller",
            "Animated",
            "Family",
            "Drama"
        ]
    },

    boxArt:{
        type:String,
        required:[true,"we like pictures"]
    },
    watchlength:{
        type:Number
    },
    rating:{
        type:String,
        enum:['G', 'PG', 'PG-13', 'R', 'NC-17']
    },
    actors:{
        type: String
    },
    kidFriendly:{
        type: Boolean,
        required: [true, "for kids?"]
    },
    yearReleased:{
        type:Number,
        min:[1920, 'nothing too old']
    }
}, {timestamps: true})

const collection = 'Movie'
const MovieModel = mongoose.model(collection, MovieSchema);
module.exports = MovieModel;