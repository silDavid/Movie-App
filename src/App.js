import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import MoviesGrid from './components/MoviesGrid'
import MovieDetails from './pages/MovieDetails'

import './app.css';

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      fetch(`https://www.omdbapi.com/?apikey=38a4e33c&s=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
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
          <Link className="link d-flex pt-4 pl-3" to="/" >MovieApp</Link>
          <form className="d-flex justify-content-center pb-5" onSubmit={handleOnSubmit} >
            <input 
              className="search rounded-pill p-3" 
              type="text" 
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleOnChange}
              >
            </input>
          </form>
        </header>
        <Switch>
          <Route exact path='/' render={props => (
            <div className="d-flex flex-wrap justify-content-around m-5">
              {movies.map(movie => (
                <MoviesGrid key={movie.imdbID} {...movie}/>          
              ))}
            </div>
          )}/>
          <Route path="/details/:id" component={MovieDetails} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
