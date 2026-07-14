import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function Billing() {
  const [bills, setBills] = useState([]);
  const [search, setSearch] = useState("");


  function fetchBills() {
    axios
      .get("http://127.0.0.1:5000/billing")
      .then((res) => {
        setBills(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch bills");
      });
  }
  useEffect(() => {
    fetchBills();
  }, []);

  function deleteBill(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bill?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`http://127.0.0.1:5000/billing/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchBills();
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to delete bill");
      });
  }

  const filteredBills = bills.filter((bill) =>
    bill.patient_name.toLowerCase().includes(search.toLowerCase()) ||
    bill.payment_status.toLowerCase().includes(search.toLowerCase()) ||
    bill.payment_method.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container-fluid mt-4 px-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Billing Management</h2>

            <Link
              to="/admin/billing/add"
              className="btn btn-primary"
            >
              + Add Bill
            </Link>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Bill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="table-responsive">

            <table className="table table-bordered table-hover text-center align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Bill ID</th>
                  <th>Patient</th>
                  <th>Consultation</th>
                  <th>Laboratory</th>
                  <th>Medicine</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredBills.length > 0 ? (
                  filteredBills.map((bill) => (
                    <tr key={bill.bill_id}>

                      <td>{bill.bill_id}</td>
                      <td>{bill.patient_name}</td>
                      <td>₹ {bill.consultation_fee}</td>
                      <td>₹ {bill.laboratory_fee}</td>
                      <td>₹ {bill.medicine_fee}</td>
                      <td>₹ {bill.total_amount}</td>
                      <td>{bill.payment_status}</td>
                      <td>{bill.payment_method}</td>
                      <td>{bill.bill_date}</td>

                      <td>

                        <Link
                          to={`/admin/billing/edit/${bill.bill_id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteBill(bill.bill_id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No Bills Found</td>
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

export default Billing;