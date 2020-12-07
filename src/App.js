import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import MoviesGrid from './components/MoviesGrid'
import MovieDetails from './pages/MovieDetails'
import SearchBar from './components/SearchBar'

import './app.css';


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => { 
    getMovieRequest(searchTerm)
  }, [searchTerm])

  const getMovieRequest = async (searchTerm) => {
    setMovies([])
    const fetchMovies = await fetch(`https://www.omdbapi.com/?apikey=38a4e33c&s=${searchTerm}`)

    const moviesArray = await fetchMovies.json()
    if(moviesArray.Search) {
      setMovies(moviesArray.Search) 
    }
  }

  return (
    <Router>
      <>
        <Route exact path='/' render={props => (
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          )}/>
        <Switch>
          <Route exact path='/' render={props => (
            <MoviesGrid movies={movies} />          
          )}/>
          <Route path="/details/:id" component={MovieDetails} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
