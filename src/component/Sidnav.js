import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import Logo from "../aset/LOGO_Katalog.png";
import { getAdminById } from "../Router/Getprofile"; // Sesuaikan path jika perlu

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      const fetchAdmin = async () => {
        try {
          const adminData = await getAdminById(id);
          console.log("Admin Data:", adminData);
          if (adminData && adminData.image) {
            setProfilePic(adminData.image);
          } else {
            setProfilePic(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
            );
          }
        } catch (error) {
          console.error("Failed to fetch admin:", error);
        }
      };

      fetchAdmin();
    }
  }, [id]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

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
                  <FontAwesomeIcon icon={faCubes} className="me-2" />
                  <b>List Projek</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`content ${showSidebar ? "shift" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="logo ms-2">
              <img src={Logo} alt="Logo" loading="lazy" />
            </div>

            <div className="collapse navbar-collapse ms-auto">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown profile">
                  <a
                    className="nav-link"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    onClick={toggleDropdown}
                    aria-expanded={showDropdown}
                  >
                    <img
                      src={profilePic}
                      className="rounded-circle"
                      height="40"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  {showDropdown && (
                    <ul
                      className="dropdown-menu dropdown-menu-left show"
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
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>{/* Content goes here */}</main>
      </div>
    </div>
  );
}

export default Sidebar;
