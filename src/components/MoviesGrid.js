import { Link } from 'react-router-dom'

import '../app.css';



const MoviesGrid = ({ Title, Poster, Year, imdbID }) => {


    return(
        <Link to={`/details/${imdbID}`}>
            <div className="movie-card m-4 pb-4">
                <img src={Poster} alt={Title}></img>
                <div className="movie-info d-flex align-items-center d-flex justify-content-between pt-2 bolded">
                    <h4 className="title">{Title}</h4>
                    <span>{Year}</span>
                </div>
            </div>
        </Link>
    )
}


export default MoviesGrid

