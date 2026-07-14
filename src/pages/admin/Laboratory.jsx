import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Laboratory() {
  const [tests, setTests] = useState([]);
  const [search, setSearch] = useState("");

  function fetchTests() {
    axios
      .get("http://127.0.0.1:5000/laboratory")
      .then((res) => {
        setTests(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch laboratory tests");
      });
  }
  useEffect(() => {
    fetchTests();
  }, []);

  function deleteTest(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this test?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`http://127.0.0.1:5000/laboratory/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchTests();
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to delete test");
      });
  }

  const filteredTests = tests.filter((test) =>
    test.patient_name.toLowerCase().includes(search.toLowerCase()) ||
    test.doctor_name.toLowerCase().includes(search.toLowerCase()) ||
    test.test_name.toLowerCase().includes(search.toLowerCase()) ||
    test.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Laboratory Management</h2>

            <Link
              to="/admin/laboratory/add"
              className="btn btn-primary"
            >
              + Add Test
            </Link>

          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Laboratory Test..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">

                <tr>
                  <th>Lab ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Test Name</th>
                  <th>Result</th>
                  <th>Test Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredTests.length > 0 ? (
                  filteredTests.map((test) => (
                    <tr key={test.lab_id}>

                      <td>{test.lab_id}</td>
                      <td>{test.patient_name}</td>
                      <td>{test.doctor_name}</td>
                      <td>{test.test_name}</td>
                      <td>{test.result}</td>
                      <td>{test.test_date}</td>
                      <td>{test.status}</td>

                      <td>

                        <Link
                          to={`/admin/laboratory/edit/${test.lab_id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteTest(test.lab_id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No Laboratory Tests Found</td>
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

export default Laboratory;