import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/sidebar.css"; // Pastikan file CSS ini ada
import Logo from "../aset/LOGO_Katalog.png";
import { getAdminById } from "../Router/Getprofile";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      const fetchAdmin = async () => {
        try {
          const adminData = await getAdminById(id);
          console.log("Admin Data:", adminData); // Tambahkan ini untuk debugging
          if (adminData && adminData.image) {
            setProfilePic(adminData.image);
          } else {
            setProfilePic(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
            ); // Gambar default
          }
        } catch (error) {
          console.error("Failed to fetch admin:", error);
        }
      };

      fetchAdmin();
    }
  }, [id]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="d-flex">
      <nav className={`sidebar ${showSidebar ? "show" : ""} shadow`}>
        <div className="sidebar-sticky">
          <div className="d-flex flex-column mx-3 mt-4">
            <div className="mb-2 shadow-sm">
              <Link
                to="/dashboard"
                className="d-flex align-items-center text-decoration-none"
              >
                <button
                  className={`btn d-block w-100 text-start ${isActive(
                    "/dashboard"
                  )}`}
                >
                  <FontAwesomeIcon icon={faGaugeHigh} className="me-2" />
                  <b>Dashboard</b>
                </button>
              </Link>
            </div>
            <div className="mb-2 shadow-sm">
              <Link
                to="/listprojek"
                className="d-flex align-items-center text-decoration-none"
              >
                <button
                  className={`btn btn-sm d-block w-100 text-start ${isActive(
                    "/listprojek"
                  )}`}
                >
                  <FontAwesomeIcon icon={faGaugeHigh} className="me-2" />
                  <b>List Projek</b>
                </button>
              </Link>
            </div>
            <div className="flex-grow-1">
              {/* Tambahkan item menu lainnya di sini jika diperlukan */}
            </div>
          </div>
        </div>
      </nav>

      <div className={`content ${showSidebar ? "shift" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="logo">
              <img src={Logo} alt="Logo" loading="lazy" />
            </div>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown profile">
                  <a
                    className="nav-link"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={profilePic}
                      className="rounded-circle"
                      height="35"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-left"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li> 
                    <li>
                      <Link className="dropdown-item" to="/gantipass">
                        Forgot Password
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Konten utama */}
        <main>{/* Konten halaman Anda di sini */}</main>
      </div>
    </div>
  );
}

export default Sidebar;
