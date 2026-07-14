import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Pharmacy() {

  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  function fetchMedicines() {
    axios
      .get("http://127.0.0.1:5000/pharmacy")
      .then((res) => {
        setMedicines(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch medicines");
      });
  }
  useEffect(() => {
    fetchMedicines();
  }, []);

  function deleteMedicine(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this medicine?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`http://127.0.0.1:5000/pharmacy/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchMedicines();
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to delete medicine");
      });
  }

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.medicine_name.toLowerCase().includes(search.toLowerCase()) ||
    medicine.manufacturer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Pharmacy Management</h2>

            <Link
              to="/admin/pharmacy/add"
              className="btn btn-primary"
            >
              + Add Medicine
            </Link>

          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Medicine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">

                <tr>
                  <th>ID</th>
                  <th>Medicine Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Expiry Date</th>
                  <th>Manufacturer</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredMedicines.length > 0 ? (

                  filteredMedicines.map((medicine) => (

                    <tr key={medicine.medicine_id}>

                      <td>{medicine.medicine_id}</td>
                      <td>{medicine.medicine_name}</td>
                      <td>{medicine.quantity}</td>
                      <td>₹ {medicine.price}</td>
                      <td>{medicine.expiry_date}</td>
                      <td>{medicine.manufacturer}</td>

                      <td>

                        <Link
                          to={`/admin/pharmacy/edit/${medicine.medicine_id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteMedicine(medicine.medicine_id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="7">
                      No Medicines Found
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

export default Pharmacy;