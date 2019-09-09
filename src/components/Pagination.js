import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import ProductConsumer from '../context';

const Pagination = ({totalPages, currentPage, location}) => {
    //const {totalPages, nextPage, currentPage} = value;
    const nextPage = () => {
        console.log('next');
    }
    const pageLinks = [];
    let startPage, endPage;

    if (totalPages > 5) {
        startPage = currentPage - 2;
        endPage = currentPage + 2;

        if (startPage < 1) {
            const del = 1 - startPage;
            startPage = startPage + del;
            endPage = endPage + del;
        }

        if (endPage > totalPages) {
            const del = endPage - totalPages;
            startPage = startPage - del;
            endPage = endPage - del;
        }
    } else {
        startPage = 1;
        endPage = totalPages;
    }

    let query = queryString.parse(location.search);
    
    for(let i = startPage; i<= endPage; i++) {
        let active = currentPage === i ? 'active' : '';
        let url = location.pathname + `?${queryString.stringify({...query, page: i})}`;
        pageLinks.push(<li className={`page-item ${active}`} key={i}>
            <Link className="page-link" to={url}>{i}</Link>
        </li>)
    }

    return (
        <div className="container">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mt-4 mb-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link className="page-link" to={location.pathname + `?${queryString.stringify({...query, page: 1})}`}>{'1'}</Link>
                    </li>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <Link className="page-link" to={location.pathname + `?${queryString.stringify({...query, page: currentPage-1})}`}>{'<'}</Link>
                    </li>
                    
                    {pageLinks}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link className="page-link" to={location.pathname + `?${queryString.stringify({...query, page: currentPage+1})}`}>{'>'}</Link>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <Link className="page-link" to={location.pathname + `?${queryString.stringify({...query, page: totalPages})}`}>{totalPages}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;