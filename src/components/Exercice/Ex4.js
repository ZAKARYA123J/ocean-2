import React, { useState, useEffect, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Icon for modern look

const Ex4 = ({ onScoreUpdate, nextStep, prevStep }) => {
  const [score, setScore] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(null); // Track selected option for Q1
  const [selectedOption2, setSelectedOption2] = useState(null); // Track selected option for Q2
  const [isOptionLocked, setIsOptionLocked] = useState(false); // Lock options after submission
  const [disableHover, setDisableHover] = useState(false); // Track hover state

  const pageRef = useRef(null); // Reference to the page wrapper

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const score1 = selectedOption1 === 'present' ? 5 : 0;
    const score2 = selectedOption2 === 'future' ? 5 : 0;
    const finalScore = score1 + score2;

    setScore(finalScore); // Set the total score
    onScoreUpdate('ex4', finalScore); // Send score to parent
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
    <div ref={pageRef} className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-2xl max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-[#65A662] mb-6 text-center">
        Exercise 4: <span className="text-blue-500">Verb Tenses</span>
      </h2>

      {/* Question 1 */}
      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-4 text-center">Question 1: Choose the correct verb tense:</p>
        <p className="text-lg text-gray-700 mb-6 text-center">They __________ (to go) to the park every Saturday.</p>

        {/* Option 1 for Question 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption1 === 'past' ? 'bg-red-100 border-red-400 shadow-sm' : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption1('past');
              setScore(0);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense1"
              value="past"
              checked={selectedOption1 === 'past'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">went</span>
          </label>
        </div>

        {/* Option 2 for Question 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption1 === 'present' ? 'bg-green-100 border-green-400 shadow-sm' : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption1('present');
              setScore(5);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense1"
              value="present"
              checked={selectedOption1 === 'present'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">go</span>
          </label>
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-4 text-center">Question 2: Choose the correct verb tense:</p>
        <p className="text-lg text-gray-700 mb-6 text-center">She __________ (to visit) her grandmother next Sunday.</p>

        {/* Option 1 for Question 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption2 === 'past' ? 'bg-red-100 border-red-400 shadow-sm' : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption2('past');
              setScore(0);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense2"
              value="past"
              checked={selectedOption2 === 'past'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">visited</span>
          </label>
        </div>

        {/* Option 2 for Question 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !disableHover ? 'hover:scale-105' : ''
          } ${
            selectedOption2 === 'future' ? 'bg-green-100 border-green-400 shadow-sm' : 'bg-gray-50 border-gray-300'
          }`}
          onClick={() => {
            if (!isOptionLocked) {
              setSelectedOption2('future');
              setScore(5);
            }
          }}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="tense2"
              value="future"
              checked={selectedOption2 === 'future'}
              disabled={isOptionLocked} // Disable after submission
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">will visit</span>
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
