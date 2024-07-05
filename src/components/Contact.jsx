import React from 'react'

const Contact = () => {
	return (
		<div>
		<div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-10">
			  <div className="w-[100vw] h-[100vh]  bg-[#003e33f1] font-sans">
        <div className="firstpage w-full h-full flex ">
           <img className=" w-[20vw] absolute -inset-9 rotate-[-10deg] mt-[10vw]" src="https://craftohtml.themezaa.com/images/demo-elearning-01.png" alt="" />
          <div className="leftside  w-[40vw]  flex justify-center items-center">
           
            <div className=" w-[100vw] h-[100vh] z-50 flex justify-center items-center text-white  ">
              <div>
			  <h1 className="text-[3.4vw] ml-[10vw] font-bold text-yellow-500">Contact Us</h1>
              <h1 className="text-[3vw] ml-[10vw] font-bold  leading-10 ">We'd love to hear</h1>
              <h1 className="text-[3vw] ml-[10vw] font-bold ">from your side</h1>
              <p className="w-[28vw] ml-[10vw] text-[1.4vw] opacity-50 ">Online courses from the world's leading experts. Join 17 million learners today.</p>
        
              
              </div>
           

            </div>
           
          </div>
          <div className="rightside  w-[60vw]   flex justify-center relative overflow-hidden ">
            <img
              className="w-[45vw] absolute mt-[5vw]   "
              src="https://craftohtml.themezaa.com/images/demo-elearning-testimonials-01.png"
              alt=""
            />
            <img
              className="w-[43vw] absolute ml-5 "
              src="https://craftohtml.themezaa.com/images/demo-elearning-hero-banner-02.png"
              alt=""
            />
          </div>
        </div>
      </div>

		  <h1 className="text-4xl font-bold mb-10">How we can help you?</h1>
		  <form className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md space-y-6">
			<div className="grid grid-cols-2 gap-6">
			  <div className="col-span-2 sm:col-span-1">
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">
				  YOUR GOOD NAME*
				</label>
				<input
				  type="text"
				  id="name"
				  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
				  placeholder="What's your good name?"
				/>
			  </div>
			  <div className="col-span-2 sm:col-span-1">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
				  YOUR EMAIL ADDRESS*
				</label>
				<input
				  type="email"
				  id="email"
				  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
				  placeholder="Enter your email address"
				/>
			  </div>
			  <div className="col-span-2 sm:col-span-1">
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
				  YOUR PHONE NUMBER*
				</label>
				<input
				  type="tel"
				  id="phone"
				  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
				  placeholder="Enter your phone number"
				/>
			  </div>
			  <div className="col-span-2 sm:col-span-1">
				<label htmlFor="subject" className="block text-sm font-medium text-gray-700">
				  YOUR SUBJECT
				</label>
				<input
				  type="text"
				  id="subject"
				  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
				  placeholder="How can we help you?"
				/>
			  </div>
			</div>
			<div>
			  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
				YOUR MESSAGE
			  </label>
			  <textarea
				id="message"
				rows="4"
				className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
				placeholder="Describe your message"
			  ></textarea>
			</div>
			<div className="flex justify-end">
			  <button
				type="submit"
				className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			  >
				Send message
			  </button>
			</div>
		  </form>
		  <p className="text-sm text-gray-500 mt-8 text-center">
			We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
		  </p>
		  
		</div>
		<footer className="bg-gray-900 mt-20 text-gray-300 p-8 w-full absolute top-90 left-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                        <div>
                            <h3 className="text-xl font-bold mb-4">KASS</h3>
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

export default Contact