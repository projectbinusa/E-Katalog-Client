import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GantiPass.css";
import Sidebar from "./Sidnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function GantiPass() {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="container-fluid p-5">
      <Sidebar className="sidebar5" />
      <div className="password-change-container p-6">
        <h2 className="text-center mb-4">Change Password</h2>
        <form>
          <div className="form-floating mb-3 position-relative">
            <input
              type={oldPasswordVisible ? "text" : "password"}
              className="form-control"
              id="oldPassword"
              placeholder="Old Password"
              required
            />
            <label htmlFor="oldPassword">Old Password</label>
            <span
              onClick={toggleOldPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{ top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer", fontSize: "20px" }}
            >
              <FontAwesomeIcon icon={oldPasswordVisible ? faEye : faEyeSlash} />
            </span>
          </div>

          <div className="form-floating mb-3 position-relative">
            <input
              type={newPasswordVisible ? "text" : "password"}
              className="form-control"
              id="newPassword"
              placeholder="New Password"
              required
            />
            <label htmlFor="newPassword">New Password</label>
            <span
              onClick={toggleNewPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{ top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer", fontSize: "20px" }}
            >
              <FontAwesomeIcon icon={newPasswordVisible ? faEye : faEyeSlash} />
            </span>
          </div>

          <div className="form-floating mb-3 position-relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm New Password"
              required
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{ top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer", fontSize: "20px" }}
            >
              <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash} />
            </span>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default GantiPass;
