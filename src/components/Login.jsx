import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side */}
        <div className="flex-1 flex justify-center items-center p-6">
          <img 
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" 
            alt="Login Illustration" 
            className="w-full max-w-sm rounded-lg" 
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>

          <form className="space-y-4">
            {/* Username/Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg p-3">
              <i className="fas fa-user text-gray-500 mr-3"></i>
              <input 
                type="text" 
                placeholder="Username or Email" 
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

            {/* Remember Me Checkbox */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
              Login
            </button>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-4 text-gray-600">
            <p>Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
            <p><a href="/signup" className="text-blue-500 hover:underline">Forgot password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
