import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import axios from "axios";

function AddPatient() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    patient_name: "",
    gender: "",
    age: "",
    phone: "",
    address: "",
    blood_group: "",
    disease: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:5000/patients",
        patient
      );

      alert("Patient Added Successfully");

      navigate("/admin/patients");
    } catch (error) {
      alert("Unable to Add Patient");
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container mt-4">

          <div className="card shadow p-4">

            <h2 className="mb-4 text-center">
              Add New Patient
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Patient Name</label>

                <input
                  type="text"
                  name="patient_name"
                  className="form-control"
                  value={patient.patient_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Gender</label>

                <select
                  name="gender"
                  className="form-select"
                  value={patient.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Age</label>

                <input
                  type="number"
                  name="age"
                  className="form-control"
                  value={patient.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Phone</label>

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={patient.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Address</label>

                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={patient.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label>Blood Group</label>

                <select
                  name="blood_group"
                  className="form-select"
                  value={patient.blood_group}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              <div className="mb-4">
                <label>Disease</label>

                <input
                  type="text"
                  name="disease"
                  className="form-control"
                  value={patient.disease}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-success me-3">
                Save Patient
              </button>

              <button
                type="reset"
                className="btn btn-secondary"
              >
                Reset
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AddPatient;