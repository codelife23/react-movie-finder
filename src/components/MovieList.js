import React from 'react';
import ProductConsumer from '../context';
import MovieItem from './MovieItem';

const MovieList = () => {
    return (
        <ProductConsumer>
        {value => {
            const {movies, viewMovieInfo} = value;
            return (
                <div className="container-fluid mt-4">
                    <div className="row">
                        {movies.map((movie, index) => {
                            return <MovieItem key={index} viewMovieInfo={viewMovieInfo} movie={movie}/>
                        })}
                    </div>
                </div>
            )
        }}
        </ProductConsumer>
    )
}

export default MovieList;