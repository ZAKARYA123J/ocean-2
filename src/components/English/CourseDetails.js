import React from 'react';
import { useParams } from 'react-router-dom';
import { FaBook, FaChalkboardTeacher, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

// Dummy Data for Courses (could be fetched from an API instead)
const courseData = {
  "general-english": {
    title: "General English",
    description: "Our Business English course is designed to build a strong foundation in the core areas of English: reading, writing, listening, and speaking.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and business-related vocabulary. You will learn how to conduct simple conversations and write basic emails.',
        topics: [
          'Introduction to basic grammar and professional vocabulary',
          'Simple business dialogues and phone conversations',
          'Writing and responding to basic emails',
          'Practicing common phrases used in business settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in professional English communication',
      'Develop effective listening skills through real-life business scenarios',
      'Expand vocabulary for business, social, and networking events',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "10:00 AM - 12:00 PM" },
      { day: "Monday - Thursday", session: "Evening Session", time: "6:00 PM - 8:00 PM" },
    ],
    fee: 300,
    prerequisites: "There are no specific prerequisites for the beginner level. Students enrolling in higher levels should have a basic understanding of English grammar and vocabulary.",
    faq: [
      { question: 'What materials are provided?', answer: 'A comprehensive coursebook, handouts, and online resources.' },
      { question: 'Can I switch between morning and evening classes?', answer: 'Yes, by contacting us one week in advance.' },
      { question: 'Is there a certificate upon completion?', answer: 'Yes, you will receive a certificate upon passing the final assessment.' },
    ],
  },
  "business-english": {
    title: "Business English",
    description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
        topics: [
          'Introduction to basic grammar and everyday vocabulary',
          'Simple dialogues and conversations',
          'Writing and responding to basic messages',
          'Practicing common phrases used in everyday settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in daily English communication',
      'Develop listening skills through personalized lessons',
      'Expand vocabulary for various contexts',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
      { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
    faq: [
      { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
      { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
      { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
    ],
  },
  "exam-preparation": {
    title: "Exam Preparation",
    description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
        topics: [
          'Introduction to basic grammar and everyday vocabulary',
          'Simple dialogues and conversations',
          'Writing and responding to basic messages',
          'Practicing common phrases used in everyday settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in daily English communication',
      'Develop listening skills through personalized lessons',
      'Expand vocabulary for various contexts',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
      { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
    faq: [
      { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
      { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
      { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
    ],
  },
  "english-for-kids": {
    title: "English For Kids",
    description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
        topics: [
          'Introduction to basic grammar and everyday vocabulary',
          'Simple dialogues and conversations',
          'Writing and responding to basic messages',
          'Practicing common phrases used in everyday settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in daily English communication',
      'Develop listening skills through personalized lessons',
      'Expand vocabulary for various contexts',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
      { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
    faq: [
      { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
      { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
      { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
    ],
  },
  "private-lessons": {
    title: "Private Lessons",
    description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
        topics: [
          'Introduction to basic grammar and everyday vocabulary',
          'Simple dialogues and conversations',
          'Writing and responding to basic messages',
          'Practicing common phrases used in everyday settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in daily English communication',
      'Develop listening skills through personalized lessons',
      'Expand vocabulary for various contexts',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
      { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
    faq: [
      { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
      { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
      { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
    ],
  },
  "self-study-courses": {
    title: "self Study Courses",
    description: "Our Private Lessons are tailored to meet your individual learning needs and objectives. We focus on the core areas of English with a personalized approach.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Beginner Level',
        description: 'Focuses on basic grammar and vocabulary. You will learn how to have simple conversations and write basic texts.',
        topics: [
          'Introduction to basic grammar and everyday vocabulary',
          'Simple dialogues and conversations',
          'Writing and responding to basic messages',
          'Practicing common phrases used in everyday settings',
        ],
      },
      // ... other levels
    ],
    objectives: [
      'Achieve fluency and confidence in daily English communication',
      'Develop listening skills through personalized lessons',
      'Expand vocabulary for various contexts',
    ],
    schedule: [
      { day: "Monday - Thursday", session: "Morning Session", time: "9:00 AM - 11:00 AM" },
      { day: "Monday - Thursday", session: "Afternoon Session", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No specific prerequisites for beginners. Intermediate and advanced students should have a basic understanding of English grammar.",
    faq: [
      { question: 'What materials are provided?', answer: 'A personalized course plan, handouts, and access to online resources.' },
      { question: 'Can I schedule lessons at different times?', answer: 'Yes, by contacting us in advance, you can adjust your schedule.' },
      { question: 'Is there a certification after completion?', answer: 'Yes, upon successful completion, a certificate is provided.' },
    ],
  },
};

const CourseDetails = () => {
  const { courseType } = useParams();
  const course = courseData[courseType];

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div className="container mx-auto p-8 lg:p-16 bg-white shadow-xl rounded-lg">
      {/* Header Section */}
      <div className="relative text-center mb-16 bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md p-6 lg:p-8 mt-0">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{course.title}</h1>
        <p className="text-lg text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">{course.description}</p>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-white"
        />
      </div>

      {/* Curriculum Breakdown */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        {course.levels.map((item, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold text-[#65A662] mb-2">{item.level}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {item.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Course Objectives */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <div className="flex items-center mb-4">
          <FaUserGraduate className="text-[#65A662] text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-[#65A662]">Course Objectives</h2>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {course.objectives.map((objective, idx) => (
            <li key={idx}>{objective}</li>
          ))}
        </ul>
      </div>

      {/* Timetable and Pricing */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-[#65A662] text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-[#65A662]">Timetable and Pricing</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#65A662] text-white">
              <th className="p-3">Day</th>
              <th className="p-3">Session</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {course.schedule.map((session, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b">{session.day}</td>
                <td className="p-3 border-b">{session.session}</td>
                <td className="p-3 border-b">{session.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-gray-700 mt-6">
          The course fee for each level is <strong>${course.fee}</strong>, including all course materials and access to our online resources.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-[#65A662] mb-6">Prerequisites</h2>
        <p className="text-gray-700">{course.prerequisites}</p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-[#65A662] mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-8">
          {course.faq.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-[#65A662]">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
