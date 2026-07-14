import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserInjured,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

import ReceptionistSidebar from "../../components/ReceptionistSidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Dashboard() {
  const [counts, setCounts] = useState({
    patients: 0,
    appointments: 0,
    bills: 0,
  });

  function fetchCounts() {
    axios
      .get("http://127.0.0.1:5000/reports")
      .then((res) => {
        setCounts({
          patients: res.data.patients,
          appointments: res.data.appointments,
          bills: res.data.billing,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="dashboard">

      <ReceptionistSidebar />

      <div className="dashboard-content">

        <Topbar role="Receptionist" />

        <div className="container-fluid mt-4">

          <h2 className="mb-4">
            Receptionist Dashboard
          </h2>

          <div className="row">

            <div className="col-md-4">
              <div className="card shadow p-4 text-center">
                <FaUserInjured size={45} className="text-primary mb-3" />
                <h5>Total Patients</h5>
                <h2>{counts.patients}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow p-4 text-center">
                <FaCalendarCheck size={45} className="text-success mb-3" />
                <h5>Total Appointments</h5>
                <h2>{counts.appointments}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow p-4 text-center">
                <FaMoneyBillWave size={45} className="text-danger mb-3" />
                <h5>Total Bills</h5>
                <h2>{counts.bills}</h2>
              </div>
            </div>

          </div>

          <div className="card mt-5 shadow p-4">
            <h4>Welcome Receptionist 👋</h4>

            <p className="mb-0">
              You can register patients, schedule appointments,
              manage billing, and view the doctors list from this dashboard.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;