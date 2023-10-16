import React, { useState, useContext } from 'react';
import { auth, firestore } from '../config/firebase';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {doc, setDoc} from "firebase/firestore";
import Modal from '../components/Modal';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState('');
  const [preferredCurrency, setPreferredCurrency] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createUserDocument = async (user) => {
    try {
      await setDoc(doc(firestore, 'Users', user.uid), {
        email: user.email,
        imageUrl: user.photoURL || '',
        preferredCurrency: 'USD',  
        tokens: 0,
      });
    } catch (error) {
      console.error('Error creating user document:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            createUserDocument(user);
            navigate("/");
        }
        ).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then((result) => {
        // The signed-in user info.
        const user = result.user;
        createUserDocument(user);
        navigate("/");
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    required 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div>
                    <label htmlFor="imageUrl" className="sr-only">Image URL</label>
                    <input 
                        id="imageUrl" 
                        name="imageUrl" 
                        type="imageUrl" 
                        required 
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="preferredCurrency" className="sr-only mb-2">Preferred Currency</label>
                    <select id='preferredCurrency' className='w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' value={preferredCurrency} onChange={(e) => setPreferredCurrency(e.target.value)}>
                        <option className='py-1' value='USD'>USD</option>
                        <option className='py-1' value='EUR'>EUR</option>
                        <option className='py-1' value='GBP'>GBP</option>
                        <option className='py-1' value='JPY'>JPY</option>
                    </select>
                </div>
          </div>

          <button className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4' 
          type='submit'
          onClick={handleSubmit}>Sign Up</button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        </Modal>
        <button
            onClick={openModal}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
            Sign Up with Email
        </button>
        <button
            onClick={handleGoogleSignup}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
            Sign Up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp