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
import AiPage from './components/AiPage'; 
import TalkUs from './components/TalkUs'; // Import TalkUs component


const App = () => {
  return (
    <div className="w-full p-10 m-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/exam/:courseId" element={<Exam />} />
        <Route path="/quiz" element={<Quiz />} />
     <Route path="/signup" element={<Register />} />  
      <Route path="/login" element={<Login />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<About />} />
        <Route path="/aiPage" element={<AiPage />} />
        <Route path="/car" element={<TalkUs />} /> {/* New route for TalkUs */}

      </Routes>
     
    </div>
  );
};

export default App;
