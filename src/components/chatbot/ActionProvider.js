import questionsData from './questions.json';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Method to display a list of questions from the JSON file
  showQuestions() {
    console.log("Displaying questions from JSON"); // Debugging log

    const questionMessages = questionsData.questions.map((q) => {
      return this.createChatBotMessage(q.question, {
        widget: "options", // Use widget to show clickable options
        options: q.answers.map((answer) => ({
          text: answer,
          handler: () => this.handleAnswer(answer), // Handle each answer
          id: q.id,
        })),
      });
    });

    console.log("Questions generated:", questionMessages); // Debugging log

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, ...questionMessages],
    }));
  }

  // Handle the selected answer and respond
  handleAnswer(selectedAnswer) {
    console.log("Answer selected:", selectedAnswer); // Debugging log

    const followUpMessage = this.createChatBotMessage(`You selected: ${selectedAnswer}`);
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, followUpMessage],
    }));
  }
}

export default ActionProvider;
