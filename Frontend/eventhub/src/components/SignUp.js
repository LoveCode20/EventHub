import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Email
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full mt-1 p-2 border border-gray-300 rounded" 
            required
          />
        </label>
        <label className="block mb-2">
          Password
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full mt-1 p-2 border border-gray-300 rounded" 
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
