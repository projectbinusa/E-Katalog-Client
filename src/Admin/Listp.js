import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/List.css"; // Import custom CSS
import { API_DUMMY } from "../utils/api";

function Listp() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");

  const getToken = () => {
    return localStorage.getItem("token"); // Retrieve the token
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken(); // Ambil token

        const response = await axios.get(
          `${API_DUMMY}/api/list_project/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        console.log("Respons API:", response); // Log respons penuh

        if (response.data && Array.isArray(response.data)) {
          // Urutkan data berdasarkan `createdAt` atau field timestamp lainnya secara menurun
          const sortedData = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setData(sortedData);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to retrieve data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const namaProject = item.nama_project || "";
    const teknologi = item.teknologi || "";
    const developer = item.developer || "";
    const link = item.link || "";
    const deskripsiProject = item.deskripsi_project || "";

    return (
      namaProject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teknologi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deskripsiProject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Confirmation",
        text: "Are you sure you want to delete project data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      });

      if (result.isConfirmed) {
        const token = getToken(); // Ambil token

        await axios.delete(
          `${API_DUMMY}/api/list_project/hapus/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Sertakan token di header
            },
          }
        );

        setData((prevData) => prevData.filter((item) => item.id !== id));

        Swal.fire({
          title: "Succes",
          text: "Project data has been successfully deleted",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Failed to delete project:", error);

      Swal.fire({
        title: "Failed",
        text: "Failed to delete project",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const copyToClipboard = (text, event) => {
    if (event && event.clientY && event.clientX) {
      navigator.clipboard.writeText(text).then(
        () => {
          const messageElement = document.createElement("div");
          messageElement.textContent = "The link has been copied";
          messageElement.style.position = "absolute";
          messageElement.style.top = `${event.clientY + 10}px`; 
          messageElement.style.left = `${event.clientX}px`;
          messageElement.style.backgroundColor = "#333";
          messageElement.style.color = "#fff";
          messageElement.style.padding = "5px 10px";
          messageElement.style.borderRadius = "5px";
          messageElement.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
          messageElement.style.zIndex = "1000";
          document.body.appendChild(messageElement);

          setTimeout(() => {
            document.body.removeChild(messageElement);
          }, 1000);
        },
        (err) => {
          console.error("Failed to copy:", err);
        }
      );
    }
  };

  return (
    <div className="d-flex jusify-content-center fixed Bg">
      <Sidebar />
      <section
        className="card1 w-100 d-flex justify-content-center align-items-start auto-y-scroll"
        style={{
          minHeight: "100vh",
          padding: "0 5%",
          marginTop: "8%",
          marginLeft: "12%",
        }}
      >
        <div className="container px-1">
          <div
            className="card mx-auto responsive-card"
            style={{
              width: "100%",
              maxWidth: "100%",
              padding: "10px 0",
            }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <h5
                  className="title mr-auto text-nowrap"
                >
                  Project List Table
                </h5>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Cari..."
                    className="cari form-control mr-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Link
                    to={`/tambahlist`}
                    className="tambah btn-primary btn-sm mr-0"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="mr-1"
                      style={{
                        color: "white",
                        marginLeft: "10%",
                        fontSize: "16px", // Adjust font size if needed
                      }}
                    />
                  </Link>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover table-custom">
                  <thead
                    className="thead-light"
                    style={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}
                  >
                    <tr
                      style={{
                        font: "menu",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        No
                      </th>
                      <th
                        className="text-nowrap"
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Project Name
                      </th>
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Technology
                      </th>
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Developer
                      </th>
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Link
                      </th>
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Image
                      </th>
                      <th
                        className="text-nowrap"
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Project Description
                      </th>
                      <th
                        style={{
                          background: "#D1E9F6",
                          color: "black",
                          fontSize: "120%",
                        }}
                      >
                        Action
                      </th>
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
                          <td
                            className="text-decoration-none"
                            style={{ color: "Highlight", cursor: "pointer" }}
                            onClick={(e) => {
                              if (e.target.tagName !== "A") {
                                copyToClipboard(item.link, e);
                              }
                            }}
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.link}
                            </a>
                          </td>
                          <td>
                            {" "}
                            <img style={{ width: "75px", height: "60px" }} src={item.image} alt="" />{" "}
                          </td>
                          <td>{item.deskripsi_project}</td>
                          <td>
                            <div className="d-flex">
                              <Link
                                to={`/updatelist/${item.id}`}
                                className="btn btn-success btn-sm mr-2 "
                                style={{ height: "5%" }}
                              >
                                <FontAwesomeIcon
                                  icon={faPen}
                                  className="mr-1 mt-1"
                                  style={{ padding: "10%", color: "white" }}
                                />
                              </Link>
                              <button
                                className="btn btn-danger btn-sm "
                                onClick={() => handleDelete(item.id)}
                                style={{ height: "5%" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="mr-1 mt-1"
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
                    className={`page-item ${currentPage === 1 ? "disabled" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      className={`page-item ${currentPage === i + 1 ? "active" : ""
                        }`}
                      key={i + 1}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
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
