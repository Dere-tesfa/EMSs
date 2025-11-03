import React from "react";
import "./AdminSider.css";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { FcLeave } from "react-icons/fc";
import { SiContactlesspayment } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
export const AdminSiderbar = () => {
  return (
    <div className="totaSiderBar">
      <div className="sideBar">
        <NavLink to="/dashboard">
          <h2>
            <MdDashboard className="icon_dash" />
            <span>Dashboard</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/">
          <h2>
            <FaUsers />
            <span>Employees</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/">
          <h2>
            <FcDepartment />
            <span>Department</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/">
          <h2>
            <FcLeave />
            <span>Leave</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/">
          <h2>
            <SiContactlesspayment />
            <span>Salary</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/">
          <h2>
            <IoSettings />
            <span>Settings</span>
          </h2>
        </NavLink>
      </div>
      <div className="sideBar">
        <NavLink to="/login">
          <h2>
            <IoIosLogOut />
            <span>Logout</span>
          </h2>
        </NavLink>
      </div>
    </div>
  );
};
