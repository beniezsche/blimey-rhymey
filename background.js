// background script

const endpoint = 'https://93a9-34-70-85-64.ngrok-free.app/generate'

chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {

    fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
  
        body: JSON.stringify(message)
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res)
        senderResponse(res);
      })
    return true
});

