import React from 'react'
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav>
            <Link to="/periodic-table">Periodic Table</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    );
};

export default Navbar; 