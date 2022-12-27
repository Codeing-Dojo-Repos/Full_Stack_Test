import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Form from './Form'

const EditMovie = props => {

    // const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState('')
    // const [boxArt, setBoxArt] = useState('')
    // const [watchlength, setWatchlength] = useState(0)
    // const [rating, setRating] = useState('')
    // const [actors, setActors] = useState('')
    // const [kidFriendly, setKidFriendly] = useState(false)
    // const [yearReleased, setYearReleased] = useState(0)

    const [editMovie, setEditMovie] = useState({
        title: "",
        genre: "",
        boxArt: "",
        watchlength: "",
        rating: "",
        actors: "",
        kidFriendly: false,
        yearReleased: ""
    })

    const {id} = useParams()
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res=>{
            // console.log(res.data)
            // setTitle(res.data.title)
            // setGenre(res.data.genre)
            // setBoxArt(res.data.boxArt)
            // setWatchlength(res.data.watchlength)
            // setRating(res.data.rating)
            // setActors(res.data.actors)
            // setKidFriendly(res.data.kidFriendly)
            // setYearReleased(res.data.yearReleased)
            setEditMovie(res.data)
        })
        .catch(err => {console.log(err)})
    }, [])

    const editSubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/movies/${id}`,
            //{title, genre, boxArt, watchlength, rating, actors, kidFriendly, yearReleased}
            editMovie
        )
        .then( res => {
            console.log(res.data)
            navigate('/')
        })
        .catch( err => {
            console.log(err)
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })

        // setTitle('')
        // setGenre('')
        // setBoxArt('')
        // setWatchlength(0)
    }

    const changeMovieHandler = (e) => {
        const newStateObject = {...editMovie}

        if (e.target.name === "kidFriendly"){
            newStateObject[e.target.name] = e.target.checked
            setEditMovie(newStateObject)
        }
        else{
            newStateObject[e.target.name] = e.target.value
            setEditMovie(newStateObject)
        }
        
    }

    return(
        <div>
            <Header titleText = {'Edit Movie'}
                    link={'/'}
                    linkText={'Return home'}
            />

            <Form 
                submitHandler = {editSubmitHandler}
                movie = {editMovie}
                errors = {errors}
                buttonText = {"Edit Movie"}
                changeMovieHandler = {changeMovieHandler}
            />

            {/* <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input value={title} onChange={ (e) => setTitle(e.target.value)} type='text'/>
                </div>

                <div>
                    <label>Year Released:</label>
                    <input value={yearReleased} onChange={ (e) => setYearReleased(e.target.value)} type='number'/>
                </div>

                <div>
                    <label>genre: </label>
                    <select value={genre} name="genre" onChange={ (e) => setGenre(e.target.value)}>
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
                </div>

                <div>
                    <label>boxart:</label>
                    <input value={boxArt} onChange={ (e) => setBoxArt(e.target.value)} type='text'/>
                </div>

                <div>
                    <label>watchlength: </label>
                    <input value={watchlength} onChange={ (e) => setWatchlength(e.target.value)} type='number'/>
                </div>

                <div>
                    <label>rating: </label>
                    <select value={rating} name="genre" onChange={ (e) => setRating(e.target.value)}>
                        <option defaultValue hidden>Select</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                </div>

                <div>
                    <label>Actor:</label>
                    <input value={actors} onChange={ (e) => setActors(e.target.value)} type='text'/>
                </div>

                <div>
                    <label>kidFriendly:</label>
                    <input checked={kidFriendly} onChange={ (e) => setKidFriendly(e.target.checked)} type='checkbox'/>
                </div>

                <button>Add movie</button>

            </form> */}
        </div>
    )
}
export default EditMovie