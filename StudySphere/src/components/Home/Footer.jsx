import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Connected</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <img src="/api/placeholder/120/120" alt="Tree of Knowledge" className="w-30 h-30 rounded-full" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <SocialIcon Icon={Instagram} href="#" />
            <SocialIcon Icon={Facebook} href="#" />
            <SocialIcon Icon={Twitter} href="#" />
            <SocialIcon Icon={Github} href="#" />
            <SocialIcon Icon={Linkedin} href="#" />
          </div>
          
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Join our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full border-2 border-blue-500 focus:outline-none focus:border-blue-600"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Copyright 2024 Online Legal India | StudySphere | <a href="#" className="hover:underline">Terms and Conditions</a> | <a href="#" className="hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a href={href} className="text-gray-600 hover:text-blue-500 transition duration-300">
    <Icon size={24} />
  </a>
);

export default Footer;