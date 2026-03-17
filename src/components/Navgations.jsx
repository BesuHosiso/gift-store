import '../App.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Navgations = () => {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ''}>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : 'link'}>Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navgations;
