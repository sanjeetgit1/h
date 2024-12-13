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
        'Full stack JavaDeveloper',
      linkedin: 'https://www.linkedin.com/in/kuldeep-dhakad-672920286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Vicky Dhote',
      imgSrc: 'https://res-console.cloudinary.com/dxhi4nwws/thumbnails/v1/image/upload/v1734060966/eWJwc3JvODlxYzRpb2RqNnNmbHU=/drilldown',
      quote:
        'Frontend Developer',
      linkedin: 'https://www.linkedin.com/in/vicky-dhote-33b344250/',
    },
	{
		name: 'SANJEET KUMAR',
		imgSrc: 'https://res.cloudinary.com/dxhi4nwws/image/upload/v1734060668/u1cgblaccenitp8rzoso.png',
		quote:
		  ' Full MERN stack Developer',
		linkedin: 'https://www.linkedin.com/in/sanjeet-kushwaha-54905b228/',
	  },
	  {
		name: 'ABHISHEK KUMAR',
		imgSrc: 'https://res.cloudinary.com/dxhi4nwws/image/upload/v1734061109/v4iiwqlsp3fg5fq7szju.png',
		quote:
		  'Frontend Developer ',
		linkedin: 'https://www.linkedin.com/in/abhishek-kumar-b06416233',
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
        <section className="mb-16 w-[95vw] height-[40vh]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
          <div className="flex  justify-center flex-wrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" md:w-1/2 lg:w-1/4 p-4 relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-yellow-100 hover:bg-opacity-25 hover:ring-2 hover:ring-yellow-900"
                onClick={() => handleCardClick(index)}
              >
                <div className="bg-white rounded-lg shadow-lg text-center">
                  <div className="relative overflow-hidden rounded-full mb-4">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-28 h-28 rounded-full mx-auto mt-10"
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
                      className="inline-block px-6 py-2 mt-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300 mb-10"
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
};

export default About;
