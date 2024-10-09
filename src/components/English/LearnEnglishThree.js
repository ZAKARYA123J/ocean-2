import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'; // Import the icon

const CoursesSection = () => {
  const [loaded, setLoaded] = useState(false);

  // Simulate fetching data and trigger the animation after a short delay
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // Slight delay for visual effect
  }, []);

  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        {/* Heading with FaAngleDoubleRight icon */}
        <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center">
        <FaAngleDoubleRight className="ml-2" />
        COURSES
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in English.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Course 1 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.1s' }}  // Staggered delay for this card
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">General English</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="General English"
          />
        </div>

        {/* Course 2 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}  // Delay for staggered appearance
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">Business English</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Business English"
          />
        </div>

        {/* Course 3 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}  // Delay for staggered appearance
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">Exam Preparation</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Exam Preparation"
          />
        </div>

        {/* Course 4 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.7s' }}  // Delay for staggered appearance
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">English for Kids</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white  px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="English for Kids"
          />
        </div>

        {/* Course 5 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '0.9s' }}  // Delay for staggered appearance
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">Private Lessons</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Private Lessons"
          />
        </div>

        {/* Course 6 */}
        <div
          className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '1.1s' }}  // Delay for staggered appearance
        >
          <div className="pb-12 w-full">
            <h3 className="text-xl font-semibold text-gray-800">Self-study Courses</h3>
            <p className="text-gray-600 mt-2">
              Build a strong foundation in reading, writing, listening, and speaking skills.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <a href="#" className="bg-[#65A662] text-white px-6 py-2 rounded-[1.5rem] inline-block text-center absolute -translate-y-1/2 z-10">
              ➤ LEARN MORE
            </a>
          </div>
          <img
            className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Self-study Courses"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
