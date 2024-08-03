import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";

function Listp() {
  const initialData = [
    { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
    { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
    { id: 3, firstName: "Larry", lastName: "Bird", username: "@twitter" },
    { id: 4, firstName: "John", lastName: "Doe", username: "@johndoe" },
    { id: 5, firstName: "Jane", lastName: "Smith", username: "@janesmith" },
    { id: 6, firstName: "Michael", lastName: "Johnson", username: "@mjohnson" },
    { id: 7, firstName: "Emily", lastName: "Davis", username: "@edavis" },
    { id: 8, firstName: "Chris", lastName: "Brown", username: "@cbrown" },
    { id: 9, firstName: "Pat", lastName: "Lee", username: "@plee" },
    { id: 10, firstName: "Alex", lastName: "Kim", username: "@akim" },
    { id: 11, firstName: "Tina", lastName: "Turner", username: "@tturner" },
    { id: 12, firstName: "Sam", lastName: "Wilson", username: "@swilson" },
    // Tambahkan data lainnya di sini jika diperlukan
  ];

  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Menghitung indeks data yang akan ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Menambahkan data baru
  const addData = (newData) => {
    setData([newData, ...data]);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <section
        className=""
        style={{  width: "50%", marginLeft: "10%", marginTop: "5%" }}
      >
        <div
          className="container mt-4"
          style={{ marginLeft: "3%", paddingLeft: "20px" }}
        >
          <div
            className="card shadow-sm mx-auto"
            style={{ maxWidth: "1500px", marginTop: "10%" }}
          >
            <div className="card-body">
              <button
                className="btn btn-primary mb-4"
                onClick={() =>
                  addData({
                    id: data.length + 1,
                    firstName: "New",
                    lastName: "User",
                    username: "@newuser",
                  })
                }
              >
                Tambah Data Baru
              </button>

              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
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
                    >
                      Previous
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
                    >
                      Next
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
