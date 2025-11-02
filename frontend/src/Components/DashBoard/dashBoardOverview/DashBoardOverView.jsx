import React from "react";
import "./dashboardOverview.css";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { SiContactlesspayment } from "react-icons/si";
export const DashBoardOverView = () => {
  return (
    <>
      <h3>Dashboard Overview</h3>
      <div className="overView">
        <div className="totalEmployee">
          <FaUsersViewfinder className="icons" />
          <div className="text">
            <h4>Total Employees</h4>
            <p>150</p>
          </div>
        </div>
        <div className="totalEmployee">
          <FcDepartment className="icons_dep" />
          <div className="text">
            <h4>Department</h4>
            <p>10</p>
          </div>
        </div>
        <div className="totalEmployee">
          <SiContactlesspayment className="icons_pay" />
          <div className="text">
            <h4>Salary</h4>
            <p>$150,000</p>
          </div>
        </div>
        <div className="totalEmployee">
          <SiContactlesspayment className="icons_pay" />
          <div className="text">
            <h4>Salary</h4>
            <p>$150,000</p>
          </div>
        </div>
        <div className="totalEmployee">
          <SiContactlesspayment className="icons_pay" />
          <div className="text">
            <h4>Salary</h4>
            <p>$150,000</p>
          </div>
        </div>
      </div>
    </>
  );
};
