function sendMessage() {

    let userInput = document.getElementById("userInput").value;

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML +=
        `<div class="user-message">${userInput}</div>`;

    fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },
        body: `msg=${userInput}`
    })

    .then(response => response.json())

    .then(data => {

        chatbox.innerHTML +=
            `<div class="bot-message">${data.response}</div>`;

        document.getElementById("userInput").value = "";

        chatbox.scrollTop = chatbox.scrollHeight;
    });
}