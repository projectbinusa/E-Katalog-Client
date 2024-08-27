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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [previousMode, setPreviousMode] = useState(
    window.innerWidth < 768 ? "responsive" : "desktop"
  );

  // Efek untuk mengambil data proyek
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData);

        // Mengurutkan proyek dari yang terbaru hingga yang lama berdasarkan createdAt
        const sortedProjects = projectData.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Efek untuk menangani resize jendela dan auto reload ketika mode berubah
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      const currentMode = newWindowWidth < 768 ? "responsive" : "desktop";
      if (currentMode !== previousMode) {
        setPreviousMode(currentMode);
        window.location.reload(); // Reload halaman ketika mode berubah
      }
    };

    // Menambahkan event listener resize
    window.addEventListener("resize", handleResize);

    // Membersihkan event listener ketika komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [previousMode]);

  useEffect(() => {
    // Initialize AOS (animate on scroll)
    AOS.init();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="Bg dashboard-bg1">
        <div className="bg-element2">
          <img src={Gelembung} alt="gelembung" className="gelembung" />
        </div>
        <div className="context1">
          <div className="logo-container2">
            <img src={PT} className="logo-pt1" id="logo-logo" alt="Logo" />
          </div>
          <div className="scrollable-container">
            <div className="projects-grid">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <Link
                    key={project.id}
                    // to={`/projects/${project.id}`}
                    className="project-card"
                  >
                    <div className="box2">
                      <div className="our-services-iconnn" data-aos="fade-up">
                        <div className="icon2">
                          <img
                            src={
                              project.image ||
                              "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
                            }
                            className="gambar-img"
                            alt={project.nama_project}
                          />
                        </div>
                        <h4
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "bold",
                            transform: "translateY(-20%)",
                          }}
                        >
                          <i> {project.nama_project} </i>
                        </h4>
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
    </div>
  );
}
 
export default Dashboard;
