import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex2 = ({ onScoreUpdate, nextStep }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Array of 10 questions for A2 level
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
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null) return; // Don't proceed without selecting an option

    const isCorrect = questions[currentQuestionIndex].options[selectedOptionIndex].correct;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSelectedOptionIndex(null);
      setCurrentQuestionIndex((prev) => prev + 1); // Move to the next question
      setIsSubmitting(false); // Allow submission again
    }, 500);
  };

  // Pass to the next level if 4 correct answers are reached
  useEffect(() => {
    if (correctCount >= 4) {
      onScoreUpdate(4); // User passed with 4 correct answers
      nextStep(); // Move to the next level
    }

    if (incorrectCount >= 4) {
      alert('You need more correct answers. Please try again.');
      setIncorrectCount(0); // Reset incorrect answers
    }
  }, [correctCount, incorrectCount, onScoreUpdate, nextStep]);

  // If user already passed with 4 correct answers, don't show more questions
  if (correctCount >= 4) {
    return <div>You passed the A2 level! Proceeding to the next level...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <div>All questions completed</div>;
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level A2: English Proficiency Quiz
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
        disabled={selectedOptionIndex === null || isSubmitting} // Disable button until option is selected
        className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
      >
        <FiCheckCircle className="mr-2" />
        Submit Answer
      </button>
    </div>
  );
};

export default Ex2;
