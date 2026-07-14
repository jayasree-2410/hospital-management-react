import { useEffect, useState } from "react";
import axios from "axios";

import ReceptionistSidebar from "../../components/ReceptionistSidebar";
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

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.doctor_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <ReceptionistSidebar />

      <div className="dashboard-content">

        <Topbar role="Receptionist" />

        <div className="container-fluid mt-4 px-4">

          <h2 className="mb-4">Doctors</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center">

              <thead className="table-primary">
                <tr>
                  <th>Doctor ID</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Qualification</th>
                  <th>Phone</th>
                  <th>Consultation Fee</th>
                </tr>
              </thead>

              <tbody>

                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <tr key={doctor.doctor_id}>
                      <td>{doctor.doctor_id}</td>
                      <td>{doctor.doctor_name}</td>
                      <td>{doctor.specialization}</td>
                      <td>{doctor.qualification}</td>
                      <td>{doctor.phone}</td>
                      <td>{doctor.consultation_fee}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">
                      No Doctors Found
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

export default Doctors;