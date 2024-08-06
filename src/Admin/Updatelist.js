import React, { useState } from "react";
import Sidebar from "../component/Sidnav";

function Updatelist() {
  // State variables for form fields
  const [formData, setFormData] = useState({
    no: "",
    namaProject: "",
    teknologi: "",
    developer: "",
    link: "",
    deskripsiProject: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
  };

  // Handle cancel button click
  const batal = () => {
    // Logic to handle cancel action
    setFormData({
      no: "",
      namaProject: "",
      teknologi: "",
      developer: "",
      link: "",
      deskripsiProject: "",
    });
  };

  return (
    <>
      <div className="card">
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
                        value={formData.no}
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
                        value={formData.namaProject}
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
                        value={formData.teknologi}
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
                        value={formData.developer}
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
                        value={formData.link}
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
                        value={formData.deskripsiProject}
                        onChange={handleChange}
                        placeholder=" Deskripsi Project"
                        rows="3"
                        required
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

export default Updatelist;
