// src/components/SubmitExperience.js
import React, { useState } from 'react';

const SubmitExperience = ({ addTestimonial }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [experience, setExperience] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && photo && experience) {
      addTestimonial({ name, photo, experience });
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      <form className="bg-white p-10 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Write Your Experience</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Photo
          </label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience
          </label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitExperience;
