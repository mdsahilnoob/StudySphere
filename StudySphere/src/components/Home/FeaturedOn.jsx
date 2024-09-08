import React from 'react';
import { Link } from 'react-router-dom'

const logos = [
  { name: 'Logo 1', src: '/api/placeholder/50/50' },
  { name: 'Logo 2', src: '/api/placeholder/50/50' },
  { name: 'Logo 3', src: '/api/placeholder/50/50' },
  { name: 'Logo 4', src: '/api/placeholder/50/50' },
  { name: 'Logo 5', src: '/api/placeholder/50/50' },
  { name: 'Logo 6', src: '/api/placeholder/50/50' },
  { name: 'Logo 7', src: '/api/placeholder/50/50' },
  { name: 'Logo 8', src: '/api/placeholder/50/50' },
  { name: 'Logo 9', src: '/api/placeholder/50/50' },
];

const FeaturedOn = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured On</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-16 h-16 flex items-center justify-center">
            <img 
              src={logo.src} 
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;