import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUser, // Import faUser icon
} from "@fortawesome/free-solid-svg-icons";
import "../css/Login.css"; // Ensure path is correct
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="logemail"
                          className="form-style"
                          placeholder=" "
                          id="logemail"
                          autoComplete="off"
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
                        />
                        <label htmlFor="logpass">Password</label>
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="input-icon"
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                      <p className="mb-0 mr-10">
                        <a href="#0" className="link">
                          Sudah punya akun?
                        </a>
                      </p>
                      <button type="submit" className="btn mt-4">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Removed card-back for Sign Up */}
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

export default Register;
