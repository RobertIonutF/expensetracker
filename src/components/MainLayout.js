import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TheNavbar from './TheNavbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

function MainLayout() {
  return (
    <>
      <TheNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;