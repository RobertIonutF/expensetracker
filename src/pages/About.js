import React from 'react';
import Hero from '../components/Hero';

function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <Hero 
        title="About Us" 
        description="Learn more about our application and the team behind it." 
        image="/images/about-bg.jpg"
      >
        Our Story
      </Hero>

      {/* Content Section */}
      <div className="container mx-auto p-10">
        <div className="bg-white p-10 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="mb-4">
            Our mission is to provide a user-friendly platform to help individuals and businesses manage their expenses effectively.
          </p>

          <h2 className="text-2xl font-bold mb-6">The Team</h2>
          <p className="mb-4">
            We are a group of dedicated individuals with a passion for financial management and technology.
          </p>

          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p>
            Have questions? Reach out to us at <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;