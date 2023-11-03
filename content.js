// content.js
// Define the text you want to replace and its replacement
const textToReplace = "The Times Of India";
const replacementText = "Replaced Text";

const OPEN_AI_API_KEY = "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";

const endpoint = 'https://api.openai.com/v1/chat/completions';

// Function to replace text
function replaceText() {

    //   // Example: Wait for DOMContentLoaded
    // document.addEventListener("DOMContentLoaded", function () {
    //   // Your code here

    // });

    let elements = document.body.querySelectorAll('#topnews h3.hdg3'); //h3.hdg3');

    elements.forEach((elem) => {
      // console.log(elem);

      if(elem.nodeType === Node.TEXT_NODE) {
        console.log("text");
      }

      let words = elem.innerText.split(' ');
      let wordSize = words.length;

      console.log(words[wordSize - 1]);

      // elem.innerText = elem.innerText + " and your girlfriend is a whore."
    });

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.'
        },
        {
          role: 'user',
          content: 'Compose a poem that explains the concept of recursion in programming.'
        }
      ]
    };
    
    // fetch(endpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${OPEN_AI_API_KEY}`
    //   },
    //   body: JSON.stringify(requestData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle the API response data here
    //   console.log(data);
    // })
    // .catch(error => {
    //   // Handle errors
    //   console.error(error);
    // });

}

// Call the replaceText function
replaceText();

