import React, {useState, useEffect} from 'react';
import MovieInfo from './MovieInfo';

const InfoPage = (props) => {
    const [movie, setMovie] = useState([]);

    const id = props.match.params.id;

    const fetchMovie = () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(data => data.json())
            .then(data => {
                setMovie(data)
        })
    }

    useEffect(() => {
        fetchMovie()
    }, [id]);
    
    return (
        <div className="wrapper py-5">
            <MovieInfo movie={{...movie, id}} />
        </div>
    ) 
}

export default InfoPage;