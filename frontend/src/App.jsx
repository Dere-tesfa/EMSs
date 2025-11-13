import { Routes, Route } from "react-router-dom";
import { AdminDashbord } from "./Pages/AdminDashbord";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";
import EmployeeManege from "./Components/DashBoard/EmployeeManegment/EmployeeManege";
import { DashBoardOverView } from "./Components/DashBoard/dashBoardOverview/DashBoardOverView";

export const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Admin Routes */}
      <Route path="/dashboard" element={<AdminDashbord />}>
        {/* 👇 Child routes (these render inside <Outlet /> in AdminDashbord) */}
        <Route index element={<DashBoardOverView />} />
        <Route path="overview" element={<DashBoardOverView />} />
        <Route path="employee" element={<EmployeeManege />} />
      </Route>
    </Routes>
  );
};
