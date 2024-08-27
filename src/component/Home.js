import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Pastikan file CSS AOS diimport
import { getProjects } from '../Router/getProject'; // Asumsikan ada fungsi `getProjects` untuk mengambil data dari API

const Home = () => {
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
    <>
      <div className="Bg">
        <div className="context">
          <center>
            <table align="center" className="table-flex" border="0">
              <tbody>
                {projects.map((item, index) => (
                  <tr key={index} align="center" className="flex-gap-tr">
                    <td className="gap-flex">
                      <Link to={`/${item.route}`}>
                        <div className="box">
                          <div className="our-services">
                            <div className="icon">
                              <img
                                src={item.image}
                                className="border-radius: 20px width-img-70"
                                alt={item.name}
                              />
                            </div>
                            <h3>{item.name}</h3>
                          </div>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </>
  );
};

export default Home;
