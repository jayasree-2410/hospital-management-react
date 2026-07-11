import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ReceptionistDashboard from "../pages/receptionist/ReceptionistDashboard";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import LaboratoryDashboard from "../pages/laboratory/LaboratoryDashboard";
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";
import Patients from "../pages/admin/Patients";
import AddPatient from "../pages/admin/AddPatient";
import EditPatient from "../pages/admin/EditPatient";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />

        <Route
          path="/doctor/dashboard"
          element={<DoctorDashboard />}
        />

        <Route
          path="/laboratory/dashboard"
          element={<LaboratoryDashboard />}
        />

        <Route
          path="/pharmacy/dashboard"
          element={<PharmacyDashboard />}
        />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/patients/add" element={<AddPatient />} />
        <Route path="/admin/patients/edit/:id" element={<EditPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;