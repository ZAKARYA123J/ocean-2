import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for modern look

const Ex3 = ({ onScoreUpdate, nextStep, prevStep }) => {
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState(''); // Track the input value
  const [isInputLocked, setIsInputLocked] = useState(false); // Lock input after submission
  const [disableHover, setDisableHover] = useState(false); // Track hover state

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalScore = inputValue.toLowerCase() === 'east' ? 10 : 0; // Correct answer is "east"
    setScore(finalScore); // Set score based on input
    onScoreUpdate('ex3', finalScore); // Send score to parent
    setIsInputLocked(true); // Lock input after submission
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
    <div ref={pageRef} className="p-6 bg-white rounded-lg shadow-2xl max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Exercise 3: <span className="text-blue-500">Reading Comprehension</span>
      </h2>
      <p className="text-lg text-gray-600 mb-4 text-center">
        Read the short passage and answer the question:
      </p>

      {/* Passage */}
      <p className="text-lg text-gray-700 mb-6 text-center">
        <strong>Passage:</strong> The sun rises in the east and sets in the west. It is one of the most important sources of
        energy for life on Earth.
      </p>

      {/* Question */}
      <p className="text-lg text-gray-700 mb-6 text-center">Question: Where does the sun rise?</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isInputLocked} // Lock input after submission
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isInputLocked ? 'bg-gray-200' : 'bg-white'
          }`}
          placeholder="Enter your answer"
        />

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
            className={`bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg transition-transform ${
              !disableHover ? 'hover:scale-110 hover:bg-blue-400' : ''
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

export default Ex3;
