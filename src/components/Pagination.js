import React from 'react';

const Pagination = ({pages, nextPage, currentPage}) => {
    const pageLinks = [];
    let startPage, endPage;

    if (pages > 5) {
        startPage = currentPage - 2;
        endPage = currentPage + 2;

        if (startPage < 1) {
            const del = 1 - startPage;
            startPage = startPage + del;
            endPage = endPage + del;
        }

        if (endPage > pages) {
            const del = endPage - pages;
            startPage = startPage - del;
            endPage = endPage - del;
        }
    } else {
        startPage = 1;
        endPage = pages;
    }

    for(let i = startPage; i<= endPage; i++) {
        let active = currentPage === i ? 'active' : '';
        pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={() => nextPage(i)}>
            <a className="page-link" href="#">{i}</a>
        </li>)
    }

    return (
        <div className="container">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mt-4 mb-0">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => nextPage(1)}>
                        <a className="page-link" href="#">{'1'}</a>
                    </li>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => nextPage(currentPage - 1)}>
                        <a className="page-link" href="#">{'<'}</a>
                    </li>
                    
                    {pageLinks}

                    <li className={`page-item ${currentPage === pages ? 'disabled' : ''}`} onClick={() => nextPage(currentPage + 1)}>
                        <a className="page-link" href="#">{'>'}</a>
                    </li>
                    <li className={`page-item ${currentPage === pages ? 'disabled' : ''}`} onClick={() => nextPage(pages)}>
                        <a className="page-link" href="#">{pages}</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;