import { Routes, Route } from "react-router-dom";
import { AdminDashbord } from "./Pages/AdminDashbord";
import Login from "./Pages/Login";
import { Register } from "./Pages/Register";
import { DashBoardOverView } from "./Components/DashBoard/dashBoardOverview/DashBoardOverView";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AdminDashbord />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
