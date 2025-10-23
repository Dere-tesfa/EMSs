// import { useState } from "react";
import axios from "axios";
import { Cursor } from "mongoose";
import { useState } from "react";
import { Alignment } from "react-data-table-component";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  };
  const handSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auto/login",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const styles = {
    total_containers: {
      display: "flex",
      justifyContent: "center",
      Alignment: "center",
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
      fontFamily: "monolic",
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
            Employee management System
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
            <form style={styles.form} onSubmit={handSubmit}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                // value={formData.email}

                required
                style={styles.input}
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                // value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <div className=" p-1">
                <input type="checkbox" style={{ padding: "5px" }} />
                <a href="" style={{ color: "dodgerblue", paddingLeft: "10px" }}>
                  Forgot password
                </a>
              </div>
            </form>
            <button style={styles.btn}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
