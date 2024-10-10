import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const LearnFrenchOffers = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* Gradient background matching the French flag */}
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-[#0052A5] mb-2 flex items-center justify-center"> {/* Blue color */}
          <FaAngleDoubleRight className="mr-2" />
          OFFERS
        </h3>
        <p className="text-gray-600 mt-4">
          Discover our exclusive learning options to help you achieve fluency in French.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#0052A5] transform hover:scale-105 transition-transform duration-300"> {/* Blue border */}
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17221749/blonde-girl-painting.jpg"
            alt="1-on-1 lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#0052A5]">1-on-1 Lessons</h3> {/* Blue text */}
            <p className="text-gray-600 mt-2">
              Learn French with personalized sessions from expert instructors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#EF4135] transform hover:scale-105 transition-transform duration-300"> {/* Red border */}
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17221768/answering-lesson.jpg"
            alt="Group Class"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#EF4135]">Group Class</h3> {/* Red text */}
            <p className="text-gray-600 mt-2">
              Join interactive group classes and practice French in a fun environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#0052A5] transform hover:scale-105 transition-transform duration-300"> {/* Blue border */}
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17221772/woman-hands-hold-french-france-flag-patriotism.jpg"
            alt="Practice for Free"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#0052A5]">Practice for Free</h3> {/* Blue text */}
            <p className="text-gray-600 mt-2">
              Access free resources and practice sessions to improve your French.
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

export default LearnFrenchOffers;
  