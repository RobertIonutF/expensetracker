import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';  
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  
  const goHome = () => {
    navigate("/");
  }

  if (!currentUser) {
     return <Navigate to="/" />;
  }

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/dashboard" className="text-white block text-2xl font-semibold mb-2">Expense Tracker</Link>
      <nav>
        <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard Home</Link>
      </nav>
      <button onClick={handleLogout} className="text-left w-full block py-2.5 px-4 rounded transition duration-200 hover:bg-red-600">Log Out</button>
      <button onClick={goHome} className="text-left w-full block py-2.5 px-4 rounded transition duration-200 hover:bg-red-600">Go home</button>
    </div>
  );
}

export default Sidebar;