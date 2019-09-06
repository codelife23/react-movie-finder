import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand text-uppercase font-weight-bold">Movie Finder</Link>
            </div>
        </nav>
    )
}

export default Navbar;