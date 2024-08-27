import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProjects } from "../Router/getProject";
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import PT from "../aset/pt-dinartech.png";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Bg">
      {/* Elemen gelembung */}
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

        <div className="scrollable-container1">
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
  );
};

export default Home;
