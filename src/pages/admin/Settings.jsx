import { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Settings() {

  const [settings, setSettings] = useState({
    hospital_name: "City Hospital",
    address: "Bangalore, Karnataka",
    phone: "9876543210",
    email: "cityhospital@gmail.com",
  });

  function handleChange(e) {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Settings Updated Successfully");
  }

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container mt-4">

          <h2 className="mb-4">
            Hospital Settings
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Hospital Name
              </label>

              <input
                type="text"
                className="form-control"
                name="hospital_name"
                value={settings.hospital_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Hospital Address
              </label>

              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={settings.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Contact Number
              </label>

              <input
                type="text"
                className="form-control"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Settings
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Settings;