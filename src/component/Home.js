import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProjects } from "../Router/getProject"; // Pastikan ini berfungsi dengan benar
import Logo from '../aset/pt-dinartech.png'; 
import PT from "../aset/logo/komputer.gif"; // Sesuaikan path gambar produk jika diperlukan
import "../css/Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        if (Array.isArray(projectData)) {
          const sortedProjects = projectData.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setProjects(sortedProjects);
        } else {
          console.error("Invalid project data:", projectData);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-page">
     <header className="header2">
      <img src={Logo} alt="Excellent Computer Logo" className="logo2" />
      <nav className="navbar2">
        <Link to="/" className="nav-link2">Home</Link>
        <Link to="/catalog" className="nav-link2">Katalog Produk</Link>
        <Link to="/promo" className="nav-link2">Promo</Link>
        <Link to="/service" className="nav-link2">Service</Link>
        <Link to="/website" className="nav-link2">Website</Link>
      </nav>
    </header>
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
