import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const OneMovie = props => {

    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then(res=>{
                console.log(res.data)
                setMovie(res.data)
            })
            .catch(err => {console.log(err)})
        }, [id]) // adding id to get rid or the error


    return(
        <div>
            <h2>{movie.title}</h2>
            <Link to={'/'}>Return Home</Link>

            <p>{movie.genre}</p>
            <p> <img src={movie.boxArt} alt=""/> </p>
            <p>{movie.watchlength}</p>
            <p>{movie.rating}</p>
            <p>{movie.actors}</p>
            <p>{movie.kidFriendly}</p>
            <p>{movie.yearReleased}</p>
        </div>
    )
}
export default OneMovie