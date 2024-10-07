import React, { useState, useEffect } from 'react';
import { FaTimes, FaRunning } from 'react-icons/fa'; // Close icon and Exercise icon

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal state
  const [isClosing, setIsClosing] = useState(false); // To track the closing animation
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false); // Track if modal has been opened once
  const [timerCount, setTimerCount] = useState(0); // Track the number of times modal has opened

  // Handle opening the modal after specified times
  useEffect(() => {
    const timers = [];

    // First opening after 10 seconds
    if (!hasOpenedOnce) {
      timers.push(
        setTimeout(() => {
          setIsOpen(true);
          setHasOpenedOnce(true); // Set the modal as opened
        }, 10000)
      );
    }

    // Second opening after 90 seconds (if the modal has been opened and closed)
    if (timerCount === 1 && !isOpen) {
      timers.push(
        setTimeout(() => {
          setIsOpen(true);
        }, 90000)
      );
    }

    return () => timers.forEach(timer => clearTimeout(timer)); // Cleanup on component unmount
  }, [timerCount, isOpen, hasOpenedOnce]);

  // Close the modal with an exit animation
  const closeModal = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false); // Reset the closing state after animation ends
      setTimerCount(prevCount => prevCount + 1); // Increment the timer count to allow reopening after some time
    }, 500); // Match the animation duration
  };

  // Handle clicking outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Trigger closing when clicking outside modal
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isClosing ? 'fadeOut' : 'fadeIn'
          }`}
          style={{
            animation: `${isClosing ? 'fadeOut 0.5s ease-out forwards' : 'fadeIn 0.6s ease-out forwards'}`
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="bg-gradient-to-r from-white via-gray-50 to-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative transition-transform duration-500 ease-in-out transform"
            style={{
              animation: `${isClosing ? 'scaleDown 0.5s ease-out forwards' : 'scaleUp 0.8s ease-out forwards'}`
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
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <FaRunning className="text-6xl text-[#65A662] animate-bounce" /> {/* Running icon with bounce effect */}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for a Challenge?</h2>
              <p className="text-gray-600 mb-6">
                Get started with a fun and interactive exercise designed to improve your skills. Are you ready to challenge yourself and enjoy learning?
              </p>

              {/* Call-to-Action Button */}
              <a
                href="/exercise"
                className="inline-block bg-[#65A662] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                Start the Exercise
              </a>
              <p className="mt-4 text-sm text-gray-500">Push yourself to new limits and enjoy the journey!</p>
            </div>
          </div>
        </div>
      )}

      {/* Embedded keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.7) rotate(-3deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes scaleDown {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default PopupModal;
