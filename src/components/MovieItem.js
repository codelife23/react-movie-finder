import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {
    let img = '';
    movie.poster_path == null ? img = 'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' : img = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
            <Link to={`/info/${movie.id}`} className="movie-item">
                <span className="img">
                    <img className="img-fluid" src={img} alt={movie.original_title} />
                </span>
                {movie.original_title}
            </Link>
        </div>
    )
}

export default MovieItem;