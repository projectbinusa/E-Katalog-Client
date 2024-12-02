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

import NavHome from "./NavHome"; // Import NavHome

function Catalog() {
  return (
    <>
      <NavHome />
      <h1 className="text-center text-3xl font-bold mt-6 mb-8 block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
        Silahkan Pilih Produk
      </h1>
      {/* Product List Component */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {[ 
          { src: KB, alt: "Keyboard", label: "Keyboard" },
          { src: MNTR, alt: "Monitor", label: "Monitor" },
          { src: PJTR, alt: "Proyektor", label: "Proyektor" },
          { src: KBM, alt: "Keyboard Mouse", label: "Keyboard Mouse" },
          { src: PC, alt: "CPU", label: "CPU" },
          { src: PCSet, alt: "PC Set", label: "PC Setup" },
        ].map((product, index) => (
          <Link key={index} to="/cardproduct">
            <div className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-32 object-cover transition-transform duration-300 transform group-hover:scale-105" // Ubah h-48 menjadi h-32
              />
              <div className="p-4 bg-white">
                <h3 className="text-center font-medium text-gray-900">
                  {product.label}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* End Product List Component */}
      {/* Button Back */}
      <div className="flex justify-center mt-8 mb-10">
        <Link to="/">
          <button className="px-20 py-4 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
      {/* End Button Back */}

    </>
  );
}

export default Catalog;
