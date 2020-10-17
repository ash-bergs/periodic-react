import React from 'react'
import { Link } from 'react-router-dom'; 

import { menuItems } from '../data/menuItems'; 

const Navbar = () => {
    return (
        <nav className="navbar-items">
            <span className="logo">
                <div>{/* this will be a logo image eventually */}</div>
            </span>
            {/* we want to do this task once for all of the menu items, instead of having to manually change this code later */}
            {/* menu items can be found at ../data/menuItems.js */}
            <ul>
            {menuItems.map((item) => {
                return (
                    <li><Link className={item.clame} to={item.path}>
                        {item.title}
                    </Link></li>
                )
            })}
            </ul>
        </nav>
    );
};

export default Navbar; 