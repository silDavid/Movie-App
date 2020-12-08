import React from 'react'
import { Link } from 'react-router-dom'


const MoviesGrid = ({ movies }) => {
    return(
        <div className="d-flex flex-wrap align-items-center justify-content-center m-5">
            {movies.map((movie, key) => (
                <div key={key} className="movie-card m-3 mb-5">
                    <Link to={`/details/${movie.imdbID}`}>
                        <img src={movie.Poster} alt={movie.Title}></img>
                        <div className="movie-info movie-info--blur align-items-center d-flex justify-content-center p-2">
                            <h4 className="p-2">{movie.Title}</h4>
                            <p className="p-2"><small>{movie.Year}</small></p>
                        </div>
                    </Link >
                </div>
                )
            )}
        </div>
    )
}


export default MoviesGrid

