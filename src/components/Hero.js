import React from 'react';

function Hero({
  title,
  description,
  image,
  buttonLabel,
  onButtonClick,
}) {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-800 bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-300 mb-6 text-center">{description}</p>
        {buttonLabel && (
          <button 
            onClick={onButtonClick}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition ease-in-out duration-300"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;