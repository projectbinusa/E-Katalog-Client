import React, { useState } from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/Create.css";
import { API_DUMMY } from "../utils/api";

function Createlist() {
  const [no, setNo] = useState("");
  const [nama_project, setNamaProject] = useState("");
  const [teknologi, setTeknologi] = useState("");
  const [developer, setDeveloper] = useState("");
  const [file, setFile] = useState(null); // state untuk menyimpan file
  const [deskripsi_project, setDeskripsiProject] = useState("");
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // menyimpan file yang dipilih
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (file) {
      // Menggunakan FileReader untuk memproses file sebelum dikirim ke server
      const reader = new FileReader();
      reader.onloadend = async () => {
        formData.append("image", file); // menambahkan file ke formData setelah diproses
        formData.append("listProject", JSON.stringify({nama_project,developer,deskripsi_project,teknologi})); 

        try {
          const token = localStorage.getItem("token");
          const response = await axios.post(
            `${API_DUMMY}/api/list_project/add/byId/${id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
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
          const errorMessage =
            error.response?.data?.message ||
            "Gagal menambahkan data project. Silakan coba lagi.";
          Swal.fire({
            title: "Gagal",
            text: errorMessage,
            icon: "error",
          });
        }
      };
      reader.readAsDataURL(file); // membaca file sebagai Data URL
    } else {
      formData.append("listProject", JSON.stringify({nama_project,developer,deskripsi_project,teknologi})); 

      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${API_DUMMY}/api/list_project/add/byId/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
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
        const errorMessage =
          error.response?.data?.message ||
          "Gagal menambahkan data project. Silakan coba lagi.";
        Swal.fire({
          title: "Gagal",
          text: errorMessage,
          icon: "error",
        });
      }
    }
  };

  const batal = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="d-flex flex-column flex-md-row Bg">
        <Sidebar />
        <section
          style={{ width: "100%", marginTop: "8%", alignItems: "center" }}
        >
          <div className="container2 mt-6">
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
                          fontSize: "1rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
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
                        onChange={(e) => setNamaProject(e.target.value)}
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
                          fontSize: "1rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
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
                        onChange={(e) => setTeknologi(e.target.value)}
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
                          fontSize: "1rem",
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
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="image"
                        className="form-label"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control custom-input"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*" // hanya menerima file gambar
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="deskripsi_project"
                        className="form-label"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          textAlign: "left",
                          display: "block",
                          color: "#686D76",
                        }}
                      >
                        Deskripsi Project
                      </label>
                      <textarea
                        className="form-control custom-input"
                        id="deskripsi_project"
                        name="deskripsi_project"
                        value={deskripsi_project}
                        onChange={(e) => setDeskripsiProject(e.target.value)}
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
