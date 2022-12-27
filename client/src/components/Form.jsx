import React from "react"

const Form = (props) => {

    const {submitHandler, changeMovieHandler, movie, errors, buttonText} = props

    return (
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label>Title:</label>
                    <input name="title" value={movie.title} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.title ?
                        <span>{errors.title.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Year Released:</label>
                    <input name="yearReleased" value={movie.yearReleased} onChange={ (e) => changeMovieHandler(e)} type='number'/>
                    <br/>
                    {
                        errors.yearReleased ?
                        <span>{errors.yearReleased.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>genre: </label>
                    <select name="genre" value={movie.genre} onChange={ (e) => changeMovieHandler(e)}>
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
                    <input name="boxArt" value={movie.boxArt} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.boxArt ?
                        <span>{errors.boxArt.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>watchlength: </label>
                    <input name="watchlength" value={movie.watchlength} onChange={ (e) => changeMovieHandler(e)} type='number'/>
                    <br/>
                    {
                        errors.watchlength ?
                        <span>{errors.watchlength.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>rating: </label>
                    <select name="rating" value={movie.rating} onChange={ (e) => changeMovieHandler(e)}>
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
                    <input name="actors" value={movie.actors} onChange={ (e) => changeMovieHandler(e)} type='text'/>
                    <br/>
                    {
                        errors.actors ?
                        <span>{errors.actors.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>kidFriendly:</label>
                    <input name="kidFriendly" checked={movie.kidFriendly} onChange={ (e) => changeMovieHandler(e)} type='checkbox'/>
                    <br/>
                    {
                        errors.kidFriendly ?
                        <span>{errors.kidFriendly.message}</span>
                        :null
                    }
                </div>

                <button>{buttonText}</button>

            </form>
        </div>
    )
}

export default Form