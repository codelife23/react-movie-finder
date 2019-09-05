import React from 'react';

const MovieItem = ({movie, viewMovieInfo}) => {
    let img = '';
    movie.poster_path == null ? img = 'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' : img = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
            <a className="movie-item" href="#" onClick={() => viewMovieInfo(movie.id)}>
                <span className="img">
                    <img className="img-fluid" src={img} alt={movie.original_title} />
                </span>
                View Details
            </a>
        </div>
    )
}

export default MovieItem;