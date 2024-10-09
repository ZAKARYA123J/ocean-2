// import React from 'react';
// import { FaBook, FaChalkboardTeacher, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

// const GeneralEnglishDetail = () => {
//   return (
//     <div className="container mx-auto p-8 lg:p-16 bg-white shadow-xl rounded-lg">
//       {/* Header Section */}
//       <div className="relative text-center mb-16 bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md p-6 lg:p-8 mt-0">
//         <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">General English</h1>
//         <p className="text-lg text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
//           Our Business English course is designed to build a strong foundation in the core areas of English: reading, writing, listening, and speaking. 
//           It aims to improve your fluency, vocabulary, and grammar through interactive and practical lessons tailored for professional settings.
//         </p>
//         <img
//           src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
//           alt="Business English Course"
//           className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-white"
//         />
//       </div>

//       {/* Course Overview */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <div className="flex items-center mb-4">
//           <FaBook className="text-[#65A662] text-2xl mr-2" />
//           <h2 className="text-3xl font-bold text-[#65A662]">Course Overview</h2>
//         </div>
//         <p className="text-gray-700 mb-4 leading-relaxed">
//           The Business English course is structured to help you improve your language skills for professional environments. 
//           You will engage in real-world scenarios, presentations, and group activities designed to enhance business communication.
//         </p>
//         <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
//           <li>Levels: Beginner, Intermediate, Upper-Intermediate, and Advanced</li>
//           <li>Duration: 3 months per level</li>
//           <li>Class Schedule: Monday - Thursday, 10:00 AM - 12:00 PM</li>
//           <li>Max Class Size: 12 students per group</li>
//           <li>Certified and experienced business instructors</li>
//         </ul>
//         <p className="text-gray-700">
//           This course is perfect for professionals aiming to enhance their fluency and confidence in business communication. It includes a mix of role-playing, 
//           simulated meetings, email writing workshops, and more to ensure you develop practical, real-world skills.
//         </p>
//       </div>

//       {/* Curriculum Breakdown */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <div className="flex items-center mb-4">
//           <FaChalkboardTeacher className="text-[#65A662] text-2xl mr-2" />
//           <h2 className="text-3xl font-bold text-[#65A662]">Curriculum Breakdown</h2>
//         </div>
//         <p className="text-gray-700 mb-6">
//           The curriculum is divided into four main levels, each focusing on key skills for business professionals:
//         </p>
//         {[
//           {
//             level: 'Beginner Level',
//             description: 'Focuses on basic grammar and business-related vocabulary. You will learn how to conduct simple conversations and write basic emails.',
//             topics: [
//               'Introduction to basic grammar and professional vocabulary',
//               'Simple business dialogues and phone conversations',
//               'Writing and responding to basic emails',
//               'Practicing common phrases used in business settings',
//             ],
//           },
//           {
//             level: 'Intermediate Level',
//             description: 'Covers more complex grammar and expands on vocabulary for meetings, presentations, and business negotiations.',
//             topics: [
//               'Grammar for past and future contexts in business communication',
//               'Vocabulary for travel, meetings, and presentations',
//               'Structured writing tasks, including report creation',
//               'Practice sessions for small talk and networking events',
//             ],
//           },
//           {
//             level: 'Upper-Intermediate Level',
//             description: 'Improves fluency in professional contexts and includes negotiation skills, professional writing, and presentation skills.',
//             topics: [
//               'Advanced business grammar and phrasal verbs',
//               'Vocabulary for professional communication and negotiations',
//               'Public speaking and presentation exercises',
//               'Role-playing activities for negotiation scenarios',
//             ],
//           },
//           {
//             level: 'Advanced Level',
//             description: 'Focuses on mastery of English for high-level professional use, including public speaking, proposals, and team management.',
//             topics: [
//               'Advanced grammar structures for professional reports',
//               'Leadership and management vocabulary',
//               'Advanced writing tasks, such as proposals and presentations',
//               'Mock presentations and public speaking practice',
//             ],
//           },
//         ].map((item, idx) => (
//           <div key={idx} className="mb-8">
//             <h3 className="text-xl font-semibold text-[#65A662] mb-2">{item.level}</h3>
//             <p className="text-gray-700 mb-4">{item.description}</p>
//             <ul className="list-disc pl-6 text-gray-700 space-y-2">
//               {item.topics.map((topic, i) => (
//                 <li key={i}>{topic}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Course Objectives */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <div className="flex items-center mb-4">
//           <FaUserGraduate className="text-[#65A662] text-2xl mr-2" />
//           <h2 className="text-3xl font-bold text-[#65A662]">Course Objectives</h2>
//         </div>
//         <ul className="list-disc pl-6 text-gray-700 space-y-2">
//           <li>Achieve fluency and confidence in professional English communication</li>
//           <li>Develop effective listening skills through real-life business scenarios</li>
//           <li>Expand vocabulary for business, social, and networking events</li>
//           <li>Master English grammar for professional contexts</li>
//           <li>Enhance public speaking and presentation skills</li>
//           <li>Improve negotiation and email communication techniques</li>
//         </ul>
//       </div>

//       {/* Timetable and Pricing */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <div className="flex items-center mb-4">
//           <FaCalendarAlt className="text-[#65A662] text-2xl mr-2" />
//           <h2 className="text-3xl font-bold text-[#65A662]">Timetable and Pricing</h2>
//         </div>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#65A662] text-white">
//               <th className="p-3">Day</th>
//               <th className="p-3">Session</th>
//               <th className="p-3">Time</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white text-gray-700">
//             <tr>
//               <td className="p-3 border-b">Monday - Thursday</td>
//               <td className="p-3 border-b">Morning Session</td>
//               <td className="p-3 border-b">10:00 AM - 12:00 PM</td>
//             </tr>
//             <tr>
//               <td className="p-3 border-b">Monday - Thursday</td>
//               <td className="p-3 border-b">Evening Session</td>
//               <td className="p-3 border-b">6:00 PM - 8:00 PM</td>
//             </tr>
//           </tbody>
//         </table>
//         <p className="text-gray-700 mt-6">
//           The course fee for each level is <strong>$300</strong>, including all course materials and access to our online resources.
//         </p>
//       </div>

//       {/* Prerequisites */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <h2 className="text-3xl font-bold text-[#65A662] mb-6">Prerequisites</h2>
//         <p className="text-gray-700">
//           There are no specific prerequisites for the beginner level. Students enrolling in higher levels should have a basic understanding of English grammar and vocabulary.
//         </p>
//       </div>

//       {/* FAQ Section */}
//       <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
//         <h2 className="text-3xl font-bold text-[#65A662] mb-6">Frequently Asked Questions (FAQ)</h2>
//         <div className="space-y-8">
//           {[
//             { question: 'What materials are provided?', answer: 'A comprehensive coursebook, handouts, and online resources.' },
//             { question: 'Can I switch between morning and evening classes?', answer: 'Yes, by contacting us one week in advance.' },
//             { question: 'Is there a certificate upon completion?', answer: 'Yes, you will receive a certificate upon passing the final assessment.' },
//           ].map((faq, idx) => (
//             <div key={idx}>
//               <h3 className="text-xl font-semibold text-[#65A662]">{faq.question}</h3>
//               <p className="text-gray-700">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralEnglishDetail;
