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

  // Effect to fetch project data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        console.log(projectData);

        // Sort projects from newest to oldest based on createdAt
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

  // Effect to handle window resize and auto reload when mode changes
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      const currentMode = newWindowWidth < 768 ? "responsive" : "desktop";
      if (currentMode !== previousMode) {
        setPreviousMode(currentMode);
        window.location.reload(); // Reload the page when mode changes
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [previousMode]);

  useEffect(() => {
    // Initialize AOS (animate on scroll)
    AOS.init();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="Bg dashboard-bg1 dashboard-content"> {/* Added dashboard-content class */}
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
                    <div className="box2 text-center">
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
                          <i>{project.nama_project}</i>
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
