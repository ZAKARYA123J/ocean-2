import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const courses = [
    {
      id: 1,
      title: "Business Italian in Small Groups",
      description: "Build a strong foundation in reading, writing, listening, and speaking skills in Italian.",
      details: "Our Business Italian training takes place in small groups of 3-5 participants. Our wide range of courses is designed to meet the needs of professionals at all stages of their career and of all language ability levels. In our core programs, you will acquire a solid foundation in Business Italian and noticeably improve your speaking skills in professional situations. Our courses include general business vocabulary, language and etiquette of oral and written business communication, and skills associated with various specialist business areas.",
      img: "https://example.com/path-to-italian-course-image1.jpg", // Remplacez par une image appropriée pour les cours d'italien
      frequency: "Courses take place once a week in a block of 4 x 45-minute teaching units with a short break – 5:20-8:30pm on a weekday evening or two sessions of 2 x 45-minute teaching units per week, either mornings 7:30-9:00am or evenings 7-8:30pm.",
      courseLength: "3+ participants: 60 x 45 minutes | 2 participants: 44 x 45 minutes",
      price: "980 € total price for the course plus an initial administration fee of 25 € and 46 € for your course book and audio files.",
      startDates: [
        { name: "BI-20241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BI-20242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BI-20243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
        // Ajoutez plus de dates de début si nécessaire
      ],
    },
    {
      id: 2,
      title: "Intensive Italian Week (Group Courses)",
      details: "Our intensive week program is the right choice if you want to make rapid progress through 30/40 hours of training in a dynamic small group environment. Our intensive weeks with 40 hours are recognized by the state’s educational leave scheme. Classes take place daily from Monday to Friday from 9:10am-2:10pm (with 30 hours) or Monday to Friday from 9:10am-4:15pm (with 40 hours) including breaks in groups of 2-5 participants. We offer the course at beginner (0-A2), intermediate (A2-B1), and advanced levels (B1+).",
      img: "https://example.com/path-to-italian-course-image2.jpg", // Remplacez par une image appropriée pour les cours d'italien
      price: "669€ for the week with 30 teaching units. 869€ for the week with 40 teaching units. Plus an initial administration fee of 25 € and 46 € for your course book and audio files.",
      startDates: [
        { name: "BI-20241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BI-20242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BI-20243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
        // Ajoutez plus de dates de début si nécessaire
      ],
    },
    {
      id: 3,
      title: "General Italian Courses",
      details: "Our general group courses take place one evening per week, offering an engaging atmosphere with an average of 4-8 learners per group. Courses run with 90-minute sessions per evening from either 5:20-6:50pm or 7-8:30pm. We offer Italian training as evening courses for all levels. The focus is on learning through oral communication so that practical communication goals are achieved quickly and effectively. Our courses are based on the CEFR levels and have accompanying material for use both in the classroom and at home.",
      frequency: "Our beginner courses start every 2 months according to demand. If you have experience in speaking Italian, we ask that you take our free online placement test (duration approx. 30-40 minutes) before your consultation so that we can select the course that suits you best. You can join an existing group at any time.",
      img: "https://example.com/path-to-italian-course-image3.jpg", // Remplacez par une image appropriée pour les cours d'italien
      price: "With a minimum contract commitment of 12 weeks: 110 € per 4 weeks. Plus an initial administration fee of 25 € and 39 € per half level for course book and audio files.",
      startDates: [
        { name: "BI-20241", date: "10.10.2024", weekday: "Thursday", time: "5:20pm-8:30pm" },
        { name: "BI-20242", date: "16.10.2024", weekday: "Wednesday and Friday", time: "7:30am-09:00am" },
        { name: "BI-20243", date: "22.10.2024", weekday: "Tuesday and Thursday", time: "7:00pm - 8:30pm" },
        // Ajoutez plus de dates de début si nécessaire
      ],
    },
    {
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
    // Ajoutez d'autres cours ici si nécessaire...
  ];

  // Trouvez le cours basé sur l'ID de l'URL
  const course = courses.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h2>
        <img src={course.img} alt={course.title} className="w-full h-64 object-cover mb-4" />

        <p className="text-gray-600 mb-6">{course.details}</p>

        <p className="text-gray-600 mb-2">
        {course.frequency && (
            <>
            <strong>Frequency:</strong> {course.frequency}
            </>
        )}
        </p>

        <p className="text-gray-600 mb-2">
        {course.courseLength && (
            <>
            <strong>Course Length:</strong> {course.courseLength}
            </>
        )}
        </p>

        <p className="text-gray-600 mb-2">
        <strong>Price:</strong> {course.price ? course.price : "Not available"}
        </p>

        {/* Afficher les dates de début */}
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Course Starts:</h3>
        <p className="text-gray-600 mb-4">
          The course level is based on the language levels of the participants. If you are not a beginner, we will assess your language level through our online placement test.
        </p>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Course Name</th>
              <th className="border border-gray-300 p-2">Start Date</th>
              <th className="border border-gray-300 p-2">Weekday</th>
              <th className="border border-gray-300 p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {course.startDates.map((start, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="border border-gray-300 p-2">{start.name}</td>
                <td className="border border-gray-300 p-2">{start.date}</td>
                <td className="border border-gray-300 p-2">{start.weekday}</td>
                <td className="border border-gray-300 p-2">{start.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CourseDetails;
