import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/sidebar.css"; // Pastikan file CSS ini ada
import Logo from "../aset/LOGO_Katalog.png";

function Sidebar() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const location = useLocation();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="d-flex">
      <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-sticky">
          <div className="d-flex flex-column mx-3 mt-4">
            <div className="mb-2 shadow-sm">
              <Link
                to="/dashboard"
                className="d-flex align-items-center text-decoration-none"
              >
                <button
                  className={`btn btn-light btn-sm d-block w-100 text-start hover-menu ${isActive(
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
                  className={`btn btn-light btn-sm d-block w-100 text-start hover-menu ${isActive(
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
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                      className="rounded-circle"
                      height="22"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-left"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
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
