import React, { useState } from 'react';
import SignUpPage2 from './SignUpPage2';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.twinkl.de%2Fteaching-wiki%2Fearth&psig=AOvVaw3IeylP0jZDyIdzJEfTSxop&ust=1725384230379000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC2kaPjpIgDFQAAAAAdAAAAABAJ)' }}>
      <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md opacity-90">
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-500">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Login
          </button>
        </form>
        <div className='text-center mt-4'>
          New user?
          <Link to='/signup' className='text-blue-500 hover:underline'> SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;