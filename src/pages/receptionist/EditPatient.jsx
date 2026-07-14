import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ReceptionistSidebar from "../../components/ReceptionistSidebar";
import Topbar from "../../components/Topbar";

function EditPatient() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    patient_name: "",
    gender: "",
    age: "",
    phone: "",
    address: "",
    blood_group: "",
    disease: ""
  });


  function fetchPatient() {
    axios
      .get(`http://127.0.0.1:5000/patients/${id}`)
      .then((res) => {
        setPatient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchPatient();
  }, []);

  function handleChange(e) {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:5000/patients/${id}`, patient)
      .then((res) => {
        alert(res.data.message);
        navigate("/receptionist/register-patients");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to update patient");
      });
  }

  return (
    <div className="dashboard">

      <ReceptionistSidebar />

      <div className="dashboard-content">

        <Topbar role="Receptionist" />

        <div className="container mt-4">

          <div className="card shadow p-4">

            <h2 className="mb-4">
              Edit Patient
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Patient Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="patient_name"
                  value={patient.patient_name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Gender</label>

                <select
                  className="form-control"
                  name="gender"
                  value={patient.gender}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Age</label>

                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={patient.age}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Phone</label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={patient.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Address</label>

                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={patient.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Blood Group</label>

                <input
                  type="text"
                  className="form-control"
                  name="blood_group"
                  value={patient.blood_group}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Disease</label>

                <input
                  type="text"
                  className="form-control"
                  name="disease"
                  value={patient.disease}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-success">
                Update Patient
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditPatient;