import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="wrap">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-uppercase font-weight-bold">Movie Finder</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;