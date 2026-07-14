import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/Topbar.css";

function Topbar({role}) {
  return (
    <div className="topbar">

      <h4>Welcome {role} 👋</h4>

      <div className="topbar-right">

        <FaBell className="top-icon" />

        <FaUserCircle className="profile-icon" />

      </div>

    </div>
  );
}

export default Topbar;