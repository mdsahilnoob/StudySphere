import React from 'react';

const OurLearningApp = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Our Learning App</h1>
        <p className="text-xl mb-8">Visit our App for more perks</p>
        
        <div className="flex justify-center space-x-8">
          <img src="/api/placeholder/60/60" alt="Google Play Store" className="h-16 w-auto" />
          <img src="/api/placeholder/60/60" alt="Apple App Store" className="h-16 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default OurLearningApp;