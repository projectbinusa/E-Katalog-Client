import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GantiPass.css";
import Sidebar from "./Sidnav";

function GantiPass() {
  return (
    <div className="container-fluid p-5">
      <Sidebar className="sidebar5" />
      <div className="password-change-container p-6">
        <h2 className="text-center mb-4">Change Password</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Old Password"
              required
            />
            <label htmlFor="oldPassword">Old Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New Password"
              required
            />
            <label htmlFor="newPassword">New Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm New Password"
              required
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Ganti Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default GantiPass;
