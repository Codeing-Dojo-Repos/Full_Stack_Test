import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import DeleteButton from './DeleteButton'


const AllMovies = props => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res=>{
                console.log(res.data)
                setMovieList(res.data)
            })
            .catch(err => {console.log(err)})
    }, [])

    const deleteMovie = (id) =>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then( res => {
                console.log(res.data)
                removeMovieFromDom(id)
            })
            .catch(err => {console.log(err)})
    }

    const removeMovieFromDom = (id)=>{
        setMovieList(movieList.filter( movie => movie._id !== id))
    }


    return(
        <div>
            <Header titleText = {'Movies'}
                    link={'/new'}
                    linkText={'Add new movie'}
            />

            {
                movieList.map( (m, index) => (
                    <div key={m._id}>
                        <p><Link to={`/movie/${m._id}`}>{m.title}</Link></p>
                        <img width="50" src={m.boxArt} alt="img" style={{ width:"120px", height:"180px"}}/>
                        {/* <button onClick={()=>deleteMovie(m._id)}>Delete</button> */}
                        <DeleteButton deleteHandler={()=>deleteMovie(m._id)} />
                        <Link to={`/movie/edit/${m._id}`}>Edit Movie</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default AllMovies