import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for modern look
import Confetti from 'react-confetti'; // Confetti effect for celebration

const Ex5Final = ({ onScoreUpdate, prevStep, calculateFinalScore, finalScore }) => {
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [isOptionLocked, setIsOptionLocked] = useState(false); // Lock options after submission
  const [disableHover, setDisableHover] = useState(false); // Track hover state
  const [showConfetti, setShowConfetti] = useState(false); // Trigger confetti effect

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onScoreUpdate('ex5', score); // Send score to parent
    setIsOptionLocked(true); // Lock the selection after submission
    calculateFinalScore(); // Trigger final score calculation
    setShowConfetti(true); // Trigger confetti effect
    setTimeout(() => {
      setShowConfetti(false); // Hide confetti after some time
    }, 5000); // Show confetti for 5 seconds
  };

  // Add scroll event listener to detect scrolling and disable hover effects while scrolling
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setDisableHover(true); // Disable hover effect during scroll
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDisableHover(false); // Re-enable hover effect after scroll stops
      }, 500); // Re-enable hover 500ms after scrolling stops
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Share the final score via SMS or WhatsApp
  const shareScore = (platform) => {
    const message = `I just completed the English exercises and scored ${finalScore}! 🎉`;
    if (platform === 'sms') {
      window.location.href = `sms:?body=${encodeURIComponent(message)}`;
    } else if (platform === 'whatsapp') {
      window.location.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    }
  };

  return (
    <div ref={pageRef} className="p-6 bg-white rounded-lg shadow-2xl max-w-lg mx-auto mt-10 relative">
      {/* Confetti Effect */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Exercise 5: <span className="text-[#65A662]">Synonyms/Antonyms</span>
      </h2>
      <p className="text-lg text-gray-600 mb-4 text-center">Choose the correct synonym of "happy":</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Option 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'sad'
              ? 'bg-red-100 border-red-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption('sad');
              setScore(0);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym"
              value="sad"
              checked={selectedOption === 'sad'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Sad</span>
          </label>
        </div>

        {/* Option 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'joyful'
              ? 'bg-green-100 border-green-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption('joyful');
              setScore(10);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym"
              value="joyful"
              checked={selectedOption === 'joyful'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Joyful</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          {/* Previous Button */}
          <button
            type="button"
            className={`bg-gray-500 text-white py-2 px-4 rounded-full shadow-lg transition-transform ${
              !disableHover ? 'hover:scale-110 hover:bg-gray-400' : ''
            } focus:outline-none`}
            onClick={prevStep}
          >
            Previous
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-[#65A662] text-white py-2 px-6 rounded-full shadow-lg transition-transform ${
              !disableHover ? 'hover:scale-110 hover:bg-green-500' : ''
            } focus:outline-none`}
            disabled={isOptionLocked} // Disable submit after submission
          >
            <div className="flex items-center justify-center">
              <FiCheckCircle className="mr-2" />
              Submit & Finish
            </div>
          </button>
        </div>
      </form>

      {/* Congratulations Message */}
      {isOptionLocked && (
        <div className="mt-10 text-center">
          <h2 className="text-4xl font-bold text-[#65A662] animate-bounce">
            Congratulations!
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            You have successfully completed all the exercises! 🎉
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Your final score: <strong>{finalScore}</strong>
          </p>

          {/* Share Your Score */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Share your score:</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => shareScore('sms')}
                className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
              >
                Share via SMS
              </button>
              <button
                onClick={() => shareScore('whatsapp')}
                className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
              >
                Share via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ex5Final;
