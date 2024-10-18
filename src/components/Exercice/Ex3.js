import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex3 = ({ onScoreUpdate, nextStep }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  // Array of B1 level questions
  const questions = [
    { question: 'What is the correct past form of "go"?', options: [{ text: 'Went', correct: true }, { text: 'Gone', correct: false }] },
    { question: 'Which sentence uses the correct comparative form?', options: [{ text: 'She is more taller than me.', correct: false }, { text: 'She is taller than me.', correct: true }] },
    { question: 'Choose the sentence in the passive voice:', options: [{ text: 'The homework was completed by the student.', correct: true }, { text: 'The student completed the homework.', correct: false }] },
    { question: 'What is the synonym of "complicated"?', options: [{ text: 'Simple', correct: false }, { text: 'Complex', correct: true }] },
    { question: 'Which is a modal verb?', options: [{ text: 'Can', correct: true }, { text: 'Run', correct: false }] },
    { question: 'Complete the sentence: "If I had known, I _______ have helped you."', options: [{ text: 'will', correct: false }, { text: 'would', correct: true }] },
    { question: 'What is the opposite of "frequently"?', options: [{ text: 'Rarely', correct: true }, { text: 'Often', correct: false }] },
    { question: 'Which one is correct?', options: [{ text: 'The book what you gave me was interesting.', correct: false }, { text: 'The book that you gave me was interesting.', correct: true }] },
    { question: 'What is a synonym for "attempt"?', options: [{ text: 'Try', correct: true }, { text: 'Fail', correct: false }] },
    { question: 'Choose the correct question form:', options: [{ text: 'Have you ever been to London?', correct: true }, { text: 'You have been to London ever?', correct: false }] },
  ];

  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null) return;

    const isCorrect = questions[currentQuestionIndex].options[selectedOptionIndex].correct;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSelectedOptionIndex(null);
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsSubmitting(false);
    }, 500);
  };

  // Handle passing logic (4 correct answers for B1)
  useEffect(() => {
    if (correctCount >= 4 && !hasPassed) {
      setHasPassed(true);
      onScoreUpdate(4); // B1 level requires 4 correct answers to pass
    }
  }, [correctCount, hasPassed, onScoreUpdate]);

  // Render logic
  if (hasPassed) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-[#65A662] mb-6">Congratulations!</h2>
        <p className="text-xl text-gray-800 mb-4">
          You have completed Level B1.<br /> Level B2 is now unlocked!
        </p>
        <button
          onClick={nextStep}
          className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
        >
          Proceed to Level B2
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level B1: English Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the following questions to proceed to the next level.
      </p>

      <div className="mb-8">
        <p className="text-xl text-gray-800 mb-6 text-center font-medium">
          {questions[currentQuestionIndex].question}
        </p>
        {questions[currentQuestionIndex].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            className={`border-2 p-3 rounded-lg mb-4 block w-full text-left transition-all duration-300 ${
              selectedOptionIndex === idx
                ? 'bg-green-100 border-green-500'
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedOptionIndex === null || isSubmitting}
        className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
      >
        <FiCheckCircle className="mr-2" />
        Submit Answer
      </button>
    </div>
  );
};

export default Ex3;
