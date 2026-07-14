import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaFlask,
  FaCapsules,
  FaMoneyBillWave,
} from "react-icons/fa";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Reports() {
  const [report, setReport] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    laboratory: 0,
    pharmacy: 0,
    billing: 0,
  });

  function fetchReports() {
    axios
      .get("http://127.0.0.1:5000/reports")
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch reports");
      });
  }
  useEffect(() => {
    fetchReports();
  }, []);


  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container-fluid mt-4">

          <h2 className="mb-4">Hospital Reports</h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaUserInjured size={40} className="mb-3 text-primary" />
                <h5>Total Patients</h5>
                <h2>{report.patients}</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaUserMd size={40} className="mb-3 text-success" />
                <h5>Total Doctors</h5>
                <h2>{report.doctors}</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaCalendarCheck size={40} className="mb-3 text-warning" />
                <h5>Total Appointments</h5>
                <h2>{report.appointments}</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaFlask size={40} className="mb-3 text-danger" />
                <h5>Laboratory Tests</h5>
                <h2>{report.laboratory}</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaCapsules size={40} className="mb-3 text-info" />
                <h5>Medicines</h5>
                <h2>{report.pharmacy}</h2>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow text-center p-4">
                <FaMoneyBillWave size={40} className="mb-3 text-success" />
                <h5>Total Bills</h5>
                <h2>{report.billing}</h2>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Reports;