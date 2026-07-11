import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");


  function fetchPatients() {
    axios
      .get("http://127.0.0.1:5000/patients")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Unable to fetch patients");
      });
  };
  useEffect(() => {
    fetchPatients();
  }, []);
  function deletePatient(id) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this patient?"
  );

  if (!confirmDelete) {
    return;
  }

  axios
    .delete(`http://127.0.0.1:5000/patients/${id}`)
    .then((res) => {
      alert(res.data.message);

      // Refresh the patient list
      fetchPatients();
    })
    .catch((err) => {
      console.log(err);
      alert("Unable to delete patient");
    });
}
    const filteredPatients = patients.filter((patient) =>
      patient.patient_name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Patients Management</h2>

            <Link
              to="/admin/patients/add"
              className="btn btn-primary"
            >
              + Add Patient
            </Link>

          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Patient Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Blood Group</th>
                  <th>Disease</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredPatients.length > 0 ? (
                  filteredPatients.map((patient) => (
                    <tr key={patient.patient_id}>

                      <td>{patient.patient_id}</td>
                      <td>{patient.patient_name}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.age}</td>
                      <td>{patient.phone}</td>
                      <td>{patient.address}</td>
                      <td>{patient.blood_group}</td>
                      <td>{patient.disease}</td>

                      <td>
                        <Link
                          to={`/admin/patients/edit/${patient.patient_id}`}
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => console.log("Navigating to:", `/admin/patients/edit/${patient.patient_id}`)}
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deletePatient(patient.patient_id)}
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">
                      No matching patient found
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

export default Patients;