import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ReceptionistSidebar from "../../components/ReceptionistSidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function AddBilling() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);

  const [formData, setFormData] = useState({
    patient_id: "",
    consultation_fee: "",
    laboratory_fee: "",
    medicine_fee: "",
    total_amount: 0,
    payment_status: "Pending",
    payment_method: "Cash",
    bill_date: "",
  });


  function fetchPatients() {
    axios
      .get("http://127.0.0.1:5000/patients")
      .then((res) => setPatients(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchPatients();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    const consultation =
      parseFloat(updatedData.consultation_fee) || 0;

    const laboratory =
      parseFloat(updatedData.laboratory_fee) || 0;

    const medicine =
      parseFloat(updatedData.medicine_fee) || 0;

    updatedData.total_amount =
      consultation + laboratory + medicine;

    setFormData(updatedData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/billing", formData)
      .then((res) => {
        alert(res.data.message);
        navigate("/receptionist/billing");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to add bill");
      });
  }

  return (
    <div className="dashboard">
      <ReceptionistSidebar />

      <div className="dashboard-content">
        <Topbar role="receptionist" />

        <div className="container mt-4">

          <h2 className="mb-4">
            Add Bill
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Patient</label>

              <select
                className="form-control"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Patient
                </option>

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
              <label>Consultation Fee</label>

              <input
                type="number"
                className="form-control"
                name="consultation_fee"
                value={formData.consultation_fee}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Laboratory Fee</label>

              <input
                type="number"
                className="form-control"
                name="laboratory_fee"
                value={formData.laboratory_fee}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Medicine Fee</label>

              <input
                type="number"
                className="form-control"
                name="medicine_fee"
                value={formData.medicine_fee}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Total Amount</label>

              <input
                type="number"
                className="form-control"
                value={formData.total_amount}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label>Payment Status</label>

              <select
                className="form-control"
                name="payment_status"
                value={formData.payment_status}
                onChange={handleChange}
              >
                <option>Pending</option>
                <option>Paid</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Payment Method</label>

              <select
                className="form-control"
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
              >
                <option>Cash</option>
                <option>Card</option>
                <option>UPI</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Bill Date</label>

              <input
                type="date"
                className="form-control"
                name="bill_date"
                value={formData.bill_date}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary">
              Save Bill
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddBilling;