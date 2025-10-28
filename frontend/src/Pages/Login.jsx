import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api.js";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/", formData);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login successful!");
      navigate("/"); // redirect after login
    } catch (err) {
      alert(err.response?.data?.error || " Login failed");
    }
  };

  const styles = {
    total_containers: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "350px",
      padding: "20px",
      borderRadius: "10px",
    },
    constainers: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
      flexDirection: "column",
      backgroundColor: "#f6f5f5",
      padding: "10px",
      borderRadius: "10px",
    },
    FormContainer: {
      padding: "30px",
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.5)",
      borderRadius: "5px",
      width: "250px",
    },
    form: { display: "flex", flexDirection: "column", padding: "15px" },
    input: {
      padding: "10px",
      outline: "none",
      borderRadius: "5px",
      textAlign: "center",
      fontFamily: "monospace",
      fontWeight: "bold",
      border: "1px solid #e9e2e2ff",
    },
    btn: {
      padding: "7px",
      marginTop: "10px",
      borderRadius: "5px",
      border: "none",
      fontSize: "20px",
      backgroundColor: "green",
      color: "white",
      width: "100%",
      cursor: "pointer",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "30px",
        padding: "20px",
      }}
    >
      <div style={styles.total_containers}>
        <div style={styles.constainers}>
          <h1
            style={{
              padding: "5px",
              fontFamily: "cursive",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#190166",
            }}
          >
            Employee Management System
          </h1>
          <div style={styles.FormContainer}>
            <h1
              style={{
                textAlign: "center",
                padding: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Login
            </h1>
            <hr />
            <form style={styles.form} onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                required
                style={styles.input}
              />
              <div className="p-1">
                <input type="checkbox" style={{ padding: "5px" }} />
                <a
                  href="#"
                  style={{ color: "dodgerblue", paddingLeft: "10px" }}
                >
                  Forgot password
                </a>
              </div>
              <button type="submit" style={styles.btn}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
