import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductConsumer from './context';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';
import Footer from './components/Footer';

const App = () => {
  return (
    <ProductConsumer>
      {value => {
        const {currentMovie, totalResults} = value;
        return (
          <>
            <Navbar />
            <div className="wrapper py-5">
              {currentMovie == null ? <div><SearchArea /><MovieList /></div> : <MovieInfo />}
              {totalResults > 20 && currentMovie == null && <Pagination />}
            </div>
            <Footer />
          </>
        )
      }}
    </ProductConsumer>
  );
}

export default App;
