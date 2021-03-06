import React from 'react';
import history from '../history';

const MovieInfo = ({movie}) => {
    let img = '';
    movie.poster_path == null ? img = 'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' : img = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="container">
            <div className="go-back">
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-12.5-92.5l-115.1-115c-4.7-4.7-4.7-12.3 0-17l115.1-115c4.7-4.7 12.3-4.7 17 0l6.9 6.9c4.7 4.7 4.7 12.5-.2 17.1L181.7 239H372c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12H181.7l85.6 82.5c4.8 4.7 4.9 12.4.2 17.1l-6.9 6.9c-4.8 4.7-12.4 4.7-17.1 0z" className=""></path></svg>
                <span onClick={() => history.goBack()} style={{cursor: 'pointer'}}>Go back</span>
            </div>

            <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-4">
                <img src={img} alt={movie.original_title} style={{width: "100%", height: "auto"}} />
                </div>

                <div className="col-sm-6 col-md-7 col-lg-8">
                    <div className="info-txt">
                        <h1>{movie.title}</h1>
                        <p>{movie.release_date}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;