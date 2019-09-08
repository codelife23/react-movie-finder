import React, { Component } from 'react';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
    state = {
        movies: [],
        searchTerm: '',
        totalResults: 0,
        numberPages: 1,
        currentPage: 1,
        currentMovie: null,
        search: {
            query: '',
            page: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        // if (this.state.searchTerm === '') {
        //     this.setState({
        //         searchError: true
        //     });

        //     return;
        // }

        // this.setState({
        //     searchError: false
        // });
        
        // const apiKey = process.env.REACT_APP_API_KEY;
        
        // const queryTerm = e.target.querySelector('input').value;
        // goToUrl('/list', {query: queryTerm});

        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${queryTerm}`)
        //     .then(data => data.json())
        //     .then(data => {
        //         this.setState({
        //         movies: [...data.results],
        //         totalResults: data.total_results,
        //         numberPages: Math.floor(data.total_results / 20) + 1
        //     });
        // })
    }  
    nextPage = (pageNumber) => {
        // if (pageNumber < 1 || pageNumber > Math.floor(this.state.totalResults / 20) + 1) return;

        // const apiKey = process.env.REACT_APP_API_KEY;
        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
        //     .then(data => data.json())
        //     .then(data => {
        //     this.setState({
        //         movies: [...data.results],
        //         currentPage: pageNumber
        //     });
        // })
    }
    viewMovieInfo = (id) => {
        // const filteredMovie = this.state.movies.filter(movie => movie.id === id);
        // const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        
        // const apiKey = process.env.REACT_APP_API_KEY;
        // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        //     .then(data => data.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             currentMovie: data
        //         });
        // })
        // this.setState({
        //     currentMovie: newCurrentMovie
        // });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSubmit: this.handleSubmit,
                nextPage: this.nextPage,
                viewMovieInfo: this.viewMovieInfo
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductProvider, ProductConsumer as default };