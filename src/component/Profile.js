import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../component/Sidnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSave } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Profile() {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s",
  });

  const [isEditingData, setIsEditingData] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:2007/api/users/by-id/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { email, username, image } = response.data;
        setFormData({
          email,
          username,
          image: image || formData.image,
        });
      })
      .catch((error) => {
        console.error("Ada kesalahan saat mengambil data:", error);
      });
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setIsFileSelected(true);
  };

  const handleSaveData = async () => {
    try {
      await axios.patch(
        `http://localhost:2007/api/users/by-id/${id}`,
        {
          email: formData.email,
          username: formData.username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsEditingData(false);
      Swal.fire({
        title: "Berhasil",
        text: "Data berhasil disimpan!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Ada kesalahan saat memperbarui data:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal menyimpan data.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const handleSaveImage = async () => {
    const updateData = new FormData();
    if (imageFile) {
      updateData.append("image", imageFile);
    }

    try {
      const response = await axios.put(
        `http://localhost:2007/api/edit/image/${id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFormData({
        ...formData,
        image: response.data.image || formData.image,
      });
      setIsFileSelected(false);
      setImageFile(null);
      setPreviewImage(null);
      Swal.fire({
        title: "Berhasil",
        text: "Foto profil berhasil disimpan!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Ada kesalahan saat memperbarui foto profil:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal menyimpan foto profil.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <section className="" style={{ width: "100%", marginRight: "10%" }}>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white"
                  style={{
                    background: "linear-gradient(40deg,#45cafc,#303f9f)",
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                    padding: "20px",
                  }}
                >
                  <img
                    src={formData.image}
                    alt="Avatar"
                    className="my-5"
                    style={{
                      width: "150px",
                      borderRadius: "50%",
                      height: "150px",
                    }}
                  />

                  {!isFileSelected && (
                    <p className="text-white">{formData.username}</p>
                  )}

                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  {previewImage && (
                    <div
                      style={{
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "-15px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Preview
                      </span>
                      <img
                        src={previewImage}
                        alt="Preview Avatar"
                        className="my-3"
                        style={{
                          width: "150px",
                          borderRadius: "50%",
                          height: "150px",
                        }}
                      />
                    </div>
                  )}

                  <FontAwesomeIcon
                    icon={isFileSelected ? faSave : faImage}
                    size="2x"
                    className="mt-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (isFileSelected) {
                        handleSaveImage();
                      } else {
                        document.getElementById("imageUpload").click();
                      }
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    {isEditingData ? (
                      <div>
                        <h6>Ubah Data Diri</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Username</h6>
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-custom btn-primary-custom btn-sm"
                          onClick={handleSaveData}
                        >
                          Simpan
                        </button>
                      </div>
                    ) : (
                      <div>
                        <h6>Data Diri</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{formData.email}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Username</h6>
                            <p className="text-muted">{formData.username}</p>
                          </div>
                        </div>
                        <button
                          className="btn btn-custom btn-primary-custom btn-sm"
                          onClick={() => setIsEditingData(true)}
                        >
                          Edit Data Diri
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
