import React from 'react';
import ProductConsumer from '../context';
import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                {movies.map((movie, index) => {
                    return <MovieItem key={index} movie={movie}/>
                })}
            </div>
        </div>
    )
}

export default MovieList;