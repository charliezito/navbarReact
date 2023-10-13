import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

function Layout() {
  return (
    <header>
        <Link to="/" className="Menu">Home</Link>
        <Link to="/about" className="Menu">About</Link>
        <Link to="/contact" className="Menu">Contact</Link>
        <Link to="/menu" className="Menu">Menu</Link>
    </header>
   
  )
}

export default Layout