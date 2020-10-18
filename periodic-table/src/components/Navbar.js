import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

import '../styles/navbar.css'; 

import { menuItems } from '../data/menuItems'; 

const Navbar = () => {
    {/* to set menu open or closed */}
    const [ menuToggle, setMenuToggle ] = useState(false); 

    function toggleMenu() {
        setMenuToggle(!menuToggle); 
    }

    return (
        <nav className="navbar">
            <h2 className="logo"><i class="fas fa-vial"></i>Explore</h2>
            {/* 
                menu items iterated through to create Links 
                they can be found in '../data/menuItems.js'
            */}
            <div className="links-wrapper">
                { menuToggle ? 
                <ul className="navbar-links">
                {menuItems.map((item, index) => {
                    return (
                        <li className="navbar-link" key={index}>
                            <Link className={item.clame} to={item.path} style={{ order: index}}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                </ul> : null }
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i class={ menuToggle ? "fas fa-times": "fas fa-ellipsis-h"}></i>
            </div>
        </nav>
    );
};

export default Navbar; 