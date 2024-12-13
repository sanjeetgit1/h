import React from 'react';

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side */}
        <div className="flex-1 flex justify-center items-center p-6">
          <img 
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" 
            alt="Registration Illustration" 
            className="w-full max-w-sm rounded-lg" 
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>

          <form className="space-y-4">
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <i className="fas fa-user text-gray-500 mr-3"></i>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-transparent focus:outline-none" 
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <i className="fas fa-envelope text-gray-500 mr-3"></i>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent focus:outline-none" 
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <i className="fas fa-lock text-gray-500 mr-3"></i>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-transparent focus:outline-none" 
              />
            </div>

            {/* Confirm Password Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <i className="fas fa-key text-gray-500 mr-3"></i>
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full bg-transparent focus:outline-none" 
              />
            </div>

            {/* Subscribe Checkbox */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="subscribe" 
                className="rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="subscribe" className="text-gray-600">Subscribe to our newsletter</label>
            </div>

            {/* Register Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
              Register
            </button>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-4 text-gray-600">
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
