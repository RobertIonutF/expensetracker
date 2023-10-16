import React, { useContext } from 'react';
import { auth } from '../config/firebase';  // Adjust the import path accordingly
import { AuthContext } from '../context/AuthContext';  // Adjust the import path accordingly
import { Navigate } from 'react-router-dom';
import {doc, deleteDoc} from "firebase/firestore";
import {firestore} from "../config/firebase";
import Modal from '../components/Modal';
import {useNavigate} from "react-router-dom";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const deleteAccount = async () => {
    try {
      await deleteDoc(doc(firestore, 'Users', currentUser.uid));
      await currentUser.delete();
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error.message);
    }
  }


  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Profile</h2>
        </div>
        <div className="text-center mt-4 text-gray-900">
          <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-24 h-24 rounded-full mx-auto" />
          <p>Email: {currentUser.email}</p>
        </div>

        <div className="mt-4">
          <button 
            onClick={handleLogout}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log Out
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
             <p className='text-center text-2xl font-bold'>Are you sure you want to delete your account?</p>
            <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={deleteAccount}>Delete Account</button>
          </Modal>

          <button className='group relative w-full flex justify-center my-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setIsModalOpen(true)}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;