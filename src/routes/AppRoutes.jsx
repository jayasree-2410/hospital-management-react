import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import DoctorsPage from "../components/Doctors";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ReceptionistDashboard from "../pages/receptionist/ReceptionistDashboard";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import LaboratoryDashboard from "../pages/laboratory/LaboratoryDashboard";
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";
import Patients from "../pages/admin/Patients";
import AddPatient from "../pages/admin/AddPatient";
import EditPatient from "../pages/admin/EditPatient";
import Doctors from "../pages/admin/Doctors";
import AddDoctor from "../pages/admin/AddDoctor";
import EditDoctor from "../pages/admin/EditDoctor";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<DoctorsPage />} />
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
        <Route path="/admin/doctors" element={<Doctors />} />
        <Route path="/admin/doctors/add" element={<AddDoctor />} />
        <Route path="/admin/doctors/edit/:id" element={<EditDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;