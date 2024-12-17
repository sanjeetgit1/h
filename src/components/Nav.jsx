import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-black text-white w-[100vw] h-20 absolute left-0 top-0 right-0 flex justify-between items-start p-4">
      <div className="flex items-start space-x-4">
        <img src="https://dynamic.brandcrowd.com/asset/logo/74e1a370-c7b8-42fb-b427-cc61ff946bc6/logo-search-grid-2x?logoTemplateVersion=1&v=638179880049600000&text=Education" alt="Logo" className="h-8 w-8"/>
        <span className="font-bold text-lg">EduVentures</span>
      </div>
      <div className="flex space-x-8 items-start">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/AiPage"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          AI-Instructor
        </NavLink>
        <NavLink
          to="/quiz"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Quiz
        </NavLink>
        <NavLink
          to="/car"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          ChatUs
        </NavLink>
        <NavLink
          to="/testimonial"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Testimonial
        </NavLink>
    
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Users
        </NavLink>
      </div>
      <div className="flex space-x-4 items-start">
        
        <NavLink
          to="/signup"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Signup
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            fontWeight: isActive ? '900' : '400',
            color: isActive ? 'yellow' : 'white',
          })}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
