import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Login.css"; // Ensure path is correct
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";

function Login() {
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
                    <h4 className="form-title">Login</h4> {/* Judul baru */}
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

export default Login;
