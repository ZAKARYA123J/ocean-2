import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courseData = [
  {
    title: 'General English',
    description: 'Build a strong foundation in reading, writing, listening, and speaking skills.',
    image: 'https://www.upload.ee/image/17214752/english-book-resting-table-working-space.jpg',
  },
  {
    title: 'Business English',
    description: 'Enhance your business communication and professional skills in English.',
    image: 'https://www.upload.ee/image/17214757/english-books-assortment-still-life.jpg',
  },
  {
    title: 'Exam Preparation',
    description: 'Prepare for English proficiency exams with focused practice and strategies.',
    image: 'https://www.upload.ee/image/17214760/english-books-resting-table-working-space__1_.jpg',
  },
  {
    title: 'English for Kids',
    description: 'Fun and interactive lessons designed for young learners to grasp English skills.',
    image: 'https://img.freepik.com/free-photo/english-book-resting-table-working-space_23-2149429625.jpg?t=st=1728394091~exp=1728397691~hmac=225ae29acb4c6d45c277750cae8e0b1b8f6a1f51dfa975a32dba90dc3324579d&w=996',
  },
  {
    title: 'Private Lessons',
    description: 'Personalized lessons tailored to individual learning styles and goals.',
    image: 'https://img.freepik.com/free-photo/english-books-stacks-table-working-space_23-2149429579.jpg?t=st=1728394178~exp=1728397778~hmac=6badd3f3172f3ca884d428980d26fed119bf9a192f6c883d6809652932097eaf&w=996',
  },
  {
    title: 'Self-study Courses',
    description: 'Flexible and self-paced courses for independent learners.',
    image: 'https://img.freepik.com/free-photo/english-book-resting-table-working-space_23-2149429575.jpg?t=st=1728394216~exp=1728397816~hmac=a518487ca3c97d5ede4f5940aaff2dd40c4df1451f75517b02d8b0984a5f83e5&w=360',
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
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="ml-2" /> COURSES
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in English.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
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
                className="bg-[#65A662] text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300"
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
