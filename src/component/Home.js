import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProjects } from "../Router/getProject";
import Logo from '../aset/pt-dinartech.png';
import PT from "../aset/logo/komputer.gif";
import "../css/Home.css"; // Import file CSS
import NavHome from "./NavHome";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header2">
      <div className="logo-container">
        <img src={Logo} alt="PT. Dinar Tech Logo" className="logo2" />
      </div>
      <nav className="navbar2">
        <Link to="/" className="nav-link2">Home</Link>
        <Link to="/catalog" className="nav-link2">Katalog Produk</Link>
        <Link to="/promo" className="nav-link2">Promo</Link>
        <Link to="/service" className="nav-link2">Service</Link>
        <Link to="/website" className="nav-link2">Website</Link>
      </nav>
    </header>
      {/* Main Section */}
      <main className="main-section">
        <div className="intro-text">
          <h1>Hallo!, Selamat Datang</h1>
          <h2>Katalog Produk Excellent Computer</h2>
          <p className="subtitle">
            One Stop Solution for your Computer! <br />
            Tersedia banyak perangkat IT: Laptop, Printer, Monitor, Paket Rakit PC, Aksesoris & Service
          </p>
          <a href="/catalog" className="btn-cta">Lihat Produk Sekarang</a>
        </div>
        <img src={PT} alt="Product Image" className="product-image" />
      </main>
    </div>
  );
};

export default Home;
