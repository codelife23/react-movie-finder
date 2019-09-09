import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import { goToUrl } from '../history';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';

const ListPage = (props) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setPages] = useState(1);
    const [currentPage, setCurrent] = useState(1);

    const apiKey = process.env.REACT_APP_API_KEY;
    let search = queryString.parse(props.location.search);
    search = {...search, api_key: apiKey};
    search = queryString.stringify(search);

    const fetchMovies = (signal) => {
        fetch(`https://api.themoviedb.org/3/search/movie?${search}`, {signal})
            .then(data => data.json())
            .then(data => {
                if (data.results) {
                    setMovies([...data.results]);
                    setPages(data.total_pages);
                    setCurrent(data.page);
                } else {
                    goToUrl('/');
                }
            });
    }

    useEffect(() => {
        const abortController = new AbortController();

        fetchMovies(abortController.signal);

        return () => {abortController.abort()};
    }, [search]);

    return (
        <div className="wrapper py-5">
            <SearchArea />
            {movies && <MovieList movies={movies}/>}
            {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} location={props.location} />}
        </div>
            
    ) 
}

export default ListPage;