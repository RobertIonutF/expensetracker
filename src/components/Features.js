import React from 'react';

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  const featuresList = [
    {
      icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>,
      title: 'Easy to Use',
      description: 'Our app is easy to use with a modern and intuitive design.',
    },
    {
      icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a9 9 0 1018 0v-7a9 9 0 00-18 0v7z"></path></svg>,
      title: 'Secure',
      description: 'Your data is kept safe and secure at all times.',
    },
    {
      icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
      title: 'Fast',
      description: 'Get your work done fast with our high-performance platform.',
    }
  ];

  return (
    <div className="p-10 bg-white-900 text-dark">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresList.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;