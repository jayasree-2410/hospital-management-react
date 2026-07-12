import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    doctor_name: "",
    specialization: "",
    qualification: "",
    phone: "",
    consultation_fee: ""
  });

  useEffect(() => {
    fetchDoctor();
  }, []);

  function fetchDoctor() {
    axios
      .get(`http://127.0.0.1:5000/doctors/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch doctor");
      });
  }

  function handleChange(e) {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:5000/doctors/${id}`, doctor)
      .then((res) => {
        alert(res.data.message);
        navigate("/admin/doctors");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to update doctor");
      });
  }

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container mt-4">

          <div className="card shadow p-4">

            <h2 className="mb-4">Edit Doctor</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Doctor Name</label>
                <input
                  type="text"
                  name="doctor_name"
                  className="form-control"
                  value={doctor.doctor_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  className="form-control"
                  value={doctor.specialization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  className="form-control"
                  value={doctor.qualification}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={doctor.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Consultation Fee</label>
                <input
                  type="number"
                  name="consultation_fee"
                  className="form-control"
                  value={doctor.consultation_fee}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success">
                Update Doctor
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditDoctor;