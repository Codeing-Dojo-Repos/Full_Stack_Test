import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import DeleteButton from './DeleteButton'

const OneMovie = props => {

    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then(res=>{
                console.log(res.data)
                setMovie(res.data)
            })
            .catch(err => {console.log(err)})
    }, [id]) // adding id to get rid or the error

    const deleteMovie = () =>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then( res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {console.log(err)})
    }

    return(
        <div>
            <Header titleText = {movie.title}
                    link={'/'}
                    linkText={'Return home'}
            />

            {/* <h2>{movie.title}</h2>
            <Link to={'/'}>Return Home</Link> */}

            <p>{movie.genre}</p>
            <p> <img src={movie.boxArt} alt="" style={{ width:"120px", height:"180px"}} /> </p>
            <p>{movie.watchlength}</p>
            <p>{movie.rating}</p>
            <p>{movie.actors}</p>
            <p>{movie.kidFriendly}</p>
            <p>{movie.yearReleased}</p>
            {/* <button onClick={deleteMovie}>Delete</button> */}
            <DeleteButton deleteHandler={deleteMovie}/>
        </div>
    )
}
export default OneMovie