import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"; // Import faAnglesLeft icon
import { API_DUMMY } from "../utils/api";
import '../css/Detail.css'; // Import file CSS

function DetailLp() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate(); // Menggunakan useNavigate

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        if (id) {
          const response = await fetch(
            `${API_DUMMY}/api/list_project/by-id/${id}`
          );

          console.log("Response status:", response.status);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log("Fetched data:", data);
          setProjectData(data);
        } else {
          console.error("No project ID provided");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  // Fungsi untuk navigasi ke halaman Home
  const handleGoHome = () => {
    navigate("/"); // Mengarahkan pengguna ke halaman beranda
  };

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-column flex-md-row Bg">
      <section className="sesi" style={{ width: "100%", marginRight: "10%" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="card mb-3 card-custom">
              <div className="row g-0">
                <div className="col-md-4 card-left">
                  <img
                    src={
                      projectData.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
                    }
                    alt="Avatar"
                    className="avatar my-5 mb-2 mt-2"
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body p-4 card-body-custom">
                    <div>
                      <h6 className="bold-title">Detail Project List</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className="bold-title">Project Name</h6>
                          <p className="text-muted">
                            {projectData.nama_project}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="bold-title">Technology</h6>
                          <p className="text-muted">
                            {projectData.teknologi}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="bold-title">Developer</h6>
                          <p className="text-muted">
                            {projectData.developer}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className="bold-title">Link</h6>
                          <p className="text-muted">{projectData.link}</p>
                        </div>
                        <div className="col-12 mb-3">
                          <h6 className="bold-title">Project Description</h6>
                          <p className="text-muted">
                            {projectData.deskripsi_project}
                          </p>
                          {/* Bungkus icon dan teks "Back" dengan div */}
                          <div
                            onClick={handleGoHome} // Event handler onClick untuk ikon dan teks
                            style={{ cursor: "pointer", display: "flex", alignItems: "center", }}
                          >
                            <FontAwesomeIcon
                              icon={faAnglesLeft}
                              size="lg"
                              style={{ marginRight: "5px" }} // Sedikit jarak antara ikon dan teks
                            />
                            <span>Back</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailLp;
