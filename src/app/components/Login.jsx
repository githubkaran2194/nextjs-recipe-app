"use client";
import React, { useState } from "react";

export default function Login() {
  // State variables to store email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="dark:bg-gray-900 text-white p-6 mt-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login Here</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
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
            <label htmlFor="password" className="mb-1">
              Password:
            </label>
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
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
