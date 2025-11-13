import { Outlet } from "react-router-dom";
import { DashBoardOverView } from "../Components/DashBoard/dashBoardOverview/DashBoardOverView";
import EmployeeManege from "../Components/DashBoard/EmployeeManegment/EmployeeManege";
import { NavBar } from "../Components/DashBoard/navBar/NavBar";
import { AdminSiderbar } from "../Components/DashBoard/sidebar/AdminSiderbar";
export const AdminDashbord = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <AdminSiderbar />
        </div>
        <div>
         <Outlet/>
        </div>
        
      </div>
    </div>
  );
};
