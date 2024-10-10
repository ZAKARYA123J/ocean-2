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
      title: "Business German in small groups",
      description: "Build a strong foundation in reading, writing, listening, and speaking skills in German.",
      details: "Our Business English training takes place in small groups of 3-5 participants. Our wide range of courses is designed to meet the needs of professionals at all stages of their career, and of all language ability levels.In our core programmes you will acquire a solid foundation in Business English and noticeably improve your speaking skills in professional situations. Our courses include general business vocabulary, language and etiquette of oral and written business communication, and skills associated with various specialist business areas.",
      img: "https://media.istockphoto.com/id/1135975719/photo/flag-of-germany-and-the-word-german.jpg?s=612x612&w=0&k=20&c=RpRnzQcSUWIorZgE-b3WHovvCyIf1Ko-83xrmEuKMI8=",
      frequency: "Courses take place once a week in a block of 4 x 45- minute teaching units with a short break – 5:20-8:30pm on a weekday evening or two sessions of 2 x 45- minute teaching units per week, either mornings 7:30-9:00am or evenings 7-8:30pm.",
      courseLength: "3+ participants: 60 x 45 minutes 2 participants: 44 x 45 minutes",
      price: "980 € total price for the course Plus an initial administration fee of 25 € and 46 € for your course book and audio files.",
      startDates: [
        { name: "BE-10241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BE-10242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BE-10243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
        // Add more start dates as needed
      ],
    },{
      id: 2,
      title: "Intensive week (group courses)",
      details: "Our intensive week programme is the right choice if you want to make rapid progress through 30/40 hours of training in a dynamic small group environment. Our intensive weeks with 40 hours are recognised by the state of Hessen’s ‘Bildungsurlaub’ educational leave scheme.Classes take place daily from Monday to Friday from 9:10am-2:10pm (with 30 hours) or Monday to Friday from 9:10am-4:15pm (with 40 hours) including breaks in groups of 2-5 participants. We offer the course at beginner (0-A2), intermediate  (A2-B1) and advanced levels (B1+).",
      img: "https://media.istockphoto.com/id/1135975719/photo/flag-of-germany-and-the-word-german.jpg?s=612x612&w=0&k=20&c=RpRnzQcSUWIorZgE-b3WHovvCyIf1Ko-83xrmEuKMI8=",
      price: "669€ for the week with 30 teaching units. 869€ for the week with 40 teaching units.Plus an initial administration fee of 25 € and 46 € for your course book and audio files.",
      startDates: [
        { name: "BE-10241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BE-10242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BE-10243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
      ],
    },{
      id: 3,
      title: "General English courses",
      details: "Our general group courses take place one evening per week, offering an engaging atmosphere with an average of 4-8 learners per group. Courses run with 90 minutes sessions per evening from either 5:20-6:50pm or 7-8:30pm. We offer English training as evening courses for all levels. The focus is on learning through oral communication so that practical communication goals are achieved quickly and effectively. Our courses are based on the CEFR levels and have accompanying material for use both in the classroom and at home. You will develop your skills in vocabulary, reading comprehension, listening comprehension and writing skills in addition to fluent oral expression..",
      frequency:"Our beginner courses start every 2 months according to demand. If you have experience in speaking English, we ask that you take our free online placement test (duration approx. 30-40 minutes) before your consultation so that we can select the course that suits you best. You can join an existing group at any time. Experienced learners can test our effective inlingua method in a free trial lesson. We offer flexibility! You can terminate your contract with 4 weeks notice to the end of the initial term. After the initial term, contracts can be terminated with 4 weeks notice at the beginning of the billing period.",
      img: "https://media.istockphoto.com/id/1135975719/photo/flag-of-germany-and-the-word-german.jpg?s=612x612&w=0&k=20&c=RpRnzQcSUWIorZgE-b3WHovvCyIf1Ko-83xrmEuKMI8=",
      price: "With a minimum contract commitment of 12 weeks: 110 € per 4 weeks Plus an initial administration fee of 25 € and 39 € per half level for course book and audio files.",
      startDates: [
        { name: "BE-10241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BE-10242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BE-10243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
      ],
    },{
      id: 4,
      title: "Saturday Club",
      details: "The focus of our language courses is on learning through oral communication so that practical communication goals are achieved quickly and effectively. Our courses are based on the CEFR levels and have accompanying material for use both in the classroom and at home. You will develop your skills in vocabulary, reading comprehension, listening comprehension and writing skills in addition to fluent oral expression.",
      frequency:"Our beginner courses start every 2 months according to demand. If you have experience in speaking English, we ask that you take our free online placement test (duration approx. 30-40 minutes) before your consultation so that we can select the course that suits you best. You can join an existing group at any time. Experienced learners can test our effective inlingua method in a free trial lesson. We offer flexibility! You can terminate your contract with 4 weeks notice to the end of the initial term. After the initial term, contracts can be terminated with 4 weeks notice at the beginning of the billing period.",
      courseLength: "4 x 45- minute teaching units for 8 consecutive Saturdays.From 9:10am-12:30pm including a small break.",
      img: "https://media.istockphoto.com/id/1135975719/photo/flag-of-germany-and-the-word-german.jpg?s=612x612&w=0&k=20&c=RpRnzQcSUWIorZgE-b3WHovvCyIf1Ko-83xrmEuKMI8=",
      price: "510 € for the total course.Plus an initial administration fee of 25 € and 46 € for your course book and audio files.",
      startDates: [
        { name: "BE-10241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BE-10242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BE-10243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
        // Add more start dates as needed
      ],
    },
    // Additional courses here...
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="ml-2" style={{ color: "#000000" }} /> {/* Black arrow icon */}
          COURSES
        </h3>
        <h2 className="text-4xl font-bold text-black mb-4">Our German Courses</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in German.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
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
                onClick={() => navigate(`/CourseDetails/${course.id}`)}
                className="absolute top-3 left-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300 ease-in-out"
              >
                ➤ LEARN MORE
              </button>
            </div>
            <div className="pb-12 w-full">
              <h3 className="text-xl font-semibold text-black mt-4">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection; 






