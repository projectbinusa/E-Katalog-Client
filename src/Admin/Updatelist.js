import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Updatelist() {
  const [no, setNo] = useState("");
  const [namaProject, setNamaProject] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [link, setLink] = useState("");
  const [deskripsiProject, setDeskripsiProject] = useState("");
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();

  // Fetch the selected project data
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:2007/api/list_projek/${id}`);
        const project = response.data;
        setNo(project.no);
        setNamaProject(project.namaProject);
        setTeknologi(project.teknologi);
        setDeveloper(project.developer);
        setLink(project.link);
        setDeskripsiProject(project.deskripsiProject);
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
      fetchProjectData(); // Fetch data only if there's an ID (editing mode)
    }
  }, [id]);

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

    const updatedProject = {
      no,
      namaProject,
      teknologi,
      developer,
      link,
      deskripsiProject,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:2007/api/list_projek/ubah/${id}`,
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
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <section style={{ width: "100%", marginTop: "8%" }}>
          <div className="container mt-4">
            <div className="card shadow-sm p-1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                        autoComplete="off"
                        placeholder=" Deskripsi Project"
                        rows="3"
                      />
                    </div>
                  </div>

                  <div className="button-container" style={{ display: "flex", justifyContent: "space-between" }}>
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
