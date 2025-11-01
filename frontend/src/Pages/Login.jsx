import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiLogin.js";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await api.post("/", formData);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.error || "❌ Login failed";
      setError(message);
      alert(message);
    }
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
    },
    container: {
      width: "350px",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#190166",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
    },
    btn: {
      backgroundColor: "green",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.3s",
    },
    error: {
      color: "red",
      textAlign: "center",
      marginTop: "10px",
      fontSize: "14px",
    },
    forgot: {
      textAlign: "right",
      fontSize: "13px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Employee Management System</h2>
        <h3 style={{ textAlign: "center" }}>Login</h3>
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

          <div style={styles.forgot}>
            <input type="checkbox" /> Remember me
            <br />
            <a href="#" style={{ color: "dodgerblue" }}>
              Forgot password?
            </a>
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
