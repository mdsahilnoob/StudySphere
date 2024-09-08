import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative">
            <div className="w-full h-0 pb-[100%] rounded-full overflow-hidden">
              <img 
                src="/api/placeholder/600/600" 
                alt="GitHub globe" 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-50 rounded-full"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg lg:text-xl text-blue-600 mb-6">
            Studysphere is more than just a platform to connect students with teachers. It's a comprehensive online learning environment designed to facilitate effective and personalized education.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;