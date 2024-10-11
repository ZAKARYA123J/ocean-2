class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      console.log("User message:", message); // Debugging log
  
      // Trigger question flow when 'help' or 'questions' is typed
      if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("questions")) {
        console.log("Triggering question flow"); // Debugging log
        this.actionProvider.showQuestions(); 
      } else {
        console.log("Message not recognized, no action triggered"); // Debugging log
      }
    }
  }
  
  export default MessageParser;
  