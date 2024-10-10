import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

const courseData = {
  "general-french": {
    title: "Français Général",
    description: "Notre cours de français général est conçu pour bâtir une base solide dans les compétences fondamentales : lecture, écriture, écoute, et expression orale.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Niveau Débutant',
        description: 'Se concentre sur la grammaire de base et le vocabulaire. Vous apprendrez à tenir des conversations simples et à rédiger des textes de base.',
        topics: [
          'Introduction à la grammaire de base et au vocabulaire quotidien',
          'Dialogues simples et conversations',
          'Rédaction et réponse aux messages de base',
          'Pratique des phrases courantes dans les contextes quotidiens',
        ],
      },
    ],
    objectives: [
      'Atteindre la fluidité et la confiance en communication quotidienne',
      'Développer des compétences d’écoute à travers des scénarios réels',
      'Élargir le vocabulaire pour divers contextes',
    ],
    schedule: [
      { day: "Lundi - Jeudi", session: "Session du Matin", time: "10:00 - 12:00" },
      { day: "Lundi - Jeudi", session: "Session du Soir", time: "18:00 - 20:00" },
    ],
    fee: 300,
    prerequisites: "Aucun prérequis spécifique pour le niveau débutant. Les étudiants des niveaux supérieurs doivent avoir une connaissance de base de la grammaire et du vocabulaire français.",
    faq: [
      { question: 'Quels matériaux sont fournis ?', answer: 'Un manuel complet, des supports de cours et des ressources en ligne.' },
      { question: 'Puis-je changer entre les cours du matin et du soir ?', answer: 'Oui, en nous contactant une semaine à l’avance.' },
      { question: 'Y a-t-il un certificat après la fin du cours ?', answer: 'Oui, un certificat sera délivré après avoir réussi l’évaluation finale.' },
    ],
  },
  "business-french": {
    title: "Français des Affaires",
    description: "Améliorez vos compétences en communication professionnelle en français grâce à notre cours dédié aux affaires.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Niveau Débutant',
        description: 'Apprenez le vocabulaire et la grammaire nécessaires pour des situations professionnelles. Vous apprendrez à écrire des e-mails et à participer à des réunions.',
        topics: [
          'Introduction à la grammaire professionnelle et au vocabulaire',
          'Dialogues et conversations en entreprise',
          'Rédaction et réponse à des e-mails professionnels',
          'Pratique des phrases courantes dans des contextes professionnels',
        ],
      },
    ],
    objectives: [
      'Atteindre la fluidité et la confiance en communication professionnelle en français',
      'Développer des compétences d’écoute à travers des scénarios d’affaires réels',
      'Élargir le vocabulaire pour les événements professionnels et les réseaux',
    ],
    schedule: [
      { day: "Lundi - Vendredi", session: "Session du Matin", time: "9:00 - 11:00" },
      { day: "Lundi - Vendredi", session: "Session de l’Après-midi", time: "13:00 - 15:00" },
    ],
    fee: 400,
    prerequisites: "Connaissance de base de la grammaire et du vocabulaire français requise pour les niveaux supérieurs.",
    faq: [
      { question: 'Quels matériaux sont fournis ?', answer: 'Un manuel personnalisé, des documents de cours et des ressources en ligne.' },
      { question: 'Puis-je ajuster mon emploi du temps ?', answer: 'Oui, en nous contactant à l’avance, vous pouvez ajuster votre emploi du temps.' },
      { question: 'Un certificat est-il fourni après le cours ?', answer: 'Oui, un certificat est fourni après la réussite de l’évaluation finale.' },
    ],
  },
  "delf-exam-preparation": {
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
  "french-for-kids": {
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
  "private-french-lessons": {
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
  "self-study-french-courses": {
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
      <div className="relative text-center mb-16 bg-gradient-to-r from-[#0052A5] to-[#EF4135] rounded-lg shadow-md p-6 lg:p-8 mt-0">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{course.title}</h1>
        <p className="text-lg text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">{course.description}</p>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-white"
        />
      </div>

      {/* Curriculum Breakdown */}
      <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg shadow-lg mb-12">
        {course.levels.map((item, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-xl font-semibold text-[#0052A5] mb-2">{item.level}</h3>
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
      <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg shadow-lg mb-12">
        <div className="flex items-center mb-4">
          <FaUserGraduate className="text-[#0052A5] text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-[#0052A5]">Objectifs du Cours</h2>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {course.objectives.map((objective, idx) => (
            <li key={idx}>{objective}</li>
          ))}
        </ul>
      </div>

      {/* Timetable and Pricing */}
      <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg shadow-lg mb-12">
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-[#0052A5] text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-[#0052A5]">Horaires et Tarifs</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0052A5] text-white">
              <th className="p-3">Jour</th>
              <th className="p-3">Session</th>
              <th className="p-3">Heure</th>
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
          Le tarif pour chaque niveau est de <strong>${course.fee}</strong>, incluant tous les supports de cours et l’accès à nos ressources en ligne.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-[#0052A5] mb-6">Prérequis</h2>
        <p className="text-gray-700">{course.prerequisites}</p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-white to-gray-100 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-[#0052A5] mb-6">Questions Fréquemment Posées (FAQ)</h2>
        <div className="space-y-8">
          {course.faq.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-[#0052A5]">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
