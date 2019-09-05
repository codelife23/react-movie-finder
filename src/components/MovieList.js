import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, viewMovieInfo}) => {
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                {movies.map((movie, index) => {
                    return <MovieItem key={index} viewMovieInfo={viewMovieInfo} movie={movie}/>
                })}
            </div>
        </div>
    )
}

export default MovieList;