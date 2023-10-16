import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the form data to your server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-100 p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="message">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4 text-gray-800"><strong>Address:</strong> 123 Main St, Anytown, USA</p>
            <p className="mb-4 text-gray-800"><strong>Email:</strong> info@example.com</p>
            <p className="mb-4 text-gray-800"><strong>Phone:</strong> (555) 555-5555</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;