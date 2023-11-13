// background script

const endpoint = 'https://7823-35-227-140-20.ngrok-free.app/generate' //use the ngrok public generated in the colab file

chrome.runtime.onMessage.addListener( function (message, sender, senderResponse) {

    fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    }).then(res => {
        return res.json();
    }).then(res => {
        senderResponse(res);
    })

    return true
});

