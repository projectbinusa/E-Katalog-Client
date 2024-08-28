import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams dari react-router-dom
import Sidebar from "../component/Sidnav";
import { API_DUMMY } from "../utils/api";

function DetailLp() {
  const { id } = useParams(); // Ambil ID dari URL menggunakan useParams
  const [projectData, setProjectData] = useState(null);

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
  }, [id]); // Tambahkan id ke dependency array

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-column flex-md-row Bg">
      <Sidebar />
      <section className="" style={{ width: "100%", marginRight: "10%" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-8 mb-5 mb-lg-0 " style={{ marginLeft: "20%" }}>
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white"
                  style={{
                    background: "linear-gradient(40deg,#45cafc,#303f9f)",
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                    padding: "20px",
                  }}
                >
                  <img
                    src={
                      projectData.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
                    }
                    alt="Avatar"
                    className="my-5 mb-2 mt-2"
                    style={{
                      width: "100px",
                      borderRadius: "50%",
                      height: "100px",
                    }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div>
                      <h6>Detail Project List</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Project Name</h6>
                          <p className="text-muted">
                            {projectData.nama_project}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Technology</h6>
                          <p className="text-muted">{projectData.teknologi}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Developer</h6>
                          <p className="text-muted">{projectData.developer}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Link</h6>
                          <p className="text-muted">{projectData.link}</p>
                        </div>
                        <div className="col-15 mb-3">
                          <h6>Project Description</h6>
                          <p className="text-muted">
                            {projectData.deskripsi_project}
                          </p>
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
