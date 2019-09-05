import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';
import Footer from './components/Footer';

class App extends Component {
  state = {
    movies: [],
    searchTerm: '',
    searchError: false,
    totalResults: 0,
    currentPage: 1,
    currentMovie: null
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.state.searchTerm === '') {
      this.setState({
        searchError: true
      });

      return;
    }

    this.setState({
      searchError: false
    });

    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
         this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      })
  }  
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  nextPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.floor(this.state.totalResults / 20) + 1) return;

    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: [...data.results],
          currentPage: pageNumber
        });
      })
  }
  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({
      currentMovie: newCurrentMovie
    });
  }
  closeMovieInfo = () => {
    this.setState({
      currentMovie: null
    })
  }
  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <>
        <Navbar />
        <div className="wrapper py-5">
          {this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchError={this.state.searchError} /><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} movie={this.state.currentMovie} />}
          {this.state.totalResults > 20 && this.state.currentMovie == null && <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
