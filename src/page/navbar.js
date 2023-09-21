import React from 'react';
import {NavLink } from 'react-router-dom';
import "../style/navbar.css";


function Navbar() {
    return(
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            
           
        </nav>
    )
}
export default Navbar;