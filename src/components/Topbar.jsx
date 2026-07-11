import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/Topbar.css";

function Topbar() {
  return (
    <div className="topbar">

      <h3>Welcome Admin 👋</h3>

      <div className="topbar-right">

        <FaBell className="top-icon" />

        <FaUserCircle className="profile-icon" />

      </div>

    </div>
  );
}

export default Topbar;