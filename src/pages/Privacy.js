import React from 'react';

function Privacy() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <div className="bg-white p-10 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          
          <h3 className="text-xl font-bold mt-6 mb-4">1. Introduction</h3>
          <p className="mb-4">
            Describe the purpose of your privacy policy, and introduce your application.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">2. Data Collection</h3>
          <p className="mb-4">
            Explain what data you collect from users and for what purposes.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">3. Data Sharing and Disclosure</h3>
          <p className="mb-4">
            Detail if and how you share user data with third parties.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-4">4. Data Security</h3>
          <p className="mb-4">
            Describe the measures you take to ensure the security of user data.
          </p>

          {/* ... More sections as needed ... */}

          <h3 className="text-xl font-bold mt-6 mb-4">Contact Us</h3>
          <p>
            Provide contact information for users who have questions about the privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;