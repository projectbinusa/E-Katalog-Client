import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GantiPass.css";
import Sidebar from "./Sidnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { API_DUMMY } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";

function GantiPass() {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Password match validation
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    try {
      const userId = localStorage.getItem("id"); // Ensure userId is correct
      console.log("userId:", userId); // Debugging

      if (!userId) {
        setError("User not logged in. Please log in again.");
        return;
      }

      const body = {
        passwordLama: oldPassword,
        passwordBaru: newPassword,
        konfirmasiPassword: confirmPassword
      }
      const response = await axios.put(`${API_DUMMY}/api/change-password/${userId}`, body
      );
      console.log("response status:", response.status); // Debug response status

      
    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password changed successfully.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to change password.',
      });
      const errorMessage = await response.data;
      setError(errorMessage.message || "Failed to change password.");
    }
  } catch (error) {
    console.error("Catch error:", error); // Debug catch errors
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while changing the password.',
    });
  }
};

  return (
    <div className="container-fluid p-5">
      <Sidebar className="sidebar5" />
      <div className="password-change-container p-6">
        <h2 className="text-center mb-4">Change Password</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3 position-relative">
            <input
              type={oldPasswordVisible ? "text" : "password"}
              className="form-control"
              id="oldPassword"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
            <label htmlFor="oldPassword">Old Password</label>
            <span
              onClick={toggleOldPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
              }}
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="newPassword">New Password</label>
            <span
              onClick={toggleNewPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
              }}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="password-toggle-icon position-absolute"
              style={{
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEye : faEyeSlash}
              />
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
