// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../schema/loginSchema';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
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
      await registerSchema.validate(formData, { abortEarly: false });
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    } catch (err) {
      setError(err.errors[0]);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-[10vw] p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
