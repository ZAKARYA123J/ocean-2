import React from 'react';
import { FaChalkboardTeacher, FaAngleDoubleRight } from 'react-icons/fa'; // Import the required icons

const LearningOptions = () => {
  return (
    <section className="py-16 bg-white">
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center animate-fadeInUp">
          <FaAngleDoubleRight className="mr-2" /> {/* Add the icon here */}
          OFFERS
        </h3>
        <p className="text-gray-500 mt-4 animate-fadeInUp">
          Discover our exclusive learning options to help you achieve fluency in English.
        </p>
      </div>

      {/* Cards with hover animation */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="1-on-1 lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">1-on-1 Lessons</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
            <a href="#" className="text-[#65A662] font-semibold mt-4 inline-block hover:text-[#4A944E] transition-colors flex items-center">
              <FaChalkboardTeacher className="mr-2" /> {/* Add teacher icon */}
              ➤ FIND MY TEACHER
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Group Class"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Group Class</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
            <a href="#" className="text-[#65A662] font-semibold mt-4 inline-block hover:text-[#4A944E] transition-colors flex items-center">
              <FaChalkboardTeacher className="mr-2" /> {/* Add teacher icon */}
              ➤ FIND MY TEACHER
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
            alt="Practice for Free"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Practice for Free</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
            <a href="#" className="text-[#65A662] font-semibold mt-4 inline-block hover:text-[#4A944E] transition-colors flex items-center">
              <FaChalkboardTeacher className="mr-2" /> {/* Add teacher icon */}
              ➤ FIND MY TEACHER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
