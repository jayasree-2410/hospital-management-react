import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import DoctorsPage from "../components/Doctors"

import AdminDashboard from "../pages/admin/AdminDashboard";
import ReceptionistDashboard from "../pages/receptionist/Dashboard";
import DoctorDashboard from "../pages/doctor/DoctorDashboard";
import LaboratoryDashboard from "../pages/laboratory/LaboratoryDashboard";
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";
import Patients from "../pages/admin/Patients";
import AddPatient from "../pages/admin/AddPatient";
import EditPatient from "../pages/admin/EditPatient";
import Doctors from "../pages/admin/Doctors";
import AddDoctor from "../pages/admin/AddDoctor";
import EditDoctor from "../pages/admin/EditDoctor";
import Appointments from "../pages/admin/Appointments";
import AddAppointment from "../pages/admin/AddAppointment";
import EditAppointment from "../pages/admin/EditAppointment";
import Billing from "../pages/admin/Billing";
import AddBilling from "../pages/admin/AddBilling";
import EditBilling from "../pages/admin/EditBilling";
import Laboratory from "../pages/admin/Laboratory";
import AddLaboratory from "../pages/admin/AddLaboratory";
import EditLaboratory from "../pages/admin/EditLaboratory";
import Pharmacy from "../pages/admin/Pharmacy";
import AddPharmacy from "../pages/admin/AddPharmacy";
import EditPharmacy from "../pages/admin/EditPharmacy";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import RegisterPatient from "../pages/receptionist/RegisterPatient";
import ReceptionistAddPatient from "../pages/receptionist/AddPatient";
import ReceptionistEditPatient from "../pages/receptionist/EditPatient";
import ReceptionistDoctors from "../pages/receptionist/Doctors";
import ReceptionistAppointments from "../pages/receptionist/Appointments";
import ReceptionistAddAppointments from "../pages/receptionist/AddAppointments";
import ReceptionistEditAppointments from "../pages/receptionist/EditAppointments";
import ReceptionistBilling from "../pages/receptionist/Billing";
import ReceptionistAddBilling from "../pages/receptionist/AddBilling";
import ReceptionistEditBilling from "../pages/receptionist/EditBilling";

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
        <Route path="/admin/appointments" element={<Appointments />}/>
        <Route path="/admin/appointments/add" element={<AddAppointment />}/>
        <Route path="/admin/appointments/edit/:id" element={<EditAppointment />}/>
        <Route path="/admin/billing" element={<Billing />} />
        <Route path="/admin/billing/add" element={<AddBilling />} />
        <Route path="/admin/billing/edit/:id" element={<EditBilling />} />
        <Route path="/admin/laboratory" element={<Laboratory />} />
        <Route path="/admin/laboratory/add" element={<AddLaboratory />} />
        <Route path="/admin/laboratory/edit/:id" element={<EditLaboratory />} />
        <Route path="/admin/pharmacy" element={<Pharmacy />} />
        <Route path="/admin/pharmacy/add" element={<AddPharmacy />} />
        <Route path="/admin/pharmacy/edit/:id" element={<EditPharmacy />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/receptionist/register-patients" element={<RegisterPatient />} />
        <Route path="/receptionist/register-patients/add" element={<ReceptionistAddPatient />} />
        <Route path="/receptionist/register-patients/edit/:id" element={<ReceptionistEditPatient />} />
        <Route path="/receptionist/doctors" element={<ReceptionistDoctors />} />
        <Route path="/receptionist/appointments" element={<ReceptionistAppointments />} />
        <Route path="/receptionist/appointments/add" element={<ReceptionistAddAppointments />} />
        <Route path="/receptionist/appointments/edit/:id" element={<ReceptionistEditAppointments />} />
        <Route path="/receptionist/billing" element={<ReceptionistBilling />} />
        <Route path="/receptionist/billing/add" element={<ReceptionistAddBilling />} />
        <Route path="/receptionist/billing/edit/:id" element={<ReceptionistEditBilling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;