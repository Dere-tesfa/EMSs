import { DashBoardOverView } from "../Components/DashBoard/dashBoardOverview/DashBoardOverView";
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
          <DashBoardOverView />
        </div>
      </div>
    </div>
  );
};
