import React, { useState } from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/Create.css";

function Createlist() {
  const [no, setNo] = useState("");
  const [nama_project, setnama_project] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [link, setLink] = useState("");
  const [deskripsi_project, setdeskripsi_project] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "no":
        setNo(value);
        break;
      case "nama_project":
        setnama_project(value);
        break;
      case "teknologi":
        setTeknologi(value);
        break;
      case "developer":
        setDeveloper(value);
        break;
      case "link":
        setLink(value);
        break;
      case "deskripsi_project":
        setdeskripsi_project(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      no,
      nama_project,
      teknologi,
      developer,
      link,
      deskripsi_project,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:2007/api/list_project/add",
        newProject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        title: "Berhasil",
        text: "Data project berhasil ditambahkan",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.error("Gagal menambahkan data project: ", error);
      Swal.fire({
        title: "Gagal",
        text: "Gagal menambahkan data project. Silakan coba lagi.",
        icon: "error",
      });
    }
  };

  const batal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <section style={{ width: "100%", marginTop: "8%", alignItems:"center" }}>
          <div className="container mt-4">
            <div
              className="card shadow-sm p-1"
              style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
            >
              <div className="card-body">
                <h2
                  className="card-title"
                  style={{
                    marginBottom: "5px",
                    position: "relative",
                    top: "-10px",
                  }}
                >
                  Create List
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="nama_project"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Nama Project
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="nama_project"
                        name="nama_project"
                        value={nama_project}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Nama Project"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="teknologi"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Teknologi
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="teknologi"
                        name="teknologi"
                        value={teknologi}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Teknologi"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="developer"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Developer
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="developer"
                        name="developer"
                        value={developer}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Developer"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="link"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Link
                      </label>
                      <input
                        type="url"
                        className="form-control custom-input"
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Link"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    {/* <div className="col-md-6">
                      <label
                        htmlFor="link"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Link
                      </label>
                      <input
                        type="url"
                        className="form-control custom-input"
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Link"
                        required
                      />
                    </div> */}
                    <div className="col-md-6">
                      <label
                        htmlFor="deskripsi_project"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        Deskripsi Project
                      </label>
                      <textarea
                        className="form-control custom-input"
                        id="deskripsi_project"
                        name="deskripsi_project"
                        value={deskripsi_project}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder=" Deskripsi Project"
                        rows="3"
                      />
                    </div>
                  </div>

                  <div
                    className="button-container"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      type="button"
                      className="btn btn-custom btn-secondary-custom btn-sm"
                      onClick={batal}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="btn btn-custom btn-primary-custom btn-sm"
                    >
                      Tambah
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Createlist;
