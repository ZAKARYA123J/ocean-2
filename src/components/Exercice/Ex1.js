import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for modern look

const Ex1 = ({ onScoreUpdate, nextStep }) => {
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [disableHover, setDisableHover] = useState(false); // Track hover state
  const [isOptionLocked, setIsOptionLocked] = useState(false); // Lock option after selection

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onScoreUpdate('ex1', score); // Send score to parent
    nextStep(); // Go to next exercise
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

  // Handle option selection and lock it
  const handleOptionSelect = (option, scoreValue) => {
    if (!isOptionLocked) {
      setSelectedOption(option); // Set selected option
      setScore(scoreValue); // Update score
      setIsOptionLocked(true); // Lock the selection
    }
  };

  return (
    <div ref={pageRef} className="p-6 bg-white rounded-lg shadow-2xl max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Exercise 1: <span className="text-blue-500">Grammar</span>
      </h2>
      <p className="text-lg text-gray-600 mb-4 text-center">Choose the correct sentence:</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Option 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'wrong'
              ? 'bg-red-100 border-red-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => handleOptionSelect('wrong', 0)}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="grammar"
              value="wrong"
              checked={selectedOption === 'wrong'}
              disabled={isOptionLocked} // Disable input after selection
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="text-gray-700">She don't like apples.</span>
          </label>
        </div>

        {/* Option 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'correct'
              ? 'bg-green-100 border-green-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => handleOptionSelect('correct', 10)}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="grammar"
              value="correct"
              checked={selectedOption === 'correct'}
              disabled={isOptionLocked} // Disable input after selection
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="text-gray-700">She doesn't like apples.</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-6 bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform ${
            !disableHover ? 'hover:scale-110 hover:bg-blue-400' : ''
          } focus:outline-none`}
        >
          <div className="flex items-center justify-center">
            <FiCheckCircle className="mr-2" />
            Submit & Next
          </div>
        </button>
      </form>
    </div>
  );
};

export default Ex1;
