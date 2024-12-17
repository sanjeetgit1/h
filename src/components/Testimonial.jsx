import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const initialTestimonials = [
    {
      id: 1,
      name: "Ankit Jain",
      photoUrl: "https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
      experience: "Great platform for learning!",
      isFeedback: false,
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7Ra9PKRPdES6iLurZizB6j4I0-_QxtkhBw&s",
      experience: "Awesome courses and instructors.",
      isFeedback: false,
      rating: 4,
    },
    {
      id: 3,
      name: "Rahul kumar",
      photoUrl: "https://www.shutterstock.com/image-photo/portrait-young-boy-sitting-on-260nw-2027630132.jpg",
      experience: "Very informative and engaging content.",
      isFeedback: false,
      rating: 5,
    },
    {
      id: 4,
      name: "Nitin Bhaskar",
      photoUrl: "https://img.freepik.com/premium-photo/young-indian-man-showing-laptop-screen_96696-563.jpg",
      experience: "Helped me advance my career skills.",
      isFeedback: false,
      rating: 4,
    },
    {
      id: 5,
      name: "David jon",
      photoUrl: "https://img.freepik.com/free-photo/asianindian-business-man-handsome-man-using-smart-phone-yellow-wall_231208-2664.jpg",
      experience: "Highly recommend for anyone wanting to learn.",
      isFeedback: false,
      rating: 5,
    },
    {
      id: 6,
      name: "Shivam verma",
      photoUrl: "https://media.istockphoto.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30=",
      experience: "User-friendly platform with excellent support.",
      isFeedback: false,
      rating: 4,
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [name, setName] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [experience, setExperience] = useState('');
  const [rating, setRating] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials')) || initialTestimonials;
    setTestimonials(storedTestimonials);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const photoUrl = photoFile ? URL.createObjectURL(photoFile) : "https://via.placeholder.com/150";
    const newTestimonial = {
      id: testimonials.length + 1,
      name,
      photoUrl,
      experience,
      isFeedback: true, // Marking it as user feedback
      rating,
    };

    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));

    setName('');
    setPhotoFile(null);
    setExperience('');
    setRating(0);
    setShowForm(false); // Hide the form after submission
  };

  const handleFileChange = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
    <div className='absolute left-0 z-[-20]'>
      <div className="w-[100vw] h-[100vh] bg-[#003e33f1] font-sans overflow-hidden">
        <div className="firstpage w-full h-full flex">
          <img
            className="w-[20vw] absolute -inset-9 rotate-[-10deg] mt-[10vw]"
            src="https://craftohtml.themezaa.com/images/demo-elearning-01.png"
            alt=""
          />
          <div className="leftside w-[40vw] flex justify-center items-center">
            <div className="w-[100vw] h-[100vh] z-50 flex justify-center items-center text-white">
              <div>
                <h1 className="text-[5vw] ml-[10vw] text-yellow-500 font-bold">Best Feeback</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold leading-10">tit college</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold">education.</h1>
                <p className="w-[28vw] ml-[10vw] text-[1.4vw] opacity-50">
                  Online courses from the world's leading experts. Join 17
                  million learners today.
                </p>
          
              </div>
            </div>
          </div>
          <div className="rightside w-[60vw] flex justify-center relative ">
            <img
              className="w-[45vw] absolute mt-[5vw] mr-36"
              src="https://craftohtml.themezaa.com/images/demo-elearning-05.png"
              alt=""
            />
            <img
              className="w-[43vw] absolute ml-5"
              src="https://craftohtml.themezaa.com/images/demo-elearning-hero-banner-02.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[100vh] bg-[#F3F8F8]">
        <img
          className="absolute w-[50vw] mt-[40vh]"
          src="https://craftohtml.themezaa.com/images/demo-elearning-bg-04.png"
          alt=""
        />
        <div>
          <h1 className="text-[3vw] font-bold ml-[12vw] p-10">OUR FEEDBACK</h1>
        </div>
        <div className="card w-full h-full flex flex-wrap gap-10 items-center justify-center p-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-[20vw] h-[28vw]  bg-white overflow-hidden shadow-md rounded-lg">
              <img className="object-cover w-full h-[50%] " src={testimonial.photoUrl} />
              <div className="p-4">
                <h1 className="text-xl font-bold mb-2 ">{testimonial.name}</h1>
                <p className="text-sm mb-2">{testimonial.experience}</p>
                <p className="text-sm font-bold mb-2">Business accounting and taxation fundamentals</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 fill-current text-yellow-500">
                      <path
                        d="M12 1.55l2.48 5.75h6.37l-4.88 4.24 1.87 6.02-4.87-4.24-4.88 4.24 1.87-6.02-4.88-4.24h6.37L12 1.55z"
                      />
                    </svg>
                  ))}
                </div>
                <hr className="my-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-[100vw] h-[120vh] flex ">
        <div className="left w-[50vw] h-[50vh] mt-[80vh]">
          <img
            className="absolute ml-[-80px] mt-[2vw] hover:animate-pulse"
            src="https://craftohtml.themezaa.com/images/demo-elearning-05.png"
            alt=""
          />
          <img className="ml-[2vw] mt-[5vw]" src="https://craftohtml.themezaa.com/images/demo-elearning-06.png" alt="" />
        </div>
        <div className="right w-[50vw] h-[100vh] mt-[80vh]">
          <h2 className="ml-[13vw] text-[1.4vw] font-bold mt-[5vw]">Genius people to</h2>
          <h1 className="text-[3.5vw] ml-[13vw] font-bold text-[#313E3B]">say positive</h1>
          <h1 className="text-[3.5vw] ml-[13vw] font-bold text-[#313E3B] leading-10">words.</h1>
          <div className="w-[30vw] h-[10vw] bg-slate-100 ml-[13vw] mt-[2vw] p-5">
            <h3 className="text-[1.5vw] font-bold text-black mb-[1vw]">Master the skills that matter to you</h3>
            <h3 className="text-[1.2vw] text-black opacity-70 font-normal">Web-based training you can consume at</h3>
            <h3 className="text-[1.2vw] text-black opacity-70 font-normal">your own pace. Courses are interactive.</h3>
          </div>

          <div className="w-[30vw] h-[5vw] bg-slate-100 ml-[13vw] mt-[1vw] p-5">
            <h3 className="text-[1.5vw] font-bold text-black mb-[1vw]">Connect with effective methods</h3>
          </div>
          <div className="w-[30vw] h-[5vw] bg-slate-100 ml-[13vw] mt-[1vw] p-5">
            <h3 className="text-[1.5vw] font-bold text-black mb-[1vw]">Increase your learning skills</h3>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="p-3 duration-[2000ms] px-8 bg-[#000000] text-[1.6vw] rounded-2xl text-white font-bold ml-[13vw] mt-[3vw] flex"
          >
            Write your experience
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className="mt-4 ml-[13vw] flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Your Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                rows="3"
                className="p-2 border border-gray-300 rounded"
                required
              ></textarea>
              <div className="flex items-center gap-2">
                <label className="font-bold">Rating:</label>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${index < rating ? 'fill-current text-yellow-500' : 'fill-current text-gray-300'}`}
                    onClick={() => handleRatingChange(index + 1)}
                  >
                    <path
                      d="M12 1.55l2.48 5.75h6.37l-4.88 4.24 1.87 6.02-4.87-4.24-4.88 4.24 1.87-6.02-4.88-4.24h6.37L12 1.55z"
                    />
                  </svg>
                ))}
              </div>
              <button type="submit" className="p-3 bg-[#B1BD06] text-[1.6vw] rounded-2xl text-black font-bold">
                Submit
              </button>
            </form>
          )}
             <footer className="bg-gray-900 mt-20 text-gray-300 p-8 w-full absolute bottom-[-180vh] left-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                        <div>
                            <h3 className="text-xl font-bold mb-4">EduVentures</h3>
                            <p>We are providing high-quality courses for about ten years.</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-400">Fb.</a>
                                <a href="#" className="text-gray-400">Ig.</a>
                                <a href="#" className="text-gray-400">Tw.</a>
                                <a href="#" className="text-gray-400">Be.</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Popular Courses</h3>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">Business Finance</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Advanced Design</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Data Visualization</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p>Call us directly: <span className="text-yellow-400">+91 6263478403</span> (Free)</p>
                            <p>Email support: <a href="kuldeepdhakad153@.com" className="text-yellow-400">help@domain.com</a></p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                            <form className="flex flex-col">
                                <input type="email" placeholder="Enter your email" className="p-2 rounded-md mb-2" />
                                <button type="submit" className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-md">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
                    </div>
                </footer>
        </div>
        
      </div>
      
      </div>
   
    </div>
  );
};

export default Testimonial;
