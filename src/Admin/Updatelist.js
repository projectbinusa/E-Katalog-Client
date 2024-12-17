import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidnav";
// import "bootstrap/dist/css/bootstrap.min.css";S
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { API_DUMMY } from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

function Updatelist() {
  const [no, setNo] = useState("");
  const [nama_project, setNama_project] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null); // state untuk menyimpan file
  const [deskripsi_project, setDeskripsi_project] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // menyimpan file yang dipilih
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${API_DUMMY}/api/list_project/by-id/${id}`,
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
        setImage(project.image);
        console.log(image);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const listProjectData = {
      nama_project: nama_project,
      developer: developer,
      deskripsi_project: deskripsi_project,
      teknologi: teknologi,
      link: link,
    };

    try {
      const token = localStorage.getItem("token");

      // First, send JSON data
      await axios.put(
        `${API_DUMMY}/api/list_project/ubah/${id}`,
        listProjectData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Sending JSON
          },
        }
      );

      // If a new file is selected, send the image in a separate request
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        await axios.put(
          `${API_DUMMY}/api/list_project/update-image/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data", // Sending file
            },
          }
        );
      }

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
        <section>
          <div className="container2 mt-6">
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
                    top: "-3px",
                  }}
                >
                  Update List
                </h2>

                <form onSubmit={handleSubmit} style={{ padding: "4%" }}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="nama_project"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="nama_project"
                        name="nama_project"
                        value={nama_project}
                        onChange={(e) => setNama_project(e.target.value)}
                        autoComplete="off"
                        placeholder=" Project Name"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="teknologi"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Technology
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="teknologi"
                        name="teknologi"
                        value={teknologi}
                        onChange={(e) => setTeknologi(e.target.value)}
                        autoComplete="off"
                        placeholder=" Technology"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="developer"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
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
                        onChange={(e) => setDeveloper(e.target.value)}
                        autoComplete="off"
                        placeholder=" Developer"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="link"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
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
                        onChange={(e) => setLink(e.target.value)}
                        autoComplete="off"
                        placeholder=" Link"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="image"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control custom-input"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                      <img
                        src={image}
                        alt=""
                        style={{ width: "70px", height: "50px" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="deskripsi_project"
                        className="form-label"
                        style={{
                          fontSize: "95%",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Project Description
                      </label>
                      <textarea
                        className="form-control custom-input"
                        id="deskripsi_project"
                        name="deskripsi_project"
                        value={deskripsi_project}
                        onChange={(e) => setDeskripsi_project(e.target.value)}
                        autoComplete="off"
                        placeholder=" Project Description"
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
                      className="button btn-danger btn-sm"
                      onClick={batal}
                    >
                      <FontAwesomeIcon icon={faX} />
                    </button>
                    <button type="submit" className="button btn-primary btn-sm">
                      <FontAwesomeIcon icon={faCheck} />
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
