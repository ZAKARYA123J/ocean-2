import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for modern look

const Ex4 = ({ onScoreUpdate, nextStep, prevStep }) => {
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [isOptionLocked, setIsOptionLocked] = useState(false); // Lock options after submission
  const [disableHover, setDisableHover] = useState(false); // Track hover state

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onScoreUpdate('ex4', score); // Send score to parent
    setIsOptionLocked(true); // Lock the selection after submission
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
        Exercise 4: <span className="text-[#65A662]">Verb Tenses</span>
      </h2>
      <p className="text-lg text-gray-600 mb-4 text-center">Choose the correct verb tense:</p>
      <p className="text-lg text-gray-700 mb-6 text-center">
        They __________ (to go) to the park every Saturday.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Option 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'past'
              ? 'bg-red-100 border-red-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption('past');
              setScore(0);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense"
              value="past"
              checked={selectedOption === 'past'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">went</span>
          </label>
        </div>

        {/* Option 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption === 'present'
              ? 'bg-green-100 border-green-400 shadow-sm'
              : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption('present');
              setScore(10);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense"
              value="present"
              checked={selectedOption === 'present'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">go</span>
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
              Submit & Next
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ex4;
