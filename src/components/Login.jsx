// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../schema/loginSchema'; // Corrected import path

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.email === formData.email && u.password === formData.password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError(err.errors[0]);
    }
  };

  const handleRegisterClick = () => {
    navigate('/Signup'); // Navigate to the registration page
  };

  return (
    <div className="max-w-md mt-[10vw] mx-auto p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <a onClick={handleRegisterClick} className="text-blue-500 hover:text-blue-700 cursor-pointer">
          Register here
        </a>
      </div>
    </div>
  );
};

export default Login;
