// content.js
// Define the text you want to replace and its replacement
const textToReplace = "The Times Of India";
const replacementText = "Replaced Text";

// Function to replace text
function replaceText() {
  const elements = document.body.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.nodeType === Node.TEXT_NODE) {
      element.textContent = element.textContent.replace(textToReplace, replacementText);
    }
  }
}

// Call the replaceText function
replaceText();

