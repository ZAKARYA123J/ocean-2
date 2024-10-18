import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex1 = ({ onScoreUpdate, nextStep }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    { question: 'What is the capital of France?', options: [{ text: 'Paris', correct: true }, { text: 'Lyon', correct: false }] },
    { question: 'Which is a synonym for "happy"?', options: [{ text: 'Joyful', correct: true }, { text: 'Sad', correct: false }] },
    { question: 'What is 2 + 2?', options: [{ text: '4', correct: true }, { text: '5', correct: false }] },
    { question: 'Choose the correct sentence:', options: [{ text: 'She like coffee.', correct: false }, { text: 'She likes coffee.', correct: true }] },
    { question: 'What is the opposite of "fast"?', options: [{ text: 'Slow', correct: true }, { text: 'Quick', correct: false }] },
    { question: 'Which one is a verb?', options: [{ text: 'Run', correct: true }, { text: 'Quickly', correct: false }] },
    { question: 'Choose the correct form of the verb: "She ______ the book yesterday."', options: [{ text: 'Readed', correct: false }, { text: 'Read', correct: true }] },
    { question: 'What is the plural of "child"?', options: [{ text: 'Children', correct: true }, { text: 'Childs', correct: false }] },
    { question: 'Which one is a fruit?', options: [{ text: 'Apple', correct: true }, { text: 'Potato', correct: false }] },
    { question: 'Which is the correct question form?', options: [{ text: 'Do you like pizza?', correct: true }, { text: 'You do like pizza?', correct: false }] },
  ];

  const handleOptionSelect = (index) => {
    if (answered) return;
    setSelectedOptionIndex(index);

    const isCorrect = questions[currentQuestionIndex].options[index].correct;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }

    setAnswered(true);
  };

  const handleSubmit = () => {
    setAnswered(false);
    setSelectedOptionIndex(null);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (correctCount >= 3) {
      onScoreUpdate(3);
      nextStep();
    }
  }, [correctCount, onScoreUpdate, nextStep]);

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level A1: English Proficiency Quiz
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
            disabled={answered} // Disable selection after answering
            className={`border-2 p-3 rounded-lg mb-4 block w-full text-left transition-all duration-300 ${
              selectedOptionIndex === idx
                ? option.correct
                  ? 'bg-green-100 border-green-500' // Show green if correct
                  : 'bg-red-100 border-red-500' // Show red if incorrect
                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedOptionIndex === null}
        className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
      >
        <FiCheckCircle className="mr-2" />
        Submit Answer
      </button>
    </div>
  );
};

export default Ex1;
