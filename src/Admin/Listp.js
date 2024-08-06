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
import { Link } from "react-router-dom"; // Import Link

function Listp() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2007/api/list_project/all"
        );
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const addData = (newData) => {
    setData([newData, ...data]);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Konfirmasi",
      text: `Anda yakin ingin menghapus data proyek?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setData((prevData) => prevData.filter((item) => item.id !== id));
          Swal.fire({
            title: "Berhasil",
            text: `Data proyek berhasil dihapus`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        } catch (error) {
          console.error("Failed to delete project: ", error);
          Swal.fire({
            title: "Gagal",
            text: `Gagal menghapus proyek`,
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <section style={{ width: "50%", marginLeft: "5%", marginTop: "4%" }}>
        <div
          className="container mt-4"
          style={{ marginLeft: "3%", paddingLeft: "20px" }}
        >
          <div
            className="card shadow-sm mx-auto"
            style={{ maxWidth: "1500px", marginTop: "10%" }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <h3 className="mr-auto">Tabel List Projek</h3>
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
                    className="btn btn-primary btn-sm mr-2 btn-custom"
                    style={{ height: "5%" }}
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
                      <th>Nama Project</th>
                      <th>Teknologi</th>
                      <th>Developer</th>
                      <th>Link</th>
                      <th>Deskripsi Project</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr key={item.id}>
                        <th scope="row">
                          {index + 1 + (currentPage - 1) * itemsPerPage}
                        </th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.username}</td>
                        <td>{item.username}</td>
                        <td>{item.username}</td>
                        <td>
                          <div className="d-flex">
                            <Link
                              to={`/EditPenilaian/${item.id}`}
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
                    ))}
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
