import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-100">
      <div className="flex items-center">
        <img src="/api/placeholder/48/48" alt="Logo" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-black bg-white rounded-md hover:bg-gray-100">Home</button>
        <button className="px-4 py-2 text-black bg-white rounded-md hover:bg-gray-100">About Us</button>
        <button className="px-4 py-2 text-black bg-white rounded-md hover:bg-gray-100">Features</button>
      </div>
      <div className="flex items-center">
        <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full mr-2" />
        <div className="text-right">
          <p className="font-bold">Mohammad Sahil</p>
          <p className="text-sm">2nd Year</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;