import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidnav";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../css/Dashboard.css";
import { getProjects } from "../Router/getProject.jsx"; // Import fungsi untuk mengambil data proyek
import Gelembung from "../aset/gelembung.png";
import PT from "../aset/pt-dinartech.png";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init();

    // Ambil data proyek dari API saat komponen di-mount
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects(); // Ambil data proyek dari API
        setProjects(projectData); // Simpan data dalam state
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
      <div className="Bg dashboard-bg">
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung" />
        </div>
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung3" />
        </div>
        <div className="context">
          <center>
            <table align="center" className="table-flex" border="0">
              <tbody>
                <tr className="tbody-tr">
                  <td colSpan="2" className="responsive-logo-container">
                    <img
                      src={PT}
                      className="logo-pt"
                      id="logo-logo"
                      alt="Logo"
                    />
                  </td>
                </tr>
                {/* Menu Aplikasi */}
                {projects.length > 0 ? (
                  projects.map((project, index) => (
                    <tr key={index} align="center" className="flex-gap-tr">
                      <td className="gap-flex">
                        <Link to={`/projects/${project.id}`}>
                          <div className="box">
                            <div className="our-services">
                              <div className="icon">
                                <img
                                  src={
                                    project.image ||
                                    "default-image-url-here.png"
                                  }
                                  className={`width-img-${
                                    project.width || "70"
                                  }`}
                                  alt={project.nama_projek}
                                />
                              </div>
                              <h3>{project.nama_projek}</h3>
                            </div>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" align="center">
                      <p>No projects available.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
