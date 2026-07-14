import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function EditLaboratory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient_id: "",
    doctor_id: "",
    test_name: "",
    result: "",
    test_date: "",
    status: "",
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

  function fetchTest() {
    axios
      .get(`http://127.0.0.1:5000/laboratory/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch laboratory test");
      });
  }
  useEffect(() => {
    fetchPatients();
    fetchDoctors();
    fetchTest();
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
      .put(`http://127.0.0.1:5000/laboratory/${id}`, formData)
      .then((res) => {
        alert(res.data.message);
        navigate("/admin/laboratory");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to update laboratory test");
      });
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container mt-4">
          <h2 className="mb-4">Edit Laboratory Test</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Patient</label>

              <select
                className="form-control"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
              >
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
              <label>Doctor</label>

              <select
                className="form-control"
                name="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
              >
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
              <label>Test Name</label>

              <input
                type="text"
                className="form-control"
                name="test_name"
                value={formData.test_name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Result</label>

              <textarea
                className="form-control"
                rows="3"
                name="result"
                value={formData.result}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Test Date</label>

              <input
                type="date"
                className="form-control"
                name="test_date"
                value={formData.test_date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Status</label>

              <select
                className="form-control"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>

            <button className="btn btn-success">
              Update Test
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default EditLaboratory;