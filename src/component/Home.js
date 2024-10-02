import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProjects } from "../Router/getProject"; // Ensure this function returns data from the API
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import PT from "../aset/pt-dinartech.png";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        if (Array.isArray(projectData)) {
          const sortedProjects = projectData.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setProjects(sortedProjects); // Set all projects to state without limiting number
        } else {
          console.error("Invalid project data:", projectData);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="Bg">
      {/* Bubble Elements */}
      <div className="bg-element">
        <img src={Gelembung} alt="gelembung" className="gelembung" />
      </div>
      <div className="bg-element">
        <img src={Gelembung} alt="gelembung" className="gelembung3" />
      </div>

      <div className="context">
        <div className="header">
          <img src={Logo} className="height-img" id="logo-logo" alt="Logo" />
          <img src={PT} className="logo-pt" id="logo-logo" alt="Logo" />
        </div>

        <div className="scrollable-container">
          <div className="projects-container">
            {projects.length > 0 ? (
              projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="project-card"
                >
                  <div className="box">
                    <div className="our-services" data-aos="fade-up">
                      <div className="icon">
                        <img
                          src={
                            project.image ||
                            "https://i0.wp.com/www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg?fit=415%2C415&ssl=1"
                          }
                          className="gambar-img"
                          alt={project.nama_project}
                        />
                      </div>
                      <h4 className="project-title">
                        <i>{project.nama_project}</i>
                      </h4>
                      <Link
                        to={`/detail/${project.id}`}
                        className="more-link"
                      >
                        More <FontAwesomeIcon icon={faAnglesRight} />
                      </Link>
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
};

export default Home;
