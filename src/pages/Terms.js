import React from 'react';

function Terms() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <div className="bg-white p-10 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
          
          <h3 className="text-xl font-bold mt-6 mb-4">1. Acceptance of Terms</h3>
          <p className="mb-4">
            Explain the acceptance of terms and conditions for using your application.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">2. Usage Policies</h3>
          <p className="mb-4">
            Detail the rules and guidelines for using your application.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">3. Account Responsibilities</h3>
          <p className="mb-4">
            Describe the responsibilities of account holders.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">4. Intellectual Property</h3>
          <p className="mb-4">
            Explain the intellectual property rights concerning your application.
          </p>

          {/* ... More sections as needed ... */}

          <h3 className="text-xl font-bold mt-6 mb-4">Contact Us</h3>
          <p>
            Provide contact information for users who have questions about the terms of service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;