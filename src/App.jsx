import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Users from './components/Users';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Home from './components/Home';
import Exam from './components/Exam';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Register from './components/Register';
import AiPage from './components/AiPage'; // Make sure the file name matches
const App = () => {
  return (
    <div className="w-[80%] p-10 m-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/exam/:courseId" element={<Exam />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/About" element={<About />} />
        <Route path="/AiPage" element={<AiPage />} /> {/* New route for AI page */}
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
