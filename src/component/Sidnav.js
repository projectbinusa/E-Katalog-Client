import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import "../css/sidebar.css";
import Logo from "../aset/LOGO_Katalog.png";
import { getAdminById } from "../Router/Getprofile";
import Swal from "sweetalert2";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false); // Default to hidden on small screens
  const [showDropdown, setShowDropdown] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    console.log("Sidebar is now:", showSidebar ? "Visible" : "Hidden");
  }, [showSidebar]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true); // Always show sidebar on larger screens
      } else {
        setShowSidebar(false); // Hide sidebar on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (id) {
      const fetchAdmin = async () => {
        try {
          const adminData = await getAdminById(id);
          if (adminData && adminData.image) {
            // Add timestamp to URL to prevent caching
            setProfilePic(`${adminData.image}?${new Date().getTime()}`);
          } else {
            setProfilePic(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
            );
          }
        } catch (error) {
          console.error("Failed to fetch admin:", error);
          setProfilePic(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
          );
        }
      };

      fetchAdmin();

      // Auto reload every 10 seconds
      const intervalId = setInterval(fetchAdmin, 10000);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [id]);

  const toggleSidebar = () => setShowSidebar((prev) => !prev); // Toggle sidebar visibility
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const handleLogout = () => {
    Swal.fire({
      title: "Logged out!",
      text: "You have been logged out.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      navigate("/login");
    });
  };

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

      <div className="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleSidebar} // This will toggle the sidebar
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="logo d-none d-lg-block ms-2">
              <img src={Logo} alt="Logo" loading="lazy" />
            </div>

            <div className="collapse navbar-collapse ms-auto">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <button
                    className="nav-link"
                    type="button"
                    id="profileDropdown"
                    onClick={toggleDropdown}
                    aria-expanded={showDropdown}
                  >
                    <img
                      src={profilePic}
                      className="rounded-circle"
                      height="35"
                      width="35"
                      alt="Avatar"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback in case image fails to load
                        e.target.src =
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s";
                      }}
                    />
                  </button>
                  {showDropdown && (
                    <ul
                      className="dropdown-menu show"
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
                        <button className="dropdown-item" onClick={handleLogout}>
                          Log Out
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>{/* Konten utama di sini */}</main>
      </div>
    </div>
  );
}

export default Sidebar;
