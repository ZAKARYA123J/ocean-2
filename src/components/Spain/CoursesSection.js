import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courseData = [
  {
    title: 'General Spanish',
    description: 'Build a strong foundation in reading, writing, listening, and speaking skills in Spanish.',
    image: 'https://www.upload.ee/image/17219123/learn-spanish-language-online-education-concept.jpg',
  },
  {
    title: 'Business Spanish',
    description: 'Enhance your business communication and professional skills in Spanish.',
    image: 'https://www.upload.ee/image/17219127/pencil-sharpener-notepad-books.jpg',
  },
  {
    title: 'DELE Exam Preparation',
    description: 'Prepare for Spanish proficiency exams with focused practice and strategies.',
    image: 'https://www.upload.ee/image/17219130/high-angle-man-holding-notebook.jpg',
  },
  {
    title: 'Spanish for Kids',
    description: 'Fun and interactive lessons designed for young learners to grasp Spanish skills.',
    image: 'https://www.upload.ee/image/17219131/book-3089857_1280.jpg',
  },
  {
    title: 'Private Spanish Lessons',
    description: 'Personalized lessons tailored to individual learning styles and goals.',
    image: 'https://www.upload.ee/image/17219142/row-various-old-books.jpg',
  },
  {
    title: 'Self-study Spanish Courses',
    description: 'Flexible and self-paced courses for independent learners.',
    image: 'https://www.upload.ee/image/17219148/english-books-with-blue-background.jpg',
  },
];

const CoursesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const handleLearnMore = (courseTitle) => {
    const courseId = courseTitle.toLowerCase().replace(/ /g, '-');
    navigate(`/course/${courseId}`);
  };

  return (
    <section className="py-16 bg-[#FFF0E5]"> {/* Spanish-themed background color */}
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="ml-2" /> COURSES
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Spanish Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in Spanish.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${0.2 * index}s` }}
          >
            <div className="pb-12 w-full">
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
            <div className="w-full flex justify-start">
              <button
                onClick={() => handleLearnMore(course.title)}
                className="bg-[#FF5733] text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300 hover:bg-[#D04B2C]"
              >
                ➤ LEARN MORE
              </button>
            </div>
            <img
              className={`w-full h-48 object-cover transition-opacity duration-700 ease-out`}
              src={course.image}
              alt={course.title}
            />
          </div>
        ))}
      </div>

      <style>{`
        /* Remove hover zoom effect from images */
        img {
          transform: scale(1);
          transition: transform 0.3s ease-out;
        }

        img:hover {
          transform: scale(1);
        }

        /* Remove hover effect from button */
        button:hover {
          transform: none;
        }

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

export default CoursesSection;
