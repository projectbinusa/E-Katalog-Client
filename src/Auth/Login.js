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
import { API_DUMMY } from "../utils/api";

// const apiUrl = "http://localhost:2007";

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

    // Validate input
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Email and Password must be filled in.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    try {
      // Perform login request
      const response = await axios.post(`${API_DUMMY}/api/login`, {
        email,
        password,
      });

      // Check if the response contains data
      if (response.data && response.data) {
        const { data } = response.data;
        const { token, data: userData } = data;

        // Save user data to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("id", userData.id);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("userData", JSON.stringify(userData));

        // Notify success
        Swal.fire({
          icon: "success",
          title: "Login Success",
          text: `Welcome ${userData.username}. You have successfully logged in.`,
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect to the dashboard after a short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        // Handle unexpected response structure
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "An error occurred on the server.",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error login:", error);

      // Extract error message
      let errorMessage = "There is an error";
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = "Incorrect email or password";
        } else {
          errorMessage = error.response.data?.message || "There is an error";
        }
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
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
                          style={{ marginRight: "60%" }}
                        >
                          Register?
                        </a>
                        {/* <a
                          href="#0"
                          className="link"
                          style={{ marginLeft: "2%" }}
                        >
                          Forgot your password?
                        </a> */}
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
