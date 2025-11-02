import React from "react";
import "./dashboardOverview.css";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { SiContactlesspayment } from "react-icons/si";
import { FcDocument } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { MdPending } from "react-icons/md";
export const DashBoardOverView = () => {
  return (
    <>
      <h3>Dashboard Overview</h3>
      <div className="employee">
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
        </div>
        <div className="leave">
          <p>Leave Details</p>
          <div className="overView">
            <div className="totalEmployee">
              <FcDocument className="icons" />
              <div className="text">
                <h4>Leave Applied</h4>
                <p>10</p>
              </div>
            </div>
            <div className="totalEmployee">
              <FcApproval className="icons" />
              <div className="text">
                <h4>Leave Approved</h4>
                <p>5</p>
              </div>
            </div>
            <div className="totalEmployee">
              <MdPending className="icons" />
              <div className="text">
                <h4>Leave Pending</h4>
                <p>2</p>
              </div>
            </div>
            <div className="totalEmployee">
              <FcDisapprove className="icons" />
              <div className="text">
                <h4>Leave Rejected</h4>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
