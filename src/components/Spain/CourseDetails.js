import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';

const courseData = {
  "general-spanish": {
    title: "Español General",
    description: "Nuestro curso de español general está diseñado para construir una base sólida en las áreas fundamentales del español: lectura, escritura, escucha y expresión oral.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Nivel Principiante',
        description: 'Se enfoca en la gramática básica y el vocabulario relacionado con situaciones cotidianas. Aprenderás a tener conversaciones simples y a escribir textos básicos.',
        topics: [
          'Introducción a la gramática básica y vocabulario profesional',
          'Diálogos simples y conversaciones telefónicas',
          'Redacción y respuesta de correos electrónicos básicos',
          'Práctica de frases comunes en entornos cotidianos',
        ],
      },
    ],
    objectives: [
      'Lograr fluidez y confianza en la comunicación en español',
      'Desarrollar habilidades auditivas a través de escenarios de la vida real',
      'Expandir vocabulario para eventos sociales y de networking',
    ],
    schedule: [
      { day: "Lunes - Jueves", session: "Sesión de la Mañana", time: "10:00 AM - 12:00 PM" },
      { day: "Lunes - Jueves", session: "Sesión de la Tarde", time: "6:00 PM - 8:00 PM" },
    ],
    fee: 300,
    prerequisites: "No hay requisitos específicos para el nivel principiante. Los estudiantes de niveles superiores deben tener un conocimiento básico de la gramática y el vocabulario en español.",
    faq: [
      { question: '¿Qué materiales se proporcionan?', answer: 'Un libro de curso completo, folletos y recursos en línea.' },
      { question: '¿Puedo cambiar entre las clases de la mañana y de la tarde?', answer: 'Sí, contactándonos con una semana de antelación.' },
      { question: '¿Hay un certificado al finalizar?', answer: 'Sí, recibirás un certificado al aprobar la evaluación final.' },
    ],
  },
  "business-spanish": {
    title: "Español para Negocios",
    description: "Nuestras clases particulares se adaptan a tus necesidades y objetivos de aprendizaje individuales. Nos enfocamos en las áreas principales del español con un enfoque personalizado.",
    image: "https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg",
    levels: [
      {
        level: 'Nivel Principiante',
        description: 'Se enfoca en la gramática básica y el vocabulario profesional. Aprenderás a mantener conversaciones simples y redactar textos básicos.',
        topics: [
          'Introducción a la gramática básica y vocabulario de negocios',
          'Diálogos simples en un contexto profesional',
          'Redacción y respuesta de correos electrónicos básicos',
          'Práctica de frases comunes en entornos laborales',
        ],
      },
      // ... otros niveles
    ],
    objectives: [
      'Lograr fluidez y confianza en la comunicación diaria en español',
      'Desarrollar habilidades auditivas mediante lecciones personalizadas',
      'Expandir vocabulario para diversos contextos',
    ],
    schedule: [
      { day: "Lunes - Jueves", session: "Sesión de la Mañana", time: "9:00 AM - 11:00 AM" },
      { day: "Lunes - Jueves", session: "Sesión de la Tarde", time: "1:00 PM - 3:00 PM" },
    ],
    fee: 350,
    prerequisites: "No hay requisitos específicos para principiantes. Los estudiantes intermedios y avanzados deben tener un conocimiento básico de la gramática española.",
    faq: [
      { question: '¿Qué materiales se proporcionan?', answer: 'Un plan de curso personalizado, folletos y acceso a recursos en línea.' },
      { question: '¿Puedo programar lecciones en horarios diferentes?', answer: 'Sí, contactándonos con antelación, puedes ajustar tu horario.' },
      { question: '¿Hay un certificado después de completar el curso?', answer: 'Sí, al completar con éxito, se entrega un certificado.' },
    ],
  },
  "spanish-exam-preparation": {
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
  "spanish-for-kids": {
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
  "private-spanish-lessons": {
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
  "self-study-spanish": {
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
    return <p>¡Curso no encontrado!</p>;
  }

  return (
    <div className="container mx-auto p-8 lg:p-16 bg-white shadow-xl rounded-lg">
      {/* Header Section */}
      <div className="relative text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-md p-6 lg:p-8 mt-0">
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
            <h3 className="text-xl font-semibold text-red-600 mb-2">{item.level}</h3>
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
          <FaUserGraduate className="text-red-600 text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-red-600">Objetivos del Curso</h2>
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
          <FaCalendarAlt className="text-red-600 text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-red-600">Horario y Precios</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-3">Día</th>
              <th className="p-3">Sesión</th>
              <th className="p-3">Hora</th>
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
          El costo del curso para cada nivel es de <strong>${course.fee}</strong>, incluyendo todos los materiales y acceso a nuestros recursos en línea.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Requisitos Previos</h2>
        <p className="text-gray-700">{course.prerequisites}</p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-8">
          {course.faq.map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-red-600">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
