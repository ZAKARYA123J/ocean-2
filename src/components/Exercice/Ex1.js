import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

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
    <div
      ref={pageRef}
      className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-2xl max-w-2xl mx-auto mt-16"
    >
      <h2 className="text-3xl font-bold text-[#65A662] mb-6 text-center">
        Exercise 1: <span className="text-blue-500">Grammar</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Choose the correct sentence to complete the exercise:
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Option 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
            !disableHover ? 'hover:shadow-lg' : ''
          } ${selectedOption === 'wrong' ? 'bg-red-100 border-red-400' : 'bg-white border-gray-300'}`}
          onClick={() => handleOptionSelect('wrong', 0)}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="grammar"
              value="wrong"
              checked={selectedOption === 'wrong'}
              disabled={isOptionLocked}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="text-gray-800">She don't like apples.</span>
          </label>
        </div>

        {/* Option 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
            !disableHover ? 'hover:shadow-lg' : ''
          } ${selectedOption === 'correct' ? 'bg-green-100 border-green-400' : 'bg-white border-gray-300'}`}
          onClick={() => handleOptionSelect('correct', 10)}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="grammar"
              value="correct"
              checked={selectedOption === 'correct'}
              disabled={isOptionLocked}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="text-gray-800">She doesn't like apples.</span>
          </label>
        </div>

        {/* New Option 3 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
            !disableHover ? 'hover:shadow-lg' : ''
          } ${selectedOption === 'neutral' ? 'bg-yellow-100 border-yellow-400' : 'bg-white border-gray-300'}`}
          onClick={() => handleOptionSelect('neutral', 0)}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="grammar"
              value="neutral"
              checked={selectedOption === 'neutral'}
              disabled={isOptionLocked}
              className="form-radio h-5 w-5 text-blue-500"
            />
            <span className="text-gray-800">She isn’t like apples.</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-8 bg-[#65A662] text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 ${
            !disableHover ? 'hover:shadow-xl hover:bg-green-600' : ''
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
