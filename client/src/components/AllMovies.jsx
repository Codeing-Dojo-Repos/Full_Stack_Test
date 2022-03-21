import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


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



    return(
        <div>
            <h2>Movie Mania</h2>
            <Link to={'/new'}>Add New Movie</Link>
            {
                movieList.map( (m, index) => (
                    <div key={m._id}>
                        <p><Link to={`/movie/${m._id}`}>{m.title}</Link></p>
                        <img width="50" src={m.boxArt} alt="img" style={{ width:"120px", height:"180px"}}/>
                    </div>
                ))
            }
        </div>
    )
}
export default AllMovies