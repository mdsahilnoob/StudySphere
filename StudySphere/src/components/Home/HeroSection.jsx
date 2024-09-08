import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      {/* Left side content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">StudySphere</h1>
        <p className="text-blue-600 text-lg md:text-xl mb-6">
          StudySphere: Your personalized learning companion, empowering you to reach new heights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            SignUp
          </button>
          <button className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition duration-300">
            SignIn
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-900 rounded-lg transform rotate-3"></div>
          <img 
            src="/api/placeholder/600/400" 
            alt="StudySphere Dashboard" 
            className="relative z-10 rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;