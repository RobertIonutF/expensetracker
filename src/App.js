import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Context
import { AuthProvider } from './context/AuthContext';

import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';  // Import DashboardLayout

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
