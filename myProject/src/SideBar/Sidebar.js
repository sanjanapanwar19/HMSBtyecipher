import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ images, collaspeEvent }) => {
  console.log("collaspseEvent is sidebar component", collaspeEvent);
  const location = useLocation();
  console.log("current path is", location.pathname);
  const currentPathname = location.pathname;
  const { collasped, setCollasped } = collaspeEvent;
  console.log("images props in side bar component", images);
  // const customClass = `sidebar ${collasped && "sidebar_small"}`
  const sideLogo = collasped ? images.smallLogo : images.dummyLogo;
  console.log("side logo is", sideLogo);
  console.log("sanjana panwar is side bar component");
  return (
    <div className={`sidebar ${collasped && "sidebar_small"}`}>
      <header>
        <img src={sideLogo} alt="" className="logo" />
      </header>
      <div class="menu">
        <div className={`item ${currentPathname === "/dashboard" && "active"}`}>
          <Link to={"/dashboard"}>
            <img src={images.dashboard} alt="" />
            <span>Dashboard</span>
          </Link>
        </div>
        <div
          className={`item ${
            currentPathname.toLowerCase().includes("appointment") && "active"
          }`}
        >
          <Link to={"/appointment"}>
            <img src={images.appointmentImg} alt="" />
            <span>My Appointments</span>
          </Link>
        </div>
        <div
          className={`item ${
            currentPathname.toLowerCase().includes("patient") && "active"
          }`}
        >
          <Link to="/patient">
            <img src={images.patient} alt="" />
            <span>Patients</span>
          </Link>
        </div>
        <div
          className={`item ${
            currentPathname.toLowerCase().includes("staff") && "active"
          }`}
        >
          <Link to="/staff">
            <img src={images.staff} alt="" />
            <span>Staff</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
