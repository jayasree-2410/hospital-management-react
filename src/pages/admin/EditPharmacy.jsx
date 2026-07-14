import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

import "../../styles/Dashboard.css";

function EditPharmacy() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    medicine_name: "",
    quantity: "",
    price: "",
    expiry_date: "",
    manufacturer: "",
  });

  function fetchMedicine() {
    axios
      .get(`http://127.0.0.1:5000/pharmacy/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to fetch medicine");
      });
  }
  useEffect(() => {
    fetchMedicine();
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:5000/pharmacy/${id}`, formData)
      .then((res) => {
        alert(res.data.message);
        navigate("/admin/pharmacy");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to update medicine");
      });
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />

        <div className="container mt-4">
          <h2 className="mb-4">Edit Medicine</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Medicine Name</label>

              <input
                type="text"
                className="form-control"
                name="medicine_name"
                value={formData.medicine_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>

              <input
                type="number"
                className="form-control"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price (₹)</label>

              <input
                type="number"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Expiry Date</label>

              <input
                type="date"
                className="form-control"
                name="expiry_date"
                value={formData.expiry_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Manufacturer</label>

              <input
                type="text"
                className="form-control"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-success">
              Update Medicine
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPharmacy;