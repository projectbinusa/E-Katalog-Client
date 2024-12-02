import React from "react";
import { Link } from "react-router-dom";
import KB from "./../aset/logo/1.png";
import MNTR from "./../aset/logo/2.png";
import PJTR from "./../aset/logo/3.png";
import KBM from "./../aset/logo/4.png";
import PC from "./../aset/logo/5.png";
import PCSet from "./../aset/logo/6.png";
import Laptop from "./../aset/logo/7.jpeg";
import SPR from "./../aset/logo/8.jpeg";
import CCTV from "./../aset/logo/9.jpeg";
import HST from "./../aset/logo/10.jpeg";
import AJK from "./../aset/logo/11.jpeg";
import PKR from "./../aset/logo/12.jpeg";
import NavHome from "./NavHome";
import '../css/Catalog.css';

function Catalog() {
  const categories = [
    { src: KB, alt: "Keyboard", label: "Keyboard" },
    { src: MNTR, alt: "Monitor", label: "Monitor" },
    { src: PJTR, alt: "Proyektor", label: "Proyektor" },
    { src: KBM, alt: "Keyboard Mouse", label: "Keyboard Mouse" },
    { src: PC, alt: "CPU", label: "CPU" },
    { src: PCSet, alt: "PC Set", label: "PC Setup" },
    { src: Laptop, alt: "Laptop", label: "Laptop" },
    { src: SPR, alt: "Speaker", label: "Speaker" },
    { src: CCTV, alt: "Cctv", label: "Cctv" },
    { src: HST, alt: "Heandset", label: "Heandset" },
    { src: AJK, alt: "Alat Jaringan", label: "Alat Jaringan" },
    { src: PKR, alt: "Proyektor", label: "Proyektor" },
  ];

  const promoImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazvZQb7lxANcTLZd9h1ncPIq98u0mkj8KJA&s",
      alt: "Promo 1",
    },
    {
      src: "https://i0.wp.com/semaker.id/wp-content/uploads/2018/02/PT.-Dinartech-Share-E.jpg?fit=588%2C369&ssl=1",
      alt: "Promo 2",
    },
  ];

  return (
    <>
      <NavHome />
      <div className="container py-4">
        <div className="card-header-with-accent">
          <div className="card-body">
            <h4>KATEGORI</h4>
          </div>
          <div className="card-footer-accent"></div>
        </div>
        <div className="row g-3">
          {categories.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <Link to="/cardproduct" className="text-decoration-none">
                <div className="card shadow border-0">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-dark">{product.label}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="card-header-with-accent">
          <div className="card-body">
            <h4>KATEGORI</h4>
          </div>
          <div className="card-footer-accent"></div>
        </div>
        <div className="row g-3">
          {categories.map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <Link to="/cardproduct" className="text-decoration-none">
                <div className="card shadow border-0">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-dark">{product.label}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Catalog;
