import React, { useState } from 'react';

const ChatBot = () => {
  const [conversation, setConversation] = useState([
    { sender: 'bot', text: 'Hello! Please choose a question.' },
  ]);

  const [showQuestions, setShowQuestions] = useState(true);
  
  const questions = [
    'What is your name?',
    'What is your favorite color?',
    'What do you do?'
  ];

  const secondSetOfQuestions = [
    'Where are you from?',
    'What is your hobby?',
    'Do you like sports?'
  ];

  const [availableQuestions, setAvailableQuestions] = useState(questions);
  
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      // Add user input to the conversation
      setConversation([...conversation, { sender: 'user', text: userInput }]);

      // Bot's first response
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: 'bot', text: 'Hello! Please choose one of the following questions:' }
      ]);

      setShowQuestions(true);
      setUserInput('');
    }
  };

  const handleQuestionClick = (question) => {
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: 'user', text: question }
    ]);

    // Provide an answer based on the question
    let botAnswer = '';
    if (question === 'What is your name?') botAnswer = 'My name is ChatBot.';
    else if (question === 'What is your favorite color?') botAnswer = 'I like blue.';
    else if (question === 'What do you do?') botAnswer = 'I assist users like you!';

    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: 'bot', text: botAnswer },
      { sender: 'bot', text: 'Here’s another set of questions for you:' }
    ]);

    // Show another set of questions after the first one
    setAvailableQuestions(secondSetOfQuestions);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {showQuestions && (
        <div className="questions-container">
          {availableQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="question-button"
            >
              {question}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleUserInput}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type something..."
          className="input-box"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
