import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Ex4 = ({ onScoreUpdate, nextStep }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  // Array of B2 level questions
  const questions = [
    { question: 'What is the correct usage of "nevertheless"?', options: [{ text: 'The weather was bad; nevertheless, we went to the park.', correct: true }, { text: 'The weather was bad, nevertheless we went to the park.', correct: false }] },
    { question: 'Choose the correct form of reported speech:', options: [{ text: 'She said she will come.', correct: false }, { text: 'She said she would come.', correct: true }] },
    { question: 'Which sentence uses a future perfect tense?', options: [{ text: 'I will have finished my work by 6 PM.', correct: true }, { text: 'I will finish my work by 6 PM.', correct: false }] },
    { question: 'What is the synonym of "alleviate"?', options: [{ text: 'Aggravate', correct: false }, { text: 'Relieve', correct: true }] },
    { question: 'Which one is a correct conditional sentence?', options: [{ text: 'If I would have seen him, I would have told you.', correct: false }, { text: 'If I had seen him, I would have told you.', correct: true }] },
    { question: 'Complete the sentence: "Hardly _______ the train left the station when the passengers arrived."', options: [{ text: 'did', correct: true }, { text: 'has', correct: false }] },
    { question: 'What is the opposite of "mandatory"?', options: [{ text: 'Optional', correct: true }, { text: 'Necessary', correct: false }] },
    { question: 'Which one is grammatically correct?', options: [{ text: 'It’s important that she goes to the meeting.', correct: false }, { text: 'It’s important that she go to the meeting.', correct: true }] },
    { question: 'What is a synonym for "resilient"?', options: [{ text: 'Tough', correct: true }, { text: 'Fragile', correct: false }] },
    { question: 'Choose the correct question tag:', options: [{ text: 'You’ve finished, haven’t you?', correct: true }, { text: 'You’ve finished, didn’t you?', correct: false }] },
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

  // Handle passing logic (4 correct answers for B2)
  useEffect(() => {
    if (correctCount >= 4 && !hasPassed) {
      setHasPassed(true);
      onScoreUpdate(4); // B2 level requires 4 correct answers to pass
    }
  }, [correctCount, hasPassed, onScoreUpdate]);

  // Render logic
  if (hasPassed) {
    return (
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-[#65A662] mb-6">Congratulations!</h2>
        <p className="text-xl text-gray-800 mb-4">
          You have completed Level B2.<br /> Level C1 is now unlocked!
        </p>
        <button
          onClick={nextStep}
          className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none"
        >
          Proceed to Level C1
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level B2: English Proficiency Quiz
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

export default Ex4;
