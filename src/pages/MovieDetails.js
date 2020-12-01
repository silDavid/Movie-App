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
        <div className="movie-details container p-5">
            <div className="row justify-content-md-center no-gutters">
                <div className="col-md-4">
                    <img src={movieDetails.Poster} className="wallpaper card-img"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="display-3">{movieDetails.Title}</h1>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Genre: </strong>{movieDetails.Genre}</li>
                            <li className="list-group-item"><strong>Year: </strong>{movieDetails.Year}</li>
                            <li className="list-group-item"><strong>Runtime: </strong>{movieDetails.Runtime}</li>
                            <li className="list-group-item"><strong>IMDB Rating: </strong>{movieDetails.imdbRating}</li>
                            <li className="list-group-item"><strong>Director: </strong>{movieDetails.Director}</li>
                            <li className="list-group-item"><strong>Actors: </strong>{movieDetails.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div className="plot card mt-5">
                    <div className="card-body text-center">
                        <p className="card-footer">{movieDetails.Plot}</p>
                        <hr/>
                        <a href={`https://www.imdb.com/title/${movieDetails.imdbID}`} target="_blank" className="card-link">View IMDB Page</a>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default MovieDetails