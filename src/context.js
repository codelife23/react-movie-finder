import React, { Component } from 'react';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
    state = {
        movies: [],
        searchTerm: '',
        searchError: false,
        totalResults: 0,
        numberPages: 1,
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
                totalResults: data.total_results,
                numberPages: Math.floor(data.total_results / 20) + 1
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
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                nextPage: this.nextPage,
                viewMovieInfo: this.viewMovieInfo,
                closeMovieInfo: this.closeMovieInfo
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductProvider, ProductConsumer as default };