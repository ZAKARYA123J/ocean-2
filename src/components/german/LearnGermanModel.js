import React, { useState, useEffect } from 'react';
import { FaTimes, FaClipboardCheck, FaRedo } from 'react-icons/fa';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [timerCount, setTimerCount] = useState(0);
  const [showReopenButton, setShowReopenButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

  // Open the modal and hide the reopen button
  const openModal = () => {
    setIsOpen(true);
    setHasOpenedOnce(true); // Set the modal as opened
    setIsClosing(false);
    setShowReopenButton(false);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the modal is open
  };

  // Close the modal with an exit animation
  const closeModal = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false); // Reset the closing state after animation ends
      setTimerCount(prevCount => prevCount + 1); // Increment the timer count to allow reopening after some time
      setShowReopenButton(true); // Show the reopen button after closing
      document.body.style.overflow = 'auto'; // Restore scrolling when the modal is closed
    }, 500); // Match the animation duration
  };

  // Handle clicking outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Trigger closing when clicking outside modal
    }
  };

  // Handle button click to reopen the modal
  const handleButtonClick = () => {
    openModal();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isClosing ? 'modalFadeOut' : 'modalFadeIn'
          }`}
          style={{
            animation: `${isClosing ? 'modalCloseAnimation 0.5s ease-out forwards' : 'modalOpenAnimation 0.6s ease-out forwards'}`,
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="bg-gradient-to-r from-white via-gray-50 to-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative transition-transform duration-500 ease-in-out transform"
            style={{
              animation: `${isClosing ? 'scaleDownClose 0.5s ease-out forwards' : 'scaleUpOpen 0.8s ease-out forwards'}`,
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaClipboardCheck className="text-6xl text-[#65A662] animate-bounce" /> {/* English Test Icon */}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your English Level</h2>
              <p className="text-gray-600 mb-6">
                Take an interactive test to evaluate your English proficiency. Find out your current level, from A1 to C2, and get an accurate assessment of your skills. Are you ready to discover your English level?
              </p>
              <a
                href="/LearnGermanEx"
                className="inline-block bg-[#65A662] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                Start the English Level Test
              </a>
              <p className="mt-4 text-sm text-gray-500">Evaluate your skills and receive a detailed level assessment!</p>
            </div>
          </div>
        </div>
      )}

      {/* Reopen Button (only shows when modal is closed) */}
      {showReopenButton && (
        <button
          className="fixed bg-[#65A662] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out z-50"
          onClick={handleButtonClick}
          onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
          onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when mouse leaves
          aria-label="Reopen modal"
          style={{
            bottom: '20px',
            right: '20px',
            animation: 'bounce 2s infinite',
          }}
        >
          <FaRedo className="text-2xl" />
          {showTooltip && (
            <div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-700 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xl flex items-center animate-tooltipFadeIn"
              style={{
                maxWidth: '200px', // Set a maximum width for the tooltip
                textAlign: 'center', // Center-align the text
                whiteSpace: 'normal', // Allow the text to wrap instead of overflowing
                zIndex: 50,
              }}
            >
              <svg
                className="absolute text-green-700 -bottom-1 left-1/2 transform -translate-x-1/2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12,0 24,24 0,24" />
              </svg>
              Click to open the English Exercise
            </div>
          )}
        </button>
      )}

      {/* Embedded keyframe animations */}
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
