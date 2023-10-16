import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard';

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={
            <div className='flex items-center justify-center h-full'>
                <h1 className='text-2xl font-bold'>404 | Not Found</h1> <br></br>
            </div>
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default DashboardLayout;