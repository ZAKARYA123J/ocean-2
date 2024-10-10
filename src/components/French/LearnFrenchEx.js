import React, { useState } from 'react';
import Ex1 from '../Exercice/Ex1';
import Ex2 from '../Exercice/Ex2';
import Ex3 from '../Exercice/Ex3';
import Ex4 from '../Exercice/Ex4';
import Ex5 from '../Exercice/Ex5';
import Confetti from 'react-confetti';

const LearnEnglishEx = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [scores, setScores] = useState({ ex1: 0, ex2: 0, ex3: 0, ex4: 0, ex5: 0 });
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [level, setLevel] = useState("");

  const handleScoreUpdate = (exercise, score) => {
    setScores((prevScores) => ({ ...prevScores, [exercise]: score }));
  };

  const calculateFinalScore = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    setFinalScore(totalScore);
    determineLevel(totalScore);
    setShowModal(true);
  };

  const determineLevel = (score) => {
    if (score <= 10) setLevel("A1");
    else if (score <= 20) setLevel("A2");
    else if (score <= 30) setLevel("B1");
    else if (score <= 40) setLevel("B2");
    else if (score <= 45) setLevel("C1");
    else setLevel("C2");
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center text-[#65A662] animate-slideDown">
        English Language Proficiency Test
      </h1>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl bg-gray-300 rounded-full h-4 mb-10 shadow-lg overflow-hidden relative">
        <div
          className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] h-full rounded-full shadow-lg transition-all duration-700 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Render exercises based on the current step */}
      {!showModal && (
        <div className="transition-all duration-700 transform card-container">
          {currentStep === 1 && <Ex1 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} />}
          {currentStep === 2 && <Ex2 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 3 && <Ex3 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 4 && <Ex4 onScoreUpdate={handleScoreUpdate} nextStep={nextStep} prevStep={prevStep} />}
          {currentStep === 5 && (
            <Ex5
              onScoreUpdate={handleScoreUpdate}
              prevStep={prevStep}
              calculateFinalScore={calculateFinalScore}
            />
          )}
        </div>
      )}

      {/* Modal to show after the final exercise */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} gravity={0.05} />
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center transform animate-flipIn">
            <h2 className="text-4xl font-bold text-green-500 mb-6">Congratulations!</h2>
            <p className="text-lg text-gray-700 mb-4">
              You have completed the test. Your English level is <strong>{level}</strong>!
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => {
                  const message = `I just finished the English language test and my level is ${level}!`;
                  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
                }}
                className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transform transition-transform duration-300 hover:scale-105"
              >
                Share on WhatsApp
              </button>
              <button
                onClick={() => {
                  const message = `I just finished the English language test and my level is ${level}!`;
                  window.open(`sms:?body=${encodeURIComponent(message)}`);
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105"
              >
                Share via SMS
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Keyframe Animations */
        @keyframes slideDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes flipIn {
          0% { transform: rotateY(-90deg); opacity: 0; }
          100% { transform: rotateY(0); opacity: 1; }
        }

        /* Animation Classes */
        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }

        .animate-flipIn {
          animation: flipIn 0.8s ease-out forwards;
        }

        .card-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 600px;
          margin: auto;
          transform: perspective(1000px) rotateX(0deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .card-container:hover {
          transform: perspective(1000px) rotateX(3deg);
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default LearnEnglishEx;
