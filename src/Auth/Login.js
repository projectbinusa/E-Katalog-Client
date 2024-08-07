import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Login.css";
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import { useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:2007";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Email dan Password harus diisi.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/api/login`, {
        email,
        password,
      });

      if (response.data) {
        const { data } = response.data;
        const { token, data: userData } = data;

        // Simpan data di localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("email", userData.email);
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
      console.error("Error login:", error);
      let errorMessage = "Terjadi kesalahan";
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = "Email atau Password salah";
        } else {
          errorMessage = error.response.data?.message || "Terjadi kesalahan";
        }
      }

      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: errorMessage,
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
                    <h4 className="form-title">Login</h4>
                    <form
                      className="mx-auto max-w-md md:max-w-full md:w-full flex flex-col gap-3"
                      onSubmit={handleLogin}
                    >
                      <div className="form-group email">
                        <input
                          id="email"
                          type="email"
                          placeholder=" "
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="form-style"
                        />
                        <label htmlFor="email">Email</label>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="input-icon"
                        />
                      </div>

                      <div className="form-group password">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-style"
                          placeholder=" "
                          id="password"
                          autoComplete="off"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password">Password</label>
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="input-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePasswordVisibility();
                          }}
                        />
                      </div>

                      <p className="mb-0 mt-4 text-center">
                        <a
                          href="/register"
                          className="link"
                          style={{ marginRight: "20%" }}
                        >
                          daftar akun?
                        </a>
                        <a
                          href="#0"
                          className="link"
                          style={{ marginLeft: "2%" }}
                        >
                          Forgot your password?
                        </a>
                      </p>
                      <button type="submit" className="btn mt-4">
                        Log in
                      </button>
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