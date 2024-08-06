import React, { useState } from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/Create.css";

function Createlist() {
  const [no, setNo] = useState("");
  const [namaProject, setNamaProject] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [link, setLink] = useState("");
  const [deskripsiProject, setDeskripsiProject] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "no":
        setNo(value);
        break;
      case "namaProject":
        setNamaProject(value);
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
      case "deskripsiProject":
        setDeskripsiProject(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      no,
      namaProject,
      teknologi,
      developer,
      link,
      deskripsiProject,
    };

    try {
      await axios.post(
        "http://localhost:2007/api/list_project/add",
        newProject
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
        <section style={{ width: "90%", marginTop: "8%" }}>
          <div className="container mt-4">
            <div className="card shadow-sm p-1">
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
                        htmlFor="no"
                        className="form-label"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                        }}
                      >
                        No
                      </label>
                      <input
                        type="number"
                        className="form-control custom-input"
                        id="no"
                        name="no"
                        value={no}
                        onChange={handleChange}
                        placeholder=" No"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="namaProject"
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
                        id="namaProject"
                        name="namaProject"
                        value={namaProject}
                        onChange={handleChange}
                        placeholder=" Nama Project"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
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
                        placeholder=" Teknologi"
                        required
                      />
                    </div>
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
                        placeholder=" Developer"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
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
                        placeholder=" Link"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="deskripsiProject"
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
                        id="deskripsiProject"
                        name="deskripsiProject"
                        value={deskripsiProject}
                        onChange={handleChange}
                        placeholder=" Deskripsi Project"
                        rows="3"
                      />
                    </div>
                  </div>

                  <div className="button-container">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm btn-custom"
                      onClick={batal}
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm btn-custom"
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
