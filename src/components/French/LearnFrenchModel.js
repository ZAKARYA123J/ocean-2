import React, { useState, useEffect } from 'react';
import { FaTimes, FaFileAlt, FaRedo } from 'react-icons/fa';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [timerCount, setTimerCount] = useState(0);
  const [showReopenButton, setShowReopenButton] = useState(false);

  useEffect(() => {
    const timers = [];
    if (!hasOpenedOnce) {
      timers.push(
        setTimeout(() => {
          openModal();
        }, 10000)
      );
    }

    if (timerCount === 1 && !isOpen) {
      timers.push(
        setTimeout(() => {
          openModal();
        }, 90000)
      );
    }

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [timerCount, isOpen, hasOpenedOnce]);

  const openModal = () => {
    setIsOpen(true);
    setHasOpenedOnce(true);
    setIsClosing(false);
    setShowReopenButton(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setTimerCount(prevCount => prevCount + 1);
      setShowReopenButton(true);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out ${
            isClosing ? 'modalFadeOut' : 'modalFadeIn'
          }`}
          style={{
            animation: `${isClosing ? 'modalCloseAnimation 0.5s ease-out forwards' : 'modalOpenAnimation 0.6s ease-out forwards'}`,
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 max-w-lg w-full relative transition-transform duration-500 ease-in-out transform"
            style={{
              animation: `${isClosing ? 'scaleDownClose 0.5s ease-out forwards' : 'scaleUpOpen 0.8s ease-out forwards'}`,
            }}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 focus:outline-none"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaFileAlt className="text-6xl text-blue-600 animate-bounce" />
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your French Level</h2>
              <p className="text-gray-600 mb-6">
                Take an interactive test to evaluate your French proficiency. Find out your current level, from A1 to C2, and receive an accurate assessment of your skills. Are you ready to discover your French level?
              </p>

              <a
                href="/exercise"
                className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Start the French Level Test
              </a>
              <p className="mt-4 text-sm text-gray-500">Evaluate your skills and receive a detailed level assessment!</p>
            </div>
          </div>
        </div>
      )}

      {/* Reopen Button (only shows when modal is closed) */}
      {showReopenButton && (
        <button
          className="fixed bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition-transform duration-300 ease-in-out z-50"
          onClick={handleButtonClick}
          aria-label="Reopen modal"
          style={{
            bottom: '20px',
            right: '20px',
            animation: 'bounce 2s infinite',
          }}
        >
          <FaRedo className="text-2xl" />
          {/* Static Tooltip */}
          <div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-red-500 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-md flex items-center animate-tooltipFadeIn"
            style={{
              maxWidth: '200px',
              textAlign: 'center',
              whiteSpace: 'normal',
              zIndex: 50,
            }}
          >
            <svg
              className="absolute text-red-500 -bottom-1 left-1/2 transform -translate-x-1/2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,0 24,24 0,24" />
            </svg>
            Click to open the French Exercise
          </div>
        </button>
      )}

      <style>{`
        @keyframes modalOpenAnimation {
          from { opacity: 0; transform: scale(0.8) translateY(-50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes modalCloseAnimation {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.8) translateY(-50px); }
        }
        @keyframes scaleUpOpen {
          0% { transform: scale(0.7) rotate(-3deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes scaleDownClose {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes tooltipFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-tooltipFadeIn {
          animation: tooltipFadeIn 0.4s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default PopupModal;
