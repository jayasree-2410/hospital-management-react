import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaFlask,
  FaCapsules,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        🏥 HMS
      </h2>

      <ul>

        <li>
          <Link to="/admin/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/patients">
            <FaUserInjured /> Patients
          </Link>
        </li>

        <li>
          <Link to="/admin/doctors">
            <FaUserMd /> Doctors
          </Link>
        </li>

        <li>
          <Link to="/admin/appointments">
            <FaCalendarCheck /> Appointments
          </Link>
        </li>

        <li>
          <Link to="/admin/laboratory">
            <FaFlask /> Laboratory
          </Link>
        </li>

        <li>
          <Link to="/admin/pharmacy">
            <FaCapsules /> Pharmacy
          </Link>
        </li>

        <li>
          <Link to="/admin/billing">
            <FaMoneyBillWave /> Billing
          </Link>
        </li>

        <li>
          <Link to="/admin/reports">
            <FaChartBar /> Reports
          </Link>
        </li>

        <li>
          <Link to="/admin/settings">
            <FaCog /> Settings
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

export default Sidebar;