import React, { useState } from 'react';
import Ex1 from '../Exercice/Ex1'; // Grammar Exercise
import Ex2 from '../Exercice/Ex2'; // Vocabulary Exercise
import Ex3 from '../Exercice/Ex3'; // Reading Comprehension Exercise
import Ex4 from '../Exercice/Ex4'; // Tenses Exercise
import Ex5 from '../Exercice/Ex5'; // Synonyms/Antonyms Exercise
import { FaCheckCircle } from 'react-icons/fa'; // Icon for visual enhancement

const ExerciseSession = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track which exercise we're on
  const [scores, setScores] = useState({ ex1: 0, ex2: 0, ex3: 0, ex4: 0, ex5: 0 }); // Store individual exercise scores

  // Function to handle score updates
  const handleScoreUpdate = (exercise, score) => {
    setScores(prevScores => ({ ...prevScores, [exercise]: score }));
  };

  // Function to calculate total score
  const calculateFinalScore = () => {
    return Object.values(scores).reduce((acc, score) => acc + score, 0); // Sum of all exercise scores
  };

  // Navigation between exercises
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // Calculate progress percentage
  const progressPercentage = Math.round((currentStep / 5) * 100);

  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fadeInUp">
        English Language Proficiency Test
      </h1>

      {/* Circular Progress Indicator */}
      <div className="relative mb-10">
        <svg className="w-32 h-32">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#e0e0e0"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#65A662"
            strokeWidth="8"
            strokeDasharray="283" /* Circumference of the circle */
            strokeDashoffset={283 - (283 * progressPercentage) / 100}
            fill="transparent"
            className="transition-all duration-700 ease-in-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{progressPercentage}%</span>
          <span className="text-sm text-gray-600">Step {currentStep} of 5</span>
        </div>
      </div>

      {/* Exercise Content with Slide-in Animation */}
      <div
        className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full shadow-lg transition-transform duration-700 ease-in-out transform"
        style={{
          animation: currentStep % 2 === 0 ? 'slideInLeft 0.7s ease-out' : 'slideInRight 0.7s ease-out',
        }}
      >
        {currentStep === 1 && <Ex1 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} />}
        {currentStep === 2 && <Ex2 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 3 && <Ex3 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 4 && <Ex4 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
        {currentStep === 5 && <Ex5 onScoreUpdate={handleScoreUpdate} prevStep={prevStep} calculateFinalScore={calculateFinalScore} />}
      </div>

      <style jsx="true">{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ExerciseSession;
