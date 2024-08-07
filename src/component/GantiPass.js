import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/GantiPass.css";

function GantiPass() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="password-change-container mt-5 p-4">
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
            </div>
        </div>
    );
}

export default GantiPass;
