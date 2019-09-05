import React from 'react';

const Pagination = ({pages, nextPage, currentPage}) => {
    const pageLinks = [];

    for(let i = 1; i<= pages + 1; i++) {
        let active = currentPage === i ? 'active' : '';
        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => nextPage(i)}>
            <a className="page-link" href="#">{i}</a>
        </li>)
    }

    return (
        <div className="container">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mt-4 mb-0">
                    <li className={currentPage > 1 ? 'page-item' : 'page-item disabled'} onClick={() => nextPage(currentPage - 1)}>
                        <a className="page-link" href="#">Prev</a>
                    </li>
                    
                    {pageLinks}

                    <li className={currentPage < pages + 1 ? 'page-item' : 'page-item disabled'} onClick={() => nextPage(currentPage + 1)}>
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;