import React from 'react';
import { FaChalkboardTeacher, FaAngleDoubleRight } from 'react-icons/fa';

const LearningOptions = () => {
  return (
    <section className="py-16 bg-white">
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-green-600 mb-2 flex items-center justify-center animate-fadeInUp">
          <FaAngleDoubleRight className="mr-2" />
          ITALIAN LEARNING OFFERS
        </h3>
        <p className="text-black-500 mt-4 animate-fadeInUp">
          Discover our exclusive learning options to help you achieve fluency in Italian.
        </p>
      </div>

      {/* Cards with hover animation */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-green-600">
          <img
            className="w-full h-48 object-cover"
            src="https://img.freepik.com/free-photo/teacher-young-student-having-good-time_23-2148511043.jpg?ga=GA1.1.1388010401.1725554040&semt=ais_hybrid"
            alt="1-on-1 Italian Lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-600">1-on-1 Italian Lessons</h3>
            <p className="text-gray-600 mt-2">
              Connect with native Italian teachers from around the world and immerse yourself in Italian culture.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-green-600">
          <img
            className="w-full h-48 object-cover"
            src="https://img.freepik.com/free-photo/colleagues-working-together-while-sitting-cafe_273609-13053.jpg?t=st=1728393293~exp=1728396893~hmac=376be9046116439695c9998d489ff66633ac5eadfc9dc2bd8d5e8e82b9be7fcf&w=1060"
            alt="Italian Group Classes"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-600">Italian Group Classes</h3>
            <p className="text-gray-600 mt-2">
              Learn Italian in a supportive group environment with interactive sessions led by expert instructors.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-green-600">
          <img
            className="w-full h-48 object-cover"
            src="https://img.freepik.com/free-photo/learn-italian-language-online-education-concept_53876-137599.jpg?ga=GA1.1.1388010401.1725554040&semt=ais_hybrid"
            alt="Practice Italian"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-600">Practice Italian</h3>
            <p className="text-gray-600 mt-2">
              Engage in free conversation practice with other Italian learners and native speakers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
