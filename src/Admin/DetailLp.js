import React from 'react'
import Sidebar from '../component/Sidnav'

function DetailLp() {
    return (
        <div className="d-flex " style={{ marginTop: "15%", marginLeft: "25px" }}>
            <Sidebar />
            <section className="" style={{ width: "100%", marginRight: "10%" }}>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                            <div className="row g-0">
                                <div
                                    className="col-md-4 d-flex flex-column align-items-center justify-content-center text-center text-white"
                                    style={{
                                        background: "linear-gradient(40deg,#45cafc,#303f9f)",
                                        borderTopLeftRadius: ".5rem",
                                        borderBottomLeftRadius: ".5rem",
                                        padding: "20px",
                                    }}
                                >
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
                                        alt="Avatar"
                                        className="my-5 mb-2 mt-2"
                                        style={{
                                            width: "100px",
                                            borderRadius: "50%",
                                            height: "100px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "relative",
                                            textAlign: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: "-15px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                fontWeight: "bold",
                                                color: "white",
                                            }}
                                        ></span>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <div>
                                            <h6>Detail Project List</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Project Name</h6>
                                                    <p className="text-muted">E-Project</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Technology</h6>
                                                    <p className="text-muted">React</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Developer</h6>
                                                    <p className="text-muted">Elon Musk</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Link</h6>
                                                    <p className="text-muted">https://haha.com</p>
                                                </div>
                                                <div className="col-15 mb-3">
                                                    <h6>Project Description</h6>
                                                    <p className="text-muted">This is Perfect Project</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailLp
