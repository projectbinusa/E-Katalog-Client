import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../css/Service.css"; // Pastikan file CSS ini tersedia
import NavHome from "./NavHome"; // Import NavHome
import {
  FaMobileAlt,
  FaShoppingCart,
  FaTools,
  FaLaptop,
  FaNetworkWired,
  FaCloud,
  FaCogs,
  FaCode,
  FaSitemap,
} from "react-icons/fa";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      id: 1,
      name: "Aplikasi Mobile",
      description: "Kami memiliki pengalaman dalam membuat berbagai jenis aplikasi mobile.",
      icon: <FaMobileAlt />,
    },
    {
      id: 2,
      name: "Pengadaan Barang",
      description: "Kami juga menyediakan berbagai barang, perangkat IT.",
      icon: <FaShoppingCart />,
    },
    {
      id: 3,
      name: "Perbaikan Hardware",
      description: "Memperbaiki berbagai jenis komputer, laptop, printer, proyektor, dll.",
      icon: <FaTools />,
    },
    {
      id: 4,
      name: "Hardware Setup",
      description: "Melayani pemasangan LCD proyektor, screen, CCTV setup, server setup.",
      icon: <FaLaptop />,
    },
    {
      id: 5,
      name: "IT Consultant",
      description: "Dengan pengalaman yang banyak, team kami mampu memberikan yang terbaik.",
      icon: <FaCogs />,
    },
    {
      id: 6,
      name: "Digitalization",
      description: "Menyiapkan era revolusi industri 4.0 kami siap membantu Anda.",
      icon: <FaCloud />,
    },
    {
      id: 7,
      name: "Web App Developer",
      description: "Berbagai jenis web app yang telah kami buat untuk berbagai kalangan.",
      icon: <FaCode />,
    },
    {
      id: 8,
      name: "Pembuatan Website",
      description: "Pembuatan website personal, UMKM, Perusahaan, Industri, Sekolah.",
      icon: <FaSitemap />,
    },
    {
      id: 9,
      name: "Instalasi Jaringan",
      description: "Melayani pemasangan jaringan kantor, sekolah, instansi, perusahaan, skala kecil-besar.",
      icon: <FaNetworkWired />,
    },
  ];

  return (
    <div className="home-page">
      <NavHome />
      <main className="main-section2">
        <h2 className="section-title">Produk dan Layanan Excellent Computer</h2>
        <div className="services-container">
          {services.map((service) => (
            <div key={service.id} className="service-card" data-aos="fade-up">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="footer-info">
          <p>Hubungi Kami: 0812 30 30 02 05</p>
          <p>Alamat: Semarang, Jawa Tengah</p>
        </div>
      </footer>
    </div>
  );
};

export default Service;
