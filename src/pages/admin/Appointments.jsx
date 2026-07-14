import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");


  function fetchAppointments() {
    axios
      .get("http://127.0.0.1:5000/appointments")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch appointments");
      });
  }
  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.patient_name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      appointment.doctor_name
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  function deleteAppointment(id) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this appointment?"
  );

  if (!confirmDelete) {
    return;
  }

  axios
    .delete(`http://127.0.0.1:5000/appointments/${id}`)
    .then((res) => {
      alert(res.data.message);
      fetchAppointments();
    })
    .catch((err) => {
      console.log(err);
      alert("Unable to delete appointment");
    });
}

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Appointments Management</h2>

            <Link
              to="/admin/appointments/add"
              className="btn btn-primary"
            >
              + Add Appointment
            </Link>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Appointment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appointment) => (
                    <tr key={appointment.appointment_id}>
                      <td>{appointment.appointment_id}</td>
                      <td>{appointment.patient_name}</td>
                      <td>{appointment.doctor_name}</td>
                      <td>
                        {new Date(
                          appointment.appointment_date
                        ).toLocaleDateString()}
                      </td>
                      <td>{appointment.appointment_time}</td>
                      <td>{appointment.status}</td>

                      <td>
                        <Link
                          to={`/admin/appointments/edit/${appointment.appointment_id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteAppointment(appointment.appointment_id)}
                        >
                         Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">
                      No Appointments Found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Appointments;