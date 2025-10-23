import { BrowserRouter, Routes, Route } from "react-router-dom";


import { AdminDashbord } from "./Pages/AdminDashbord"
import Login from "./Pages/Login";



export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<AdminDashbord />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}
