import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Form from './Form'
import { useParams } from 'react-router-dom'


const NewMovie = props => {

    const navigate = useNavigate()

    // const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState('')
    // const [boxArt, setBoxArt] = useState('')
    // const [watchlength, setWatchlength] = useState(0)
    // const [rating, setRating] = useState('')
    // const [actors, setActors] = useState('')
    // const [kidFriendly, setKidFriendly] = useState(false)
    // const [yearReleased, setYearReleased] = useState(0)

    const [newMovie, setNewMovie] = useState({
        title: "",
        genre: "",
        boxArt: "",
        watchlength: "",
        rating: "",
        actors: "",
        kidFriendly: false,
        yearReleased: ""
    })

    const changeMovieHandler = (e) => {
        const newStateObject = {...newMovie}

        if (e.target.name === "kidFriendly"){
            newStateObject[e.target.name] = e.target.checked
            setNewMovie(newStateObject)
        }
        else{
            newStateObject[e.target.name] = e.target.value
            setNewMovie(newStateObject)
        }
        
    }


    const [errors, setErrors] = useState([])

    const newSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/movies',
        //{title, genre, boxArt, watchlength, rating, actors, kidFriendly, yearReleased}
        newMovie
        )
        .then( res => {
            console.log(res.data)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }


    return(
        <div>
            <Header titleText = {'New Movie'}
                    link={'/'}
                    linkText={'Return home'}
            />

            <Form 
                submitHandler = {newSubmitHandler}
                movie = {newMovie}
                errors = {errors}
                buttonText = {"Add Movie"}
                changeMovieHandler = {changeMovieHandler}
            />
            
            {/* <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input name="title" value={newMovie.title} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.title ?
                        <span>{errors.title.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Year Released:</label>
                    <input name="yearReleased" value={newMovie.yearReleased} onChange={ (e) => changeMovieHandler(e)} type='number'/>
                    <br/>
                    {
                        errors.yearReleased ?
                        <span>{errors.yearReleased.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>genre: </label>
                    <select name="genre" value={newMovie.genre} onChange={ (e) => changeMovieHandler(e)}>
                        <option defaultValue hidden>Select</option>
                        <option value="Crime Noir">Crime Noir</option>
                        <option value="Romcom">Romcom</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Animated">Animated</option>
                    </select>
                    <br/>
                    {
                        errors.genre ?
                        <span>{errors.genre.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>boxart:</label>
                    <input name="boxArt" value={newMovie.boxArt} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.boxArt ?
                        <span>{errors.boxArt.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>watchlength: </label>
                    <input name="watchlength" value={newMovie.watchlength} onChange={ (e) => changeMovieHandler(e)} type='number'/>
                    <br/>
                    {
                        errors.watchlength ?
                        <span>{errors.watchlength.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>rating: </label>
                    <select name="rating" value={newMovie.rating} onChange={ (e) => changeMovieHandler(e)}>
                        <option defaultValue hidden>Select</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                    <br/>
                    {
                        errors.rating ?
                        <span>{errors.rating.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Actor:</label>
                    <input name="actors" value={newMovie.actors} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.actors ?
                        <span>{errors.actors.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>kidFriendly:</label>
                    <input name="kidFriendly" checked={newMovie.kidFriendly} onChange={ (e) => changeMovieHandler(e)} type='checkbox'/>
                    <br/>
                    {
                        errors.kidFriendly ?
                        <span>{errors.kidFriendly.message}</span>
                        :null
                    }
                </div>

                <button>Add movie</button>

            </form> */}
        </div>
    )
}
export default NewMovie