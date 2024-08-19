import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GantiPass.css";
import Sidebar from "./Sidnav";

function GantiPass() {
  return (
    <div className="container-fluid p-5">
      <Sidebar className="sidebar" />
      <div className="password-change-container mt-5 p-6">
        <h2 className="text-center mb-4">Ganti Password</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Password Lama"
              required
            />
            <label htmlFor="oldPassword">Password Lama</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Password Baru"
              required
            />
            <label htmlFor="newPassword">Password Baru</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Konfirmasi Password Baru"
              required
            />
            <label htmlFor="confirmPassword">Konfirmasi Password Baru</label>
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
