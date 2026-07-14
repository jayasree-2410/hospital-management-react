import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function ReceptionistSidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        🏥 HMS
      </h2>

      <ul>

        <li>
          <Link to="/receptionist/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/receptionist/register-patients">
            <FaUserInjured /> Register Patients
          </Link>
        </li>

        <li>
          <Link to="/receptionist/doctors">
            <FaUserMd /> Doctors
          </Link>
        </li>

        <li>
          <Link to="/receptionist/appointments">
            <FaCalendarCheck /> Appointments
          </Link>
        </li>

        <li>
          <Link to="/receptionist/billing">
            <FaMoneyBillWave /> Billing
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt /> Logout
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default ReceptionistSidebar;