import React from 'react';

const Home = () => {
  return (
    <div>
    <div className='absolute left-0 z-[-20] overflow-y-scroll no-scrollbar' style={{ overflow: 'hidden' }}>
      <div className="w-[100vw] h-[100vh] bg-[#003e33f1] font-sans overflow-hidden">
        <div className="firstpage w-full h-full flex">
          <img className="w-[20vw] absolute -inset-9 rotate-[-10deg] mt-[10vw]" src="https://craftohtml.themezaa.com/images/demo-elearning-01.png" alt="" />
          <div className="leftside w-[40vw] flex justify-center items-center">
            <div className="w-[100vw] h-[100vh] z-50 flex justify-center items-center text-white">
              <div>
                <h1 className="text-[5vw] ml-[10vw] font-bold">Best online</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold leading-10">platform for</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold">education.</h1>
                <p className="w-[28vw] ml-[10vw] text-[1.4vw] opacity-50">Online courses from the world's leading experts. Join 17 million learners today.</p>
                <div className="flex">
                  <button className="p-3 bg-[#B1BD06] text-[1.6vw] rounded-2xl text-black font-bold ml-[10vw] mt-[3vw] flex">Get Started</button>
                  <h3 className="text-[1.4vw] text-white items-center font-bold ml-[3vw] mt-[3vw] flex">How it Works</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="rightside w-[60vw] flex justify-center relative">
            <img className="w-[45vw] absolute mt-[5vw]" src="https://higherhorizons.co.uk/wp-content/uploads/2022/08/activity-tasks-image.png" alt="" />
            <img className="w-[43vw] absolute ml-5" src="https://craftohtml.themezaa.com/images/demo-elearning-hero-banner-02.png" alt="" />
          </div>
        </div>
      </div>

      <div className="secondpage w-[100vw] bg-white h-[110vh] flex">
        <div className="left w-[45vw] h-full">
          <img className="absolute mt-[-20]" src="https://craftohtml.themezaa.com/images/demo-elearning-02.png" alt="" />
          <h3 className="text-center justify-center mt-[8vw] mb-10 font-semibold text-[1.4vw]">Guaranteed and certified</h3>
          <h1 className="text-center justify-center font-extrabold text-[3.9vw]">Online learning</h1>
          <h1 className="text-center justify-center font-extrabold text-[3.9vw] leading-10 mr-10">wherever and</h1>
          <h1 className="text-center justify-center font-extrabold text-[3.9vw] mr-32">whenever.</h1>
          <button className="p-3 px-8 bg-[#000000] text-[1.6vw] rounded-2xl text-white font-bold ml-[10vw] mt-[3vw] flex">Learn More</button>
        </div>
        <div className="right w-[55vw] h-full">
          <img className="absolute right-0 mt-20" src="https://craftohtml.themezaa.com/images/demo-elearning-04.png" alt="" />
          <div className="01">
            <h1 className="font-extrabold text-[6vw] opacity-10">01</h1>
            <h2 className="text-[1.7vw] font-bold mt-[-3.5vw] ml-3 mb-2">Flexible schedule</h2>
            <h2 className="text-[1.4vw] font-semibold ml-3 opacity-35">eLearning allows learners</h2>
            <h2 className="text-[1.4vw] font-semibold ml-3 opacity-35 leading-1">to quickly and more easily</h2>
            <h2 className="text-[1.4vw] font-semibold ml-3 opacity-35">complete their training.</h2>
            <div className="w-20 h-1 ml-5 mt-2 bg-black"></div>
          </div>
          <div className="02 ml-[20vw]">
            <h1 className="font-extrabold text-[6vw] opacity-10">02</h1>
            <h2 className="text-[1.7vw] font-bold mt-[-3.5vw] ml-5 mb-2">Pocket friendly</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35">eLearning allows learners</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35 leading-1">to quickly and more easily</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35">complete their training.</h2>
            <div className="w-20 h-1 ml-5 mt-2 bg-black"></div>
          </div>
          <div className="02">
            <h1 className="font-extrabold text-[6vw] opacity-10">03</h1>
            <h2 className="text-[1.7vw] font-bold mt-[-3.5vw] ml-5 mb-2">Expert Instructor</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35">eLearning allows learners</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35 leading-1">to quickly and more easily</h2>
            <h2 className="text-[1.4vw] font-semibold ml-5 opacity-35">complete their training.</h2>
            <div className="w-20 h-1 ml-5 mt-2 bg-black"></div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[200vh] bg-[#F3F8F8] relative">
        <img className="absolute w-[50vw] mt-[40vh]" src="https://craftohtml.themezaa.com/images/demo-elearning-bg-04.png" alt="" />
        <div>
          <h1 className="text-[3vw] font-bold ml-[12vw] p-10">Popular courses</h1>
        </div>
        <div className="card flex gap-10 items-center justify-center p-20">
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://img.freepik.com/premium-photo/yellow-snake-with-blue-eyes-peeking-out-laptop-screen-with-code_885831-168257.jpg?w=740" alt="Course 1" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">The Complete Python Bootcamp
              From Zero to Hero in Python</h2>
              <p className="text-gray-600">A brief description of the course content and what learners can expect.</p>
               
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹599</span>
        <button  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    

            </div>
            
          </div>
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://imarticus.org/blog/wp-content/uploads/2021/12/learn-Python-for-data-science.jpg" alt="Course 2" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Python for Data Science and
              Machine Learning Bootcamp</h2>
              <p className="text-gray-600">Affordable course providing valuable skills with lifetime benefits.</p>
              <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹599</span>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
            </div>
          </div>
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://treinetic.com/wp-content/uploads/2023/09/Generative-AI-and-Deep-Learning.png" alt="Course 3" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Generative Al and Machine Learning with Python</h2>
              <p className="text-gray-600">Buy this course to gain skills and secure a brighter future.</p>

              <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹599</span>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>

            </div>
          </div>
        </div>
        <div className="card flex gap-10 items-center justify-center p-20">
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://www.finoit.com/wp-content/uploads/2022/09/clean-code-java-principles.jpg" alt="Course 4" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">JAVA</h2>
              <p className="text-gray-600">Learn Java, enhances programming skills, enabling development of powerful applications.</p>
              <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹599</span>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
            </div>
          </div>
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://img-c.udemycdn.com/course/750x422/4490482_f3e4_2.jpg" alt="Course 5" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">C++</h2>
              <p className="text-gray-600">C++ course builds programming skills for high-performance, efficient software development.</p>
              <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹599</span>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
            </div>
          </div>
          <div className="w-[22vw] h-[28vw] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src="https://wpdean.com/wp-content/uploads/2024/05/tailwind-css.jpg" alt="Course 6" className="w-full h-[60%] object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Tailwind CSS</h2>
              <p className="text-gray-600">Learn utility-first design to create responsive, customizable, and efficient websites.</p>
              <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800">₹799</span>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[120vh] flex">
        <div className="ml-[-10vw] w-[50vw] h-[100vh] mt-[-9vw]  ">
          <img
            className=" absolute  mt-[5vw] hover:animate-pulse "
            src="https://craftohtml.themezaa.com/images/demo-elearning-05.png"
            alt=""
          />
          <img
            className=" ml-[2vw] mt-[5vw]"
            src="https://craftohtml.themezaa.com/images/demo-elearning-06.png"
            alt=""
          />
        </div>
        <div className="right w-[50vw] h-[100vh] ml-[10vw]">
    <h2 className=" ml-[13vw] text-[1.4vw] font-bold mt-[5vw]"> Premium learning experience</h2>
    <h1 className="text-[3.5vw] ml-[13vw] font-bold text-[#313E3B]">Providing amazing</h1>
    <h1 className="text-[3.5vw] ml-[13vw] font-bold text-[#313E3B] leading-10 "  >online courses.</h1>
    <div className="w-[30vw] h-[10vw] bg-slate-100 ml-[13vw] mt-[2vw] p-5 " >
      <h3 className="text-[1.5vw]  font-bold text-black mb-[1vw]" >Master the skills that matter to you</h3>
      <h3 className="text-[1.2vw]   text-black opacity-70 font-normal" >Web-based training you can consume at</h3>
      <h3 className="text-[1.2vw]  text-black opacity-70 font-normal" >your own pace. Courses are interactive.</h3>
    </div>
  
    <div className="w-[30vw] h-[5vw] bg-slate-100 ml-[13vw] mt-[1vw] p-5 " >
      <h3 className="text-[1.5vw]  font-bold text-black mb-[1vw]" >Connect with effective methods</h3>
    
    </div>
    <div className="w-[30vw] h-[5vw] bg-slate-100 ml-[13vw] mt-[1vw] p-5 " >
      <h3 className="text-[1.5vw]  font-bold text-black mb-[1vw]" >Increase your learning skills</h3>
    
    </div>
    <button className="p-3 duration-[2000ms]   px-8 bg-[#000000] text-[1.6vw] rounded-2xl  text-white font-bold ml-[13vw] mt-[3vw] flex">
            
            Explore courses </button>
   </div>
  
    
        </div>
        
        </div>
        <footer className="bg-gray-900 mt-20 text-gray-300 p-8 w-full absolute bottom-[-230vw] left-0">
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
  );
}

export default Home;
