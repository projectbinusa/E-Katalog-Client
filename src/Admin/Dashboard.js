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

    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData); // Pastikan data yang diterima memiliki nama_project

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
                    to={`/projects/${project.id}`}
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
                            className="icon-img"
                            alt={project.nama_project}
                          />
                        </div>
                        <h4
                          style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "bold",
                            transform: "translateY(-20%)", // Pindahkan h4 ke atas 10% dari posisinya
                          }}
                        >
                          <i> {project.nama_project} </i>
                        </h4>

                        {/* <p>{project.teknologi}</p> */}
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
