import React from 'react';

function PricingCard({ title, price, features }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-xl font-semibold mb-6">${price}/month</p>
      <ul className="flex-1 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition ease-in-out duration-300">
        Get Started
      </button>
    </div>
  );
}

function Pricing() {
  const pricingTiers = [
    {
      title: 'Basic',
      price: '0',
      features: ['10 Budget Categories', '1 Financial Account', 'Community Support'],
    },
    {
      title: 'Pro',
      price: '10',
      features: ['Unlimited Budget Categories', '5 Financial Accounts', 'Priority Support'],
    },
    {
      title: 'Enterprise',
      price: '30',
      features: ['Unlimited Budget Categories', 'Unlimited Financial Accounts', 'Premium Support'],
    },
  ];

  return (
    <div className="p-10 bg-gray-900 text-dark">
      <h2 className="text-3xl font-extrabold mb-10 text-white text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;