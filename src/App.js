import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Movie from './components/Movie'
import Details from './components/Details'

import './index.css';

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      fetch(`https://www.omdbapi.com/?apikey=38a4e33c&s=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.Search)
        })
        .catch(error => console.log(error))
        setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Router>
      <>
        <header>
          <Link className="link col align-self-start mt-5" to="/" >MovieApp</Link>
          <form className="d-flex justify-content-center p-4" onSubmit={handleOnSubmit} >
            <input 
              className="search" 
              type="text" 
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleOnChange}
              >
            </input>
          </form>
        </header>
        <Route exact path='/' render={props => (
          <div className="row col-12 align-items-center justify-content-center p-4">
            {movies.map(movie => (
              <Movie key={movie.imdbID} {...movie}/>             
            ))}
          </div>
        )}/>
        <Route path="/details" render={props => (
          <div className="details-container">         
                <Details />
          </div>
        )} />
      </>
    </Router>
  );
}

export default App;
