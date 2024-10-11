import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

// A simple options widget for clickable answers
const OptionsWidget = (props) => {
  const options = props.options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="option-button"
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{options}</div>;
};

const config = {
  botName: "SupportBot",
  initialMessages: [createChatBotMessage("Hi! How can I help you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5A5A5A",
    },
    chatButton: {
      backgroundColor: "#5A5A5A",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <OptionsWidget {...props} />,
    },
  ],
};

export default config;
