import React, { useEffect, useState } from 'react';
import { FiLock, FiUnlock } from 'react-icons/fi';

const Levels = ({ currentStep, scores }) => {
  const [unlockedLevels, setUnlockedLevels] = useState({
    A1: true,  // A1 is always unlocked
    A2: false,
    B1: false,
    B2: false,
    C1: false,
  });

  // Dynamically check and unlock levels based on scores
  useEffect(() => {
    const newUnlockedLevels = {
      A1: true,
      A2: scores.ex1 >= 3,  // Unlock A2 if score for A1 is 3 or more
      B1: scores.ex2 >= 3,  // Unlock B1 if score for A2 is 3 or more
      B2: scores.ex3 >= 3,  // Unlock B2 if score for B1 is 3 or more
      C1: scores.ex4 >= 3,  // Unlock C1 if score for B2 is 3 or more
    };

    // Only update if the unlock state changes
    if (JSON.stringify(newUnlockedLevels) !== JSON.stringify(unlockedLevels)) {
      setUnlockedLevels(newUnlockedLevels);
    }
  }, [scores, unlockedLevels]);

  const getUnlockEffect = (level) => {
    return unlockedLevels[level] ? (
      <div className="chest-open">
        <div className="chest-lid"></div>
        <div className="chest-base">
          <FiUnlock className="icon-unlock" />
        </div>
      </div>
    ) : (
      <div className="chest-locked">
        <FiLock className="icon-lock" />
      </div>
    );
  };

  return (
    <div>
      {/* Include styles directly in the component */}
      <style>{`
        /* Chest animation */
        .chest-locked {
          position: relative;
          width: 60px;
          height: 60px;
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.6;
          transform: scale(0.9);
        }

        .chest-open {
          position: relative;
          width: 60px;
          height: 60px;
          transform: scale(1.2);
          animation: chestUnlockEffect 1s ease-in-out forwards;
          opacity: 1;
        }

        .chest-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background-color: #FFD700;
          transform-origin: bottom center;
          transform: rotateX(0deg);
          animation: lidOpening 1s ease forwards;
        }

        .chest-base {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60%;
          // background-color: #8B4513;
        }

        /* Unlock icon */
        .icon-lock, .icon-unlock {
          font-size: 40px;
          display: block;
          margin: 0 auto;
        }

        .icon-lock {
          color: #FF4500;
        }

        .icon-unlock {
          color: #32CD32;
          opacity: 0;
          animation: unlockAppear 0.6s 0.5s forwards;
        }

        /* Chest opening keyframe */
        @keyframes lidOpening {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(90deg);
          }
        }

        /* Chest unlock effect */
        @keyframes chestUnlockEffect {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(-10deg);
          }
          100% {
            transform: scale(1.2) rotate(0deg);
          }
        }

        /* Unlock icon appearing */
        @keyframes unlockAppear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Hover scaling effect for unlocked levels */
        .level-container.unlocked:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        /* Locked levels are dimmed and unclickable */
        .level-container.locked {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>

      <div className="flex flex-wrap justify-center space-x-6 mb-10">
        {/* A1 Level */}
        <div className={`level-container ${unlockedLevels.A1 ? 'unlocked' : 'locked'} p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">A1</h3>
          {getUnlockEffect('A1')}
          <p className="mt-2 text-gray-600 font-medium">Score: {scores.ex1 || 0}/20</p>
        </div>

        {/* A2 Level */}
        <div className={`level-container ${unlockedLevels.A2 ? 'unlocked' : 'locked'} p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">A2</h3>
          {getUnlockEffect('A2')}
          <p className="mt-2 text-gray-600 font-medium">Score: {scores.ex2 || 0}/20</p>
        </div>

        {/* B1 Level */}
        <div className={`level-container ${unlockedLevels.B1 ? 'unlocked' : 'locked'} p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">B1</h3>
          {getUnlockEffect('B1')}
          <p className="mt-2 text-gray-600 font-medium">Score: {scores.ex3 || 0}/20</p>
        </div>

        {/* B2 Level */}
        <div className={`level-container ${unlockedLevels.B2 ? 'unlocked' : 'locked'} p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">B2</h3>
          {getUnlockEffect('B2')}
          <p className="mt-2 text-gray-600 font-medium">Score: {scores.ex4 || 0}/20</p>
        </div>

        {/* C1 Level */}
        <div className={`level-container ${unlockedLevels.C1 ? 'unlocked' : 'locked'} p-6 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">C1</h3>
          {getUnlockEffect('C1')}
          <p className="mt-2 text-gray-600 font-medium">Score: {scores.ex5 || 0}/20</p>
        </div>
      </div>
    </div>
  );
};

export default Levels;
