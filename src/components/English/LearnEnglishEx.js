import React, { useState, useEffect } from 'react';
import Ex1 from '../Exercice/Ex1';
import Ex2 from '../Exercice/Ex2';
import Ex3 from '../Exercice/Ex3';
import Ex4 from '../Exercice/Ex4';
import Ex5 from '../Exercice/Ex5';
import Levels from '../Exercice/Levels';

const LearnEnglishEx = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [scores, setScores] = useState({ ex1: 0, ex2: 0, ex3: 0, ex4: 0, ex5: 0 });
  const [unlockedLevels, setUnlockedLevels] = useState({ A1: true, A2: false, B1: false, B2: false, C1: false });
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [nextLevel, setNextLevel] = useState('');
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    const savedScores = localStorage.getItem('scores');
    const savedUnlockedLevels = localStorage.getItem('unlockedLevels');

    if (savedStep) setCurrentStep(Number(savedStep));
    if (savedScores) setScores(JSON.parse(savedScores));
    if (savedUnlockedLevels) setUnlockedLevels(JSON.parse(savedUnlockedLevels));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));
  }, [currentStep, scores, unlockedLevels]);

  const handleScoreUpdate = (exercise, score) => {
    setScores((prevScores) => ({ ...prevScores, [exercise]: score }));
  };

  const nextStep = () => {
    if (showCompletionModal) return;

    const currentExercise = `ex${currentStep}`;
    const requiredScore = currentStep === 1 ? 3 : 4;

    if (scores[currentExercise] >= requiredScore) {
      const nextLvl = `A${currentStep + 1}`;
      setUnlockedLevels((prev) => ({ ...prev, [nextLvl]: true }));
      setNextLevel(currentStep === 1 ? 'A2' : nextLvl);
      setShowCompletionModal(true);
    }
  };

  const closeCompletionModal = () => {
    setFade('fade-out');
    setTimeout(() => {
      setShowCompletionModal(false);
      setCurrentStep((prev) => prev + 1);
      setFade('fade-in');
      setScores((prevScores) => ({ ...prevScores, [`ex${currentStep + 1}`]: 0 }));
    }, 500);
  };

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center text-[#65A662]">English Language Proficiency Test</h1>

      <div className="w-full max-w-4xl bg-gray-300 rounded-full h-4 mb-10 shadow-lg overflow-hidden relative">
        <div
          className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] h-full rounded-full shadow-lg transition-all duration-700 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <Levels currentStep={currentStep} unlockedLevels={unlockedLevels} scores={scores} />

      <div className={`transition-container ${fade}`}>
        {currentStep === 1 && <Ex1 onScoreUpdate={(score) => handleScoreUpdate('ex1', score)} nextStep={nextStep} />}
        {currentStep === 2 && unlockedLevels.A2 && <Ex2 onScoreUpdate={(score) => handleScoreUpdate('ex2', score)} nextStep={nextStep} />}
        {currentStep === 3 && unlockedLevels.B1 && <Ex3 onScoreUpdate={(score) => handleScoreUpdate('ex3', score)} nextStep={nextStep} />}
        {currentStep === 4 && unlockedLevels.B2 && <Ex4 onScoreUpdate={(score) => handleScoreUpdate('ex4', score)} nextStep={nextStep} />}
        {currentStep === 5 && unlockedLevels.C1 && <Ex5 onScoreUpdate={(score) => handleScoreUpdate('ex5', score)} nextStep={nextStep} />}
      </div>

      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center animated-modal">
            <h2 className="text-4xl font-bold text-green-500 mb-6">Congratulations!</h2>
            <p className="text-lg text-gray-700 mb-4">
              You have completed Level {currentStep === 1 ? 'A1' : `A${currentStep}`}.
            </p>
            <p className="text-lg text-gray-700 mb-4">Level {nextLevel} is now unlocked!</p>
            <button
              onClick={closeCompletionModal}
              className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transform transition-transform duration-300 hover:scale-105"
            >
              Proceed to Next Level
            </button>
          </div>
        </div>
      )}

      <style>{`
        .card-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 600px;
          margin: auto;
        }

        .animated-modal {
          animation: modalFadeIn 0.7s ease-out;
        }

        @keyframes modalFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Fade In and Fade Out keyframes for exercise transitions */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        /* Apply fade animation based on the transition state */
        .fade-in {
          animation: fadeIn 0.5s forwards;
        }

        .fade-out {
          animation: fadeOut 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default LearnEnglishEx;
