import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../config/firebase";

function TheNavbar() {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center text-white">
        <div className="text-2xl font-bold mr-6">
          ExpenseTracker
        </div>
        <ul className="flex">
          <li className="mr-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Home</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>About</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <ul className="flex items-center text-white">
        {currentUser ? (
          <>
            <li className="mr-6">
              <NavLink to="/profile" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Profile</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Dashboard</NavLink>
            </li>
            <li>
              <button onClick={handleLogout} className="text-white">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="mr-6">
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Log in</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? 'text-blue-300' : '')}>Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default TheNavbar;