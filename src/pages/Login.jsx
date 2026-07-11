import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "Admin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        formData
      );
      console.log(res.data);

      alert(res.data.message);

      switch (res.data.role) {
        case "Admin":
          navigate("/admin/dashboard");
          break;

        case "Receptionist":
          navigate("/receptionist/dashboard");
          break;

        case "Doctor":
          navigate("/doctor/dashboard");
          break;

        case "Laboratory":
          navigate("/laboratory/dashboard");
          break;

        case "Pharmacy":
          navigate("/pharmacy/dashboard");
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">
              Username
            </label>

            <input
              type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Role
            </label>

            <select
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option>Admin</option>
              <option>Receptionist</option>
              <option>Doctor</option>
              <option>Laboratory</option>
              <option>Pharmacy</option>
            </select>
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;