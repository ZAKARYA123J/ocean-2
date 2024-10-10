import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  // Simulate fetching data and trigger the animation after a short delay
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // Slight delay for visual effect
  }, []);

  // Course Data
  const courses = [
    {
      id: 1,
      title: "Business Italian in small groups",
      description: "Build a strong foundation in reading, writing, listening, and speaking skills in Italian.",
      details: "Our Business Italian training takes place in small groups of 3-5 participants...",
      img: "https://www.sprachheld.de/wp-content/uploads/2019/08/Speakable-Lucrezia-Premuda-Italienisch-Deutsch-Uebersetzungen.jpg",
      frequency: "Courses take place once a week...",
      courseLength: "3+ participants: 60 x 45 minutes 2 participants: 44 x 45 minutes",
      price: "980 € total price for the course...",
      startDates: [
        { name: "BI-20241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BI-20242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BI-20243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
      ],
    },
    // Additional courses...
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-green-600 mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="ml-2" style={{ color: "#008000" }} /> {/* Green arrow icon */}
          COURSES
        </h3>
        <h2 className="text-4xl font-bold text-red-600 mb-4">Our Italian Courses</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in Italian.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="relative w-full">
              <img
                className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                src={course.img}
                alt={course.title}
              />
              {/* Navigate to the details page when the button is clicked */}
              <button
                onClick={() => navigate(`/LearnItalian/${course.id}`)}
                className="absolute top-3 left-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
              >
                ➤ LEARN MORE
              </button>
            </div>
            <div className="pb-12 w-full">
              <h3 className="text-xl font-semibold text-green-700 mt-4">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
