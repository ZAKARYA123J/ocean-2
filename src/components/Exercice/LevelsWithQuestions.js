import React, { useState } from 'react';

const LevelsWithQuestions = ({ levelQuestions, onScoreUpdate, nextStep }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (levelQuestions[currentQuestion].options[selectedOptionIndex].correct) {
      setScore((prev) => prev + 5);
    }

    setTimeout(() => {
      if (currentQuestion === levelQuestions.length - 1) {
        onScoreUpdate(score); // Send final score to parent
        nextStep(); // Move to the next level
      } else {
        setCurrentQuestion((prev) => prev + 1); // Go to next question
        setSelectedOptionIndex(null); // Reset selection
      }
    }, 200); // Slight delay to ensure score update happens before next step
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Level Questions</h2>
      <p>{levelQuestions[currentQuestion].question}</p>
      {levelQuestions[currentQuestion].options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleOptionSelect(idx)}
          className={`border p-2 rounded-lg mb-2 block ${
            selectedOptionIndex === idx ? 'bg-blue-200' : 'bg-gray-200'
          }`}
        >
          {option.text}
        </button>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 rounded-lg"
        disabled={selectedOptionIndex === null} // Disable until an option is selected
      >
        {currentQuestion === levelQuestions.length - 1 ? 'Finish' : 'Next Question'}
      </button>
    </div>
  );
};

export default LevelsWithQuestions;
