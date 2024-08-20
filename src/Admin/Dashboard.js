import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidnav";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../css/Dashboard.css";
import { getProjects } from "../Router/getProject";
import Gelembung from "../aset/gelembung.png";
import PT from "../aset/pt-dinartech.png";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init();

    // Ambil data proyek dan urutkan berdasarkan nama_projek atau atribut lainnya
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData); // Tambahkan ini untuk memastikan data yang diterima

        // Urutkan proyek berdasarkan nama_projek
        const sortedProjects = projectData.sort((a, b) => {
          if (a.nama_projek < b.nama_projek) return -1;
          if (a.nama_projek > b.nama_projek) return 1;
          return 0;
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div
      className="d-flex"
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <Sidebar />
      <div className="Bg dashboard-bg">
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung" />
        </div>
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung3" />
        </div>
        <div className="context1">
          <div className="logo-container2">
            <img src={PT} className="logo-pt1" id="logo-logo" alt="Logo" />
          </div>
          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="project-card"
                >
                  <div className="box2">
                    <div className="our-services-iconnn">
                      <div className="icon">
                        <img
                          src={
                            project.image ||
                            "https://johannesippen.com/img/blog/humans-not-users/header.jpg"
                          }
                          className="icon-img" // Menambahkan kelas untuk kontrol ukuran
                          alt={project.nama_projek}
                        />
                      </div>
                      <h3 style={{ color: "black" }}>{project.nama_projek}</h3>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
