// content.js

const constructRequest = (headline) => {
  const requestData = {
    inputs: headline,
    parameters: {
        temperature: 0.50,
        max_tokens: 500,
        top_p:0.95,
        repeat_penalty:1.2, 
        top_k:150,
        echo: false
    }
  }

  return requestData

}

const cleanRhyme = (text) => {
  let splitText = text.split(':')
  return splitText[1]
}

const sendHeadline = (requestData, element) => {

  chrome.runtime.sendMessage(requestData, response => {
    element.innerText = cleanRhyme(response["generated_text"])
  })

}

const replaceText = () => {

    let elements = document.body.querySelectorAll('#topnews h3.hdg3');

    elements.forEach((elem) => {
      sendHeadline(constructRequest(elem.innerText) ,elem)
    });
}

// Call the replaceText function
replaceText();

