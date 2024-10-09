import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex2 = ({ onScoreUpdate, nextStep, prevStep }) => {
  const [score, setScore] = useState(0);
  const [inputValue1, setInputValue1] = useState(''); // Track input value for question 1
  const [inputValue2, setInputValue2] = useState(''); // Track input value for question 2
  const [isInputLocked, setIsInputLocked] = useState(false); // Lock inputs after submission
  const [disableHover, setDisableHover] = useState(false); // Track hover state

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const score1 = inputValue1.toLowerCase() === 'quickly' ? 5 : 0;
    const score2 = inputValue2.toLowerCase() === 'carefully' ? 5 : 0;
    const finalScore = score1 + score2;

    setScore(finalScore); // Set the total score
    onScoreUpdate('ex2', finalScore); // Send score to parent
    setIsInputLocked(true); // Lock inputs after submission
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

  return (
    <div
      ref={pageRef}
      className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-2xl max-w-2xl mx-auto mt-16"
    >
      <h2 className="text-3xl font-bold text-[#65A662] mb-6 text-center">
        Exercise 2: <span className="text-blue-500">Vocabulary</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Question 1 */}
        <div>
          <p className="text-lg text-gray-600 mb-4 text-center">
            Fill in the blank with the correct word:
          </p>
          <p className="text-lg text-gray-800 mb-6 text-center font-semibold">
            He __________ (quickly) ran to the store.
          </p>
          <input
            type="text"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            disabled={isInputLocked} // Lock input after submission
            className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65A662] transition-all duration-300 ${
              isInputLocked ? 'bg-gray-200' : 'bg-white'
            }`}
            placeholder="Enter the word"
          />
        </div>

        {/* Question 2 */}
        <div>
          <p className="text-lg text-gray-600 mb-4 text-center">
            Fill in the blank with the correct word:
          </p>
          <p className="text-lg text-gray-800 mb-6 text-center font-semibold">
            She __________ (carefully) opened the door.
          </p>
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            disabled={isInputLocked} // Lock input after submission
            className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65A662] transition-all duration-300 ${
              isInputLocked ? 'bg-gray-200' : 'bg-white'
            }`}
            placeholder="Enter the word"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          {/* Previous Button */}
          <button
            type="button"
            className={`bg-gray-500 text-white py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ${
              !disableHover ? 'hover:shadow-xl hover:bg-gray-400' : ''
            } focus:outline-none`}
            onClick={prevStep}
          >
            Previous
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-[#65A662] text-white py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ${
              !disableHover ? 'hover:shadow-xl hover:bg-green-600' : ''
            } focus:outline-none`}
            disabled={isInputLocked} // Disable submit if input is locked
          >
            <div className="flex items-center justify-center">
              <FiCheckCircle className="mr-2" />
              Submit & Next
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ex2;
