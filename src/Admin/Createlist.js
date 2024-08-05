import React from "react";
import Sidebar from "../component/Sidnav";
import "bootstrap/dist/css/bootstrap.min.css";

function Createlist() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <section
          style={{ width: "50%", marginLeft: "5%", marginTop: "4%" }}
        >
          <div className="container mt-4">
            <div className="card shadow-sm p-4">
              <div className="card-body">
                <h5 className="card-title">Create List</h5>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="input1" className="form-label">
                      Input 1
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input1"
                      placeholder="Enter first input"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="input2" className="form-label">
                      Input 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input2"
                      placeholder="Enter second input"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="input3" className="form-label">
                      Input 3
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input3"
                      placeholder="Enter third input"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="input4" className="form-label">
                      Input 4
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input4"
                      placeholder="Enter fourth input"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Createlist;
