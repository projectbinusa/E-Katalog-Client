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

  useEffect(() => {
    AOS.init();

    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData);

        const sortedProjects = projectData.sort((a, b) => {
          if (a.nama_project < b.nama_project) return -1;
          if (a.nama_project > b.nama_project) return 1;
          return 0;
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();

    // Handler untuk resize event
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Menambahkan event listener resize
    window.addEventListener("resize", handleResize);

    // Membersihkan event listener ketika komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render komponen
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
