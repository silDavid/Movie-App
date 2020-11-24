import React from 'react';
import { Link } from 'react-router-dom'


const Movie = ({ Title, Poster, Plot, Year, imdbID }) => (
    <Link to="/details">
        <div className="movie-container m-4">
            <img src={Poster} alt={Title}></img>
            <div className="movie-info d-flex align-items-center justify-content-between">
                <h4>{Title}</h4>
                <span>{Year}</span>
            </div>
        </div>
    </Link>
)

export default Movie

