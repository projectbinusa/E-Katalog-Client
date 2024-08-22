import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Updatelist() {
  const [no, setNo] = useState("");
  const [nama_project, setNama_project] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [link, setLink] = useState("");
  const [deskripsi_project, setDeskripsi_project] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:2007/api/list_project/by-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const project = response.data;
        setNo(project.no);
        setNama_project(project.nama_project);
        setTeknologi(project.teknologi);
        setDeveloper(project.developer);
        setLink(project.link);
        setDeskripsi_project(project.deskripsi_project);
      } catch (error) {
        console.error("Gagal mengambil data project: ", error);
        Swal.fire({
          title: "Error",
          text: "Gagal memuat data project. Silakan coba lagi.",
          icon: "error",
        });
      }
    };

    if (id) {
      fetchProjectData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "no":
        setNo(value);
        break;
      case "nama_project":
        setNama_project(value);
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
        setDeskripsi_project(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProject = {
      no,
      nama_project,
      teknologi,
      developer,
      link,
      deskripsi_project,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:2007/api/list_project/ubah/${id}`,
        updatedProject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        title: "Berhasil",
        text: "Data project berhasil diperbarui",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.error("Gagal memperbarui data project: ", error);
      Swal.fire({
        title: "Gagal",
        text: "Gagal memperbarui data project. Silakan coba lagi.",
        icon: "error",
      });
    }
  };

  const batal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="d-flex flex-column flex-md-row Bg">
        <Sidebar />
        <section style={{ width: "100%", marginTop: "8%" }}>
          <div className="container mt-4">
            <div
              className="card shadow-sm p-1 mx-auto"
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
                  Update List
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
                      Update
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

export default Updatelist;
