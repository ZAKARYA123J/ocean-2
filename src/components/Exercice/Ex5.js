import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex5 = ({ onScoreUpdate, nextStep }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  // Array of C1 level questions
  const questions = [
    { question: 'Which sentence uses a correct inversion structure?', options: [{ text: 'Never before had I seen such a sight.', correct: true }, { text: 'Never I had seen such a sight before.', correct: false }] },
    { question: 'Choose the correct relative clause form:', options: [{ text: 'The woman, which I met yesterday, was kind.', correct: false }, { text: 'The woman, whom I met yesterday, was kind.', correct: true }] },
    { question: 'What is a synonym for "quintessential"?', options: [{ text: 'Typical', correct: true }, { text: 'Uncommon', correct: false }] },
    { question: 'Complete the sentence with the correct conditional form: "Had I known about the event, I _______ have gone."', options: [{ text: 'would', correct: true }, { text: 'will', correct: false }] },
    { question: 'Which sentence uses a correct idiomatic expression?', options: [{ text: 'I’m in the ball.', correct: false }, { text: 'I’m on the ball.', correct: true }] },
    { question: 'Choose the sentence that uses a cleft structure:', options: [{ text: 'It was John who fixed the car.', correct: true }, { text: 'John was fixing the car.', correct: false }] },
    { question: 'Which sentence contains an advanced phrasal verb?', options: [{ text: 'She came up with a brilliant idea.', correct: true }, { text: 'She made a brilliant idea.', correct: false }] },
    { question: 'Choose the correct word to complete the sentence: "He was ______ to the proposal, showing no interest."', options: [{ text: 'indifferent', correct: true }, { text: 'engaged', correct: false }] },
    { question: 'Which one is an example of an advanced conditional sentence?', options: [{ text: 'If he had studied, he would have passed.', correct: true }, { text: 'If he studied, he will pass.', correct: false }] },
    { question: 'Choose the sentence that correctly uses passive causative:', options: [{ text: 'I had my car repaired yesterday.', correct: true }, { text: 'I repaired my car myself yesterday.', correct: false }] },
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

  // Handle passing logic (4 correct answers for C1)
  useEffect(() => {
    if (correctCount >= 4 && !hasPassed) {
      setHasPassed(true);
      onScoreUpdate(4); // C1 level requires 4 correct answers to pass
    }
  }, [correctCount, hasPassed, onScoreUpdate]);

  // Render logic
  if (hasPassed) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-[#65A662] mb-6">Congratulations!</h2>
        <p className="text-xl text-gray-800 mb-4">
          You have completed Level C1. You’ve reached a high level of proficiency!
        </p>
        <button
          onClick={nextStep}
          className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level C1: English Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the following questions to demonstrate your advanced proficiency.
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

export default Ex5;
