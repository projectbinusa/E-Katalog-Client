import React from "react";
import Sidebar from "../component/Sidnav";
import Home from "../component/Home";
import "../css/sidebar.css"; // Ensure this CSS file is correctly linked

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <section
        className=""
        
      >
          <Home style={{ background: "black", width: "100%", marginRight: "5%" }}/>
      </section>
    </div>
  );
}

export default Dashboard;
