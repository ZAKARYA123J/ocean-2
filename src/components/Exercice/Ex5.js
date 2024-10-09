import React, { useState } from 'react';

const Ex5 = ({ onScoreUpdate, prevStep, calculateFinalScore }) => {
  const [score, setScore] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // Lock the state for each question separately
  const [isLocked1, setIsLocked1] = useState(false); // Lock options for Question 1
  const [isLocked2, setIsLocked2] = useState(false); // Lock options for Question 2

  // Handle form submission and pass score back to parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    const score1 = selectedOption1 === 'joyful' ? 5 : 0;
    const score2 = selectedOption2 === 'large' ? 5 : 0;
    const finalScore = score1 + score2;

    setScore(finalScore);
    onScoreUpdate('ex5', finalScore);
    calculateFinalScore();
  };

  // Handle option selection for Question 1
  const handleOptionSelect1 = (option) => {
    if (!isLocked1) {
      setSelectedOption1(option);
      setIsLocked1(true); // Lock Question 1 options after selection
    }
  };

  // Handle option selection for Question 2
  const handleOptionSelect2 = (option) => {
    if (!isLocked2) {
      setSelectedOption2(option);
      setIsLocked2(true); // Lock Question 2 options after selection
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-2xl max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-[#65A662] mb-6 text-center">
        Exercise 5: <span className="text-blue-500">Synonyms/Antonyms</span>
      </h2>

      {/* Question 1 */}
      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-4 text-center">
          Question 1: Choose the correct synonym of "happy":
        </p>

        {/* Option 1 for Question 1 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !isLocked1 ? 'hover:bg-green-50 hover:scale-105' : ''
          } ${selectedOption1 === 'sad' ? 'bg-red-100 border-red-400 shadow-sm' : 'bg-gray-50 border-gray-300'}`}
          onClick={() => handleOptionSelect1('sad')}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym1"
              value="sad"
              checked={selectedOption1 === 'sad'}
              disabled={isLocked1}
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Sad</span>
          </label>
        </div>

        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !isLocked1 ? 'hover:bg-green-50 hover:scale-105' : ''
          } ${selectedOption1 === 'joyful' ? 'bg-green-100 border-green-400 shadow-sm' : 'bg-gray-50 border-gray-300'}`}
          onClick={() => handleOptionSelect1('joyful')}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym1"
              value="joyful"
              checked={selectedOption1 === 'joyful'}
              disabled={isLocked1}
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Joyful</span>
          </label>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-600 mb-4 text-center">
          Question 2: Choose the correct synonym of "big":
        </p>
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !isLocked2 ? 'hover:bg-green-50 hover:scale-105' : ''
          } ${selectedOption2 === 'small' ? 'bg-red-100 border-red-400 shadow-sm' : 'bg-gray-50 border-gray-300'}`}
          onClick={() => handleOptionSelect2('small')}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym2"
              value="small"
              checked={selectedOption2 === 'small'}
              disabled={isLocked2}
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Small</span>
          </label>
        </div>

        {/* Option 2 for Question 2 */}
        <div
          className={`p-4 border-2 rounded-lg cursor-pointer transition-transform ${
            !isLocked2 ? 'hover:bg-green-50 hover:scale-105' : ''
          } ${selectedOption2 === 'large' ? 'bg-green-100 border-green-400 shadow-sm' : 'bg-gray-50 border-gray-300'}`}
          onClick={() => handleOptionSelect2('large')}
        >
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="synonym2"
              value="large"
              checked={selectedOption2 === 'large'}
              disabled={isLocked2}
              className="form-radio h-5 w-5 text-[#65A662]"
            />
            <span className="text-gray-700">Large</span>
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:bg-gray-600 hover:scale-105 focus:outline-none"
            onClick={prevStep}
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-[#65A662] text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none"
            disabled={!selectedOption1 || !selectedOption2}
          >
            Submit & Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ex5;
