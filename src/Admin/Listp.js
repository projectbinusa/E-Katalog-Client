import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/List.css"; // Import custom CSS

function Listp() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  
  const getToken = () => {
    // Retrieve the token from localStorage or any other method you use
    return localStorage.getItem("token"); // Adjust based on your storage method
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken(); // Retrieve the token

        const response = await axios.get(
          "http://localhost:2007/api/list_project/all",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );

        console.log("API Response:", response); // Log the full response

        // Check the structure of the response
        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const { nama_project, teknologi, developer, link, deskripsi_project } = item;

    const lowerCaseQuery = searchQuery.toLowerCase();
    
    return (
      (nama_project && nama_project.toLowerCase().includes(lowerCaseQuery)) ||
      (teknologi && teknologi.toLowerCase().includes(lowerCaseQuery)) ||
      (developer && developer.toLowerCase().includes(lowerCaseQuery)) ||
      (link && link.toLowerCase().includes(lowerCaseQuery)) ||
      (deskripsi_project && deskripsi_project.toLowerCase().includes(lowerCaseQuery))
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Konfirmasi",
        text: "Anda yakin ingin menghapus data proyek?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      });

      if (result.isConfirmed) {
        const token = localStorage.getItem("token"); // Retrieve the token

        // Perform the delete operation with the token in headers
        await axios.delete(
          `http://localhost:2007/api/list_project/hapus/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );

        // Update the UI by removing the deleted item from the state
        setData((prevData) => prevData.filter((item) => item.id !== id));

        // Show success message
        Swal.fire({
          title: "Berhasil",
          text: "Data proyek berhasil dihapus",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Failed to delete project:", error);

      // Show error message
      Swal.fire({
        title: "Gagal",
        text: "Gagal menghapus proyek",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <section
        className="w-100 d-flex justify-content-center align-items-start"
        style={{ minHeight: "100vh", padding: "0 5%", marginTop: "5%" }}
      >
        <div className="container mt-4 px-2">
          <div
            className="card shadow-sm mx-auto responsive-card"
            style={{
              width: "100%",
              maxWidth: "900px",
              padding: "10px 0",
            }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <p className="mr-auto" style={{ fontWeight:"bold", fontSize:"150%" }}>Tabel List Projek</p>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control mr-2"
                    style={{ maxWidth: "200px" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Link
                    to={`/tambahlist`}
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="mr-1"
                      style={{ padding: "10%", color: "white" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="table-responsive">
                <table
                  className="table table-hover"
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "0",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <thead
                    className="thead-light"
                    style={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}
                  >
                    <tr>
                      <th>No</th>
                      <th className="text-nowrap">Nama Project</th>
                      <th>Teknologi</th>
                      <th>Developer</th>
                      <th>Link</th>
                      <th className="text-nowrap">Deskripsi Project</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((item, index) => (
                        <tr key={item.id}>
                          <th scope="row">
                            {index + 1 + (currentPage - 1) * itemsPerPage}
                          </th>
                          <td>{item.nama_project}</td>
                          <td>{item.teknologi}</td>
                          <td>{item.developer}</td>
                          <td style={{ color:"Highlight" }}>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.link}
                            </a>
                          </td>
                          <td>{item.deskripsi_project}</td>
                          <td>
                            <div className="d-flex">
                              <Link
                                to={`/updatelist/${item.id}`}
                                className="btn btn-success btn-sm mr-2 btn-custom"
                                style={{ height: "5%" }}
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className="mr-1"
                                  style={{ padding: "10%", color: "white" }}
                                />
                              </Link>
                              <button
                                className="btn btn-danger btn-sm btn-custom"
                                onClick={() => handleDelete(item.id)}
                                style={{ height: "5%" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="mr-1"
                                  style={{ padding: "10%", color: "white" }}
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <nav>
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label="Previous"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label="Next"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Listp;
