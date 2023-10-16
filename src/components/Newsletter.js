import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the email to your server
    console.log('Email submitted:', email);
  };

  return (
    <div className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-extrabold mb-4 text-center">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full max-w-lg px-4 py-2 mb-4 text-gray-900 placeholder-gray-600 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="px-8 py-3 text-lg font-semibold text-gray-900 bg-blue-500 rounded-lg hover:bg-blue-400 transition ease-in-out duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;