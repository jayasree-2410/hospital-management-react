import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StatCard from "../../components/StatCard";

import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaFlask,
  FaCapsules,
} from "react-icons/fa";

import "../../styles/Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="cards">

          <StatCard
            title="Patients"
            value="120"
            icon={<FaUserInjured />}
            color="#0d6efd"
          />

          <StatCard
            title="Doctors"
            value="18"
            icon={<FaUserMd />}
            color="#198754"
          />

          <StatCard
            title="Appointments"
            value="65"
            icon={<FaCalendarCheck />}
            color="#ffc107"
          />

          <StatCard
            title="Revenue"
            value="₹2,50,000"
            icon={<FaMoneyBillWave />}
            color="#dc3545"
          />

          <StatCard
            title="Laboratory"
            value="45"
            icon={<FaFlask />}
            color="#20c997"
          />

          <StatCard
            title="Pharmacy"
            value="350"
            icon={<FaCapsules />}
            color="#6f42c1"
          />

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;