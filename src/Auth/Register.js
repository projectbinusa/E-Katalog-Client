import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser, // Import faUser icon
} from "@fortawesome/free-solid-svg-icons";
import "../css/Login.css"; // Ensure path is correct
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import axios from "axios";
import Swal from "sweetalert2";
import { API_DUMMY } from "../utils/api";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // Tambahkan state untuk username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_DUMMY}/api/register`, {
        username,
        email,
        password,
        role: "ADMIN",
      });
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered as admin.",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/login"; // Arahkan ke halaman login atau home setelah registrasi
        });
      }
    } catch (error) {
      let errorMessage = "registration failed! Please try again.";
      if (error.response?.status === 401) {
        errorMessage = "Username or email is already in use.";
      } else {
        errorMessage = error.response?.data?.message || "There is an error.";
      }
      Swal.fire({
        icon: "error",
        title: "Registration Failed!",
        text: errorMessage,
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    }
  };

  return (
    <div className="bg-container">
      <div className="Bg">
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung" />
        </div>
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung3" />
        </div>
        <div className="context">
          <center>
            <table align="center" className="table-flex" border="0">
              <tbody>
                <tr className="tbody-tr">
                  <td>
                    <img
                      src={Logo}
                      className="height-img"
                      id="logo-logo"
                      alt="Logo"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
          <div className="card-3d-wrap mx-auto">
            <div className="card-3d-wrapper">
              <div className="card-front">
                <div className="center-wrap">
                  <div className="section text-center">
                    <h4 className="form-title">Register</h4>
                    <form
                      className="mx-auto max-w-md md:max-w-full md:w-2/3 flex flex-col gap-4"
                      onSubmit={handleRegister}
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          name="logemail"
                          className="form-style"
                          placeholder=" "
                          id="logemail"
                          autoComplete="off"
                          value={email} // Hubungkan nilai dengan state email
                          onChange={(e) => setEmail(e.target.value)} // Ubah state email saat input berubah
                          required
                        />
                        <label htmlFor="logemail">Email</label>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="input-icon"
                        />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          name="username"
                          className="form-style"
                          placeholder=" "
                          id="username"
                          autoComplete="off"
                          value={username} // Hubungkan nilai dengan state username
                          onChange={(e) => setUsername(e.target.value)} // Ubah state username saat input berubah
                          required
                        />
                        <label htmlFor="username">Username</label>
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                      </div>
                      <div className="form-group mt-2 position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="logpass"
                          className="form-style"
                          placeholder=" "
                          id="logpass"
                          autoComplete="off"
                          value={password} // Hubungkan nilai dengan state password
                          onChange={(e) => setPassword(e.target.value)} // Ubah state password saat input berubah
                          required
                        />
                        <label htmlFor="logpass">Password</label>
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="input-icon"
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                      <p className="mb-0 mr-10">
                        <a href="/login" className="link">
                          Already have an account?
                        </a>
                      </p>
                      <button type="submit" className="btn mt-4">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Menghapus card-back untuk Sign Up */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg-element"></div>
        {/* <img src={Gelembung} alt="gelembung" className="gelembung1" /> */}
        <img
          src={Gelembung}
          alt="gelembung"
          className="gelembung-right-bottom"
        />
      </div>
    </div>
  );
}

export default Register;
