import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");


  function fetchDoctors() {
    axios
      .get("http://127.0.0.1:5000/doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch doctors");
      });
  }
  useEffect(() => {
    fetchDoctors();
  }, []);

  function deleteDoctor(id) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this doctor?"
  );

  if (!confirmDelete) {
    return;
  }

  axios
    .delete(`http://127.0.0.1:5000/doctors/${id}`)
    .then((res) => {
      alert(res.data.message);
      fetchDoctors();
    })
    .catch((err) => {
      console.log(err);
      alert("Unable to delete doctor");
    });
  }
  const filteredDoctors = doctors.filter((doctor) =>
  doctor.doctor_name.toLowerCase().includes(search.toLowerCase()) ||
  doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Doctors Management</h2>

            <Link
              to="/admin/doctors/add"
              className="btn btn-primary"
            >
              + Add Doctor
            </Link>

          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Doctor Name or Specialization..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">

                <tr>
                  <th>Doctor ID</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Qualification</th>
                  <th>Phone</th>
                  <th>Consultation Fee</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredDoctors.length > 0 ? (
                  doctors
                    .filter((doctor) =>
                    doctor.doctor_name.toLowerCase().includes(search.toLowerCase()) ||
                    doctor.specialization.toLowerCase().includes(search.toLowerCase())
                )
                .map((doctor) => (
                    <tr key={doctor.doctor_id}>

                      <td>{doctor.doctor_id}</td>
                      <td>{doctor.doctor_name}</td>
                      <td>{doctor.specialization}</td>
                      <td>{doctor.qualification}</td>
                      <td>{doctor.phone}</td>
                      <td>₹ {doctor.consultation_fee}</td>

                      <td>

                        <Link
                          to={`/admin/doctors/edit/${doctor.doctor_id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteDoctor(doctor.doctor_id)}
                        >
                            Delete
                        </button>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No Doctors Found</td>
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

export default Doctors;