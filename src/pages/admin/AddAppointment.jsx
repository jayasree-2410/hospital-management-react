import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function AddAppointment() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient_id: "",
    doctor_id: "",
    appointment_date: "",
    appointment_time: "",
    status: "Pending",
  });



  function fetchPatients() {
    axios
      .get("http://127.0.0.1:5000/patients")
      .then((res) => setPatients(res.data))
      .catch((err) => console.log(err));
  }

  function fetchDoctors() {
    axios
      .get("http://127.0.0.1:5000/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log(err));
  }
   useEffect(() => {
    fetchPatients();
    fetchDoctors();
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/appointments", formData)
      .then((res) => {
        alert(res.data.message);
        navigate("/admin/appointments");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to add appointment");
      });
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container mt-4">
          <h2 className="mb-4">Add Appointment</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Patient</label>

              <select
                className="form-control"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Patient</option>

                {patients.map((patient) => (
                  <option
                    key={patient.patient_id}
                    value={patient.patient_id}
                  >
                    {patient.patient_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Doctor</label>

              <select
                className="form-control"
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>

                {doctors.map((doctor) => (
                  <option
                    key={doctor.doctor_id}
                    value={doctor.doctor_id}
                  >
                    {doctor.doctor_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Appointment Date</label>

              <input
                type="date"
                className="form-control"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Appointment Time</label>

              <input
                type="time"
                className="form-control"
                name="appointment_time"
                value={formData.appointment_time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>

              <select
                className="form-control"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </select>
            </div>

            <button className="btn btn-primary">
              Save Appointment
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAppointment; 