import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const LearnSpanishOffers = () => {
  return (
    <section className="py-16 bg-[#FFF0E5]"> {/* Light warm background */}
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="mr-2" />
          OFFERS
        </h3>
        <p className="text-gray-600 mt-4">
          Discover our exclusive learning options to help you achieve fluency in Spanish.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17218888/medium-shot-man-correcting-grammar-mistakes.jpg"
            alt="1-on-1 lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">1-on-1 Lessons</h3>
            <p className="text-gray-600 mt-2">
              Learn Spanish with personalized sessions from expert instructors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17218889/medium-shot-colleagues-high-five.jpg"
            alt="Group Class"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">Group Class</h3>
            <p className="text-gray-600 mt-2">
              Join interactive group classes and practice Spanish in a fun environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17218890/learn-spanish-language-online-education-concept.jpg"
            alt="Practice for Free"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">Practice for Free</h3>
            <p className="text-gray-600 mt-2">
              Access free resources and practice sessions to improve your Spanish.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded styles */}
      <style>{`
        /* Clean hover and transform effects */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default LearnSpanishOffers;
