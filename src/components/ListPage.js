import React from 'react';
import ProductConsumer from '../context';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';

const ListPage = () => {
    return (
        <ProductConsumer>
        {value => {
            const {totalResults, movies} = value;
            return(
                <div className="wrapper py-5">
                    <SearchArea />
                    {movies && <MovieList />}
                    {totalResults > 20 && <Pagination />}
                </div>
            )
        }}
       </ProductConsumer>
    ) 
}

export default ListPage;