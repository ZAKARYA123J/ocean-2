import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const LearnEnglishOne = () => {
  return (
    <section className="py-16 bg-white">
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="mr-2" />
          OFFERS
        </h3>
        <p className="text-gray-500 mt-4">
          Discover our exclusive learning options to help you achieve fluency in English.
        </p>
      </div>

      {/* Cards without "FIND MY TEACHER" button */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17214724/teacher-holding-english-class.jpg"
            alt="1-on-1 lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">1-on-1 Lessons</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17214739/back-view-kids-writing-whiteboard.jpg"
            alt="Group Class"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Group Class</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://www.upload.ee/image/17214733/english-books-assortment-still-life.jpg"
            alt="Practice for Free"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Practice for Free</h3>
            <p className="text-gray-600 mt-2">
              Find teachers from all over the world sharing their languages, dialects, and cultures.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.7) rotate(-3deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes scaleDown {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default LearnEnglishOne;
