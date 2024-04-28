'use client'
import React, { useState } from 'react';

export default function Signup() {
  // State variables to store input values
  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
      const response = await fetch("http://localhost:3000/api/restorant", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Provide object with keys for name, email, and password
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      alert("Successfully created");
      setFullName('');
      setEmail('');
      setPassword('');
      setError('');
    } catch (e) {
      setError('Error: ' + e.message);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="dark:bg-gray-900 text-white p-6 mt-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up Here</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
              value={name} // Bind input value to state variable
              onChange={(e) => setFullName(e.target.value)} // Update fullName state on input change
              className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={email} // Bind input value to state variable
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={password} // Bind input value to state variable
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              className="px-3 py-2 rounded-md border placeholder:text-black text-black border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
