import React, { useState } from 'react';
import png from '../components/kuldeep.png'

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const teamMembers = [
    {
      name: 'KULDEEP DHAKAD',
      imgSrc: png,
      quote:
        '“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.”',
      linkedin: 'https://www.linkedin.com/in/kuldeep-dhakad-672920286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'SHANE RAZA',
      imgSrc: 'data:image/jpeg;base64,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',
      quote:
        '“Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity.”',
      linkedin: 'https://www.linkedin.com/in/vicky-dhote-33b344250/',
    },
	{
		name: 'SANJEET KUMAR',
		imgSrc: 'https://media.licdn.com/dms/image/D4D03AQG8-VuE7fZayQ/profile-displayphoto-shrink_800_800/0/1718219409380?e=1725494400&v=beta&t=6M__Focx283IAxEFolh4BiAP1GTL2rlDpVOW_0IJ00Y',
		quote:
		  '“Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity.”',
		linkedin: 'https://www.linkedin.com/in/sanjeet-kushwaha-54905b228/',
	  },
	  {
		name: 'SANJEET KUMAR',
		imgSrc: 'https://craftohtml.themezaa.com/images/demo-elearning-05.png',
		quote:
		  '“Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity.”',
		linkedin: 'https://www.linkedin.com/in/vicky-dhote-33b344250/',
	  },
    // Add more team members as needed
  ];

  return (
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
                <h1 className="text-[5vw] ml-[10vw] text-yellow-500 font-bold">About us</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold leading-10">tit college</h1>
                <h1 className="text-[5vw] ml-[10vw] font-bold">education.</h1>
                <p className="w-[28vw] ml-[10vw] text-[1.4vw] opacity-50">
                  Online courses from the world's leading experts. Join 17
                  million learners today.
                </p>
          
              </div>
            </div>
          </div>
          <div className="rightside w-[60vw] flex justify-center relative">
            <img
              className="w-[45vw] absolute mt-[5vw]"
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
    <div className="py-24 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Company</h2>
          <p className="text-lg text-gray-600">We innovate, educate, and inspire.</p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600">
            Our mission is to empower learners of all ages by providing accessible, high-quality educational resources and fostering a community of lifelong learning. We strive to bridge gaps in education through innovative technology, personalized learning experiences, and a commitment to inclusivity and excellence.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Courses and Lessons</h4>
              <p className="text-gray-600">
                Comprehensive curriculum, interactive lessons, self-paced learning.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Personalized Learning</h4>
              <p className="text-gray-600">
                Adaptive learning paths, progress tracking, feedback and recommendations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Community Engagement</h4>
              <p className="text-gray-600">
                Forums, live sessions, mentorship programs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Assessment and Certification</h4>
              <p className="text-gray-600">
                Regular assessments, certifications.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Accessibility and Inclusivity</h4>
              <p className="text-gray-600">
                Multilingual support, accessibility features, diverse content.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Resource Library</h4>
              <p className="text-gray-600">
                E-books, articles, downloadable resources, external links.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Parental and Educator Support</h4>
              <p className="text-gray-600">
                Guides and tips, progress reports, community for educators.
				Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.

              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Technology Integration</h4>
              <p className="text-gray-600">
                Mobile app, gamification, data security.
              </p>
            </div>
			<div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Parental and Educator Support</h4>
              <p className="text-gray-600">
                Guides and tips, progress reports, community for educators.
				Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.

              </p>
            </div>  <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Parental and Educator Support</h4>
              <p className="text-gray-600">
                Guides and tips, progress reports, community for educators.
				Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.

              </p>
            </div>  <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Parental and Educator Support</h4>
              <p className="text-gray-600">
                Guides and tips, progress reports, community for educators.
				Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.

              </p>
            </div>  <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2 text-gray-800">Parental and Educator Support</h4>
              <p className="text-gray-600">
                Guides and tips, progress reports, community for educators.
				Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.
                Guides and tips, progress reports, community for educators.

              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-16 w-[100vw]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
          <div className="flex justify-center flex-wrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 p-4 relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-100 hover:bg-opacity-25 hover:ring-2 hover:ring-yellow-900"
                onClick={() => handleCardClick(index)}
              >
                <div className="bg-white rounded-lg shadow-lg text-center">
                  <div className="relative overflow-hidden rounded-full mb-4">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    {activeIndex === index && (
                      <div className="absolute inset-0 bg-blue-500 opacity-75"></div>
                    )}
                  </div>
                  <div className="text-xl font-bold mb-2">{member.name}</div>
                  <div>
                    <p className="mb-4 text-gray-700">{member.quote}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 mt-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300"
                    >
                      Follow +
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-600">
            Have questions? Reach out to us at{' '}
            <a href="mailto:contact@yourcompany.com" className="text-blue-500 hover:underline">
kuldeepdhakad153@gamil.com            </a>
            .
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 mt-[10vw] text-white text-center py-4">
        <p className="text-lg">
          <span className="text-orange-500">I</span> <span className="text-white">Love</span>{' '}
          <span className="text-green-500">India</span>
        </p>
      </footer>
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
};

export default About;
