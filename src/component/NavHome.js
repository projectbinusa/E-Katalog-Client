import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../aset/pt-dinartech.png'; 
import '../css/NavHome.css';

const NavHome = () => {
  return (
    <header className="header2">
      <div className="logo-container">
        <img src={Logo} alt="Excellent Computer Logo" className="logo2" />
        <input type="text" placeholder="Search..." className="search-input" /> {/* Input pencarian */}
      </div>
      <nav className="navbar2">
        <Link to="/" className="nav-link2">Home</Link>
        <Link to="/catalog" className="nav-link2">Katalog Produk</Link>
        <Link to="/promo" className="nav-link2">Promo</Link>
        <Link to="/service" className="nav-link2">Service</Link>
        <Link to="/website" className="nav-link2">Website</Link>
      </nav>
    </header>
  );
};

export default NavHome;
