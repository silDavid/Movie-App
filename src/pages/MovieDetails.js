import React, { useState, useEffect } from 'react';

import '../app.css';



const MovieDetails = ({ match }) => {
    const [movieDetails, setMovieDetails] = useState("")
    
    useEffect(() => { 
        fetchMovie()
     }, [])

    const fetchMovie = async () => {
        const fetchMovie = await fetch(`https://www.omdbapi.com/?apikey=38a4e33c&i=${match.params.id}`)
        
        const movie = await fetchMovie.json()
        setMovieDetails(movie)
        console.log(movie)
    }


    return (
        <div className="movie-details col-md-4">
            <div>
                <img src={movieDetails.Poster}></img>
            </div>
            <div className="col-mid-8">
                <h1>{movieDetails.Title}</h1>
                <ul className="list-group">
                    <li className="list-group-item"><strong>Genre: </strong>{movieDetails.Genre}</li>
                    <li className="list-group-item"><strong>Released: </strong>{movieDetails.Released}</li>
                    <li className="list-group-item"><strong>Rated: </strong>{movieDetails.Rated}</li>
                    <li className="list-group-item"><strong>IMDB Rating: </strong>{movieDetails.imdbRating}</li>
                    <li className="list-group-item"><strong>Director: </strong>{movieDetails.Director}</li>
                    <li className="list-group-item"><strong>Writer: </strong>{movieDetails.Writer}</li>
                    <li className="list-group-item"><strong>Actors: </strong>{movieDetails.Actors}</li>
                </ul>
            </div>
            <div className="container mt-5">
                <div className="card text-center">
                    <h3>Plot</h3>
                    {movieDetails.Plot}
                    <hr/>
                    <a href={`https://www.imdb.com/title/${movieDetails.imdbID}`} target="_blank" className="btn btn-primary btn-lg">View IMDB Page</a>
                </div>    
            </div>
        </div>
    )
}

export default MovieDetails