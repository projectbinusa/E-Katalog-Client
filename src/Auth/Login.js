import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Login.css"; // Pastikan path sudah benar
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!usernameOrEmail || !password) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Email atau Username dan Password harus diisi.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      usernameOrEmail
    );
    const isUsername = /^(?=.*[A-Z])[A-Za-z\s]+$/.test(usernameOrEmail);

    if (isEmail || isUsername) {
      try {
        const response = await axios.post(`${apiUrl}/login`, {
          usernameOrEmail,
          password,
        });
        if (response.data) {
          const { userData, token } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("username", userData.username);
          localStorage.setItem("id", userData.id);
          localStorage.setItem("role", userData.role);
          localStorage.setItem("userData", JSON.stringify(userData));

          Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: `Selamat datang ${userData.username}. Anda berhasil login.`,
            timer: 2000,
            showConfirmButton: false,
          });

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      } catch (error) {
        let errorMessage = "Terjadi kesalahan";
        if (error.response?.status === 401) {
          if (isEmail) {
            errorMessage = "Email atau Password salah";
          } else if (isUsername) {
            errorMessage = "Username atau Password salah";
          }
        } else {
          errorMessage = error.response?.data?.message || "Terjadi kesalahan";
        }
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: errorMessage,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Format Username tidak sesuai.",
        timer: 2000,
        showConfirmButton: false,
      });
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
                    <h4 className="form-title">Login</h4> {/* Judul baru */}
                    <form
                      className="mx-auto max-w-md md:max-w-full md:w-full flex flex-col gap-3"
                      onSubmit={handleLogin}
                    >
                      <div className="form-group">
                        <input
                          id="usernameOrEmail"
                          className="w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                          type="text"
                          placeholder="Masukkan Email atau Username"
                          autoComplete="off"
                          value={usernameOrEmail}
                          onChange={(e) => setUsernameOrEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="usernameOrEmail">Email/Username</label>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="input-icon"
                        />
                      </div>
                      <div className="form-group mt-2 position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-style"
                          placeholder=" "
                          id="password"
                          autoComplete="off"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password">Password</label>
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="input-icon"
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                      <button type="submit" className="btn mt-4">
                        Log in
                      </button>
                      <p className="mb-0 mt-4 text-center">
                        <a href="#0" className="link">
                          Forgot your password?
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg-element"></div>
        <img src={Gelembung} alt="gelembung" className="gelembung1" />
        <img
          src={Gelembung}
          alt="gelembung"
          className="gelembung-right-bottom"
        />
      </div>
    </div>
  );
}

export default Login;
