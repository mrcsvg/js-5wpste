// Load the FontAwesome stylesheet dynamically
const fontAwesomeStyle = document.createElement('link');
fontAwesomeStyle.rel = 'stylesheet';
fontAwesomeStyle.href =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
fontAwesomeStyle.integrity =
  'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm';
fontAwesomeStyle.crossOrigin = 'anonymous';
document.head.appendChild(fontAwesomeStyle);

// Create the floating chat button
const chatButton = document.createElement('div');
chatButton.id = 'chatbot-button';
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.backgroundColor = '#007bff';
chatButton.style.color = '#fff';
chatButton.style.padding = '10px 20px';
chatButton.style.borderRadius = '20px';
chatButton.style.cursor = 'pointer';
chatButton.style.display = 'flex';
chatButton.style.alignItems = 'center';
chatButton.style.justifyContent = 'center';
chatButton.innerHTML = '<i class="fas fa-comments"></i> Chat with us'; // Chat icon

// Add the button to the page
document.body.appendChild(chatButton);

// Create a function to send a message
function sendMessage(messageText, isUser = false) {
  const messageContainer = document.createElement('div');
  messageContainer.className = isUser ? 'user-message' : 'bot-message';
  messageContainer.innerText = messageText;

  const chatContent = document.getElementById('chatbot-content');
  chatContent.appendChild(messageContainer);

  // Scroll to the latest message
  chatContent.scrollTop = chatContent.scrollHeight;
}

// Create a function to handle user messages
function handleUserMessage(userMessage) {
  sendMessage(userMessage, true);

  // Simulate bot response after a brief delay
  setTimeout(() => {
    const botResponse = 'You said: ' + userMessage; // Echo back the user's message
    sendMessage(botResponse);
  }, 500); // Simulating a brief response delay
}

// Create the chat window UI
function createChatWindow() {
  const chatWindow = document.createElement('div');
  chatWindow.id = 'chatbot-window';
  chatWindow.style.position = 'fixed';
  chatWindow.style.bottom = '50px';
  chatWindow.style.right = '20px';
  chatWindow.style.width = '300px';
  chatWindow.style.borderRadius = '1.5rem';
  chatWindow.style.height = '400px'; // Fixed height
  chatWindow.style.backgroundColor = '#fff';
  chatWindow.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
  document.body.appendChild(chatWindow);

  // Add the close button to the chat header container
  const chatHeader = document.createElement('div'); // Chat header
  chatHeader.className = 'chat-header';
  chatHeader.innerHTML = 'Chat with Bot'; // Change this to your chatbot's title
  chatWindow.appendChild(chatHeader);

  const closeButton = document.createElement('div');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '<i class="fas fa-times">X</i>'; // Close icon
  chatHeader.appendChild(closeButton);

  closeButton.addEventListener('click', () => {
    document.body.removeChild(chatWindow);
  });

  const chatContent = document.createElement('div');
  chatContent.id = 'chatbot-content';
  chatContent.style.height = 'calc(100% - 60px)'; // Deduct header height
  chatContent.style.overflowY = 'auto';
  chatWindow.appendChild(chatContent);

  const inputContainer = document.createElement('div');
  inputContainer.style.backgroundColor = '#525252'; // Background color
  inputContainer.style.display = 'flex';
  inputContainer.style.alignItems = 'center'; // Center elements vertically
  inputContainer.style.padding = '10px'; // Add padding
  chatWindow.appendChild(inputContainer);

  const messageInput = document.createElement('input');
  messageInput.type = 'text';
  messageInput.placeholder = 'Type your message...';
  messageInput.style.flex = '1'; // Take remaining space
  messageInput.style.marginRight = '10px'; // Add margin between input and button
  inputContainer.appendChild(messageInput);

  const sendButton = document.createElement('button');
  sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>'; // Airplane icon
  sendButton.style.padding = '5px 10px';
  sendButton.style.border = 'none';
  sendButton.style.backgroundColor = '#007bff';
  sendButton.style.color = '#fff';
  sendButton.style.borderRadius = '5px';
  sendButton.style.cursor = 'pointer';
  inputContainer.appendChild(sendButton);

  sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value;
    if (userMessage.trim() !== '') {
      handleUserMessage(userMessage);
      messageInput.value = '';
    }
  });
}

// Add the styles (embedded)
const styles = `
  /* Style for user messages */
  /* ... (previous styles) */

  /* Style for bot messages */
  /* ... (previous styles) */

  /* Additional styles */
  #chatbot-window {
    font-family: Arial, sans-serif;
  }

  .chat-header {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    text-align: center;
    border-radius: 1.5rem 1.5rem 0 0;    
  }

  #chatbot-content {
    background-color: #111; /* Text area background color */
    padding: 10px;
    overflow-y: auto;
  }

  /* ... (rest of the styles) */
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

// Open the chat window when the button is clicked
chatButton.addEventListener('click', createChatWindow);
