document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const logDiv = document.getElementById("log");
    const sendButton = document.querySelector("button");

    // Function to add a sent message to the log
    function addToLog(message) {
        const logEntry = document.createElement("p");
        logEntry.textContent = message;
        logDiv.appendChild(logEntry);
    }

    // Function to send a message to the server
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== "") {
            addToLog(`Sent: ${message}`);
            // Send the message to the server using an appropriate method.
            // For example, you can use Fetch API or XMLHttpRequest here.
            // Update this part to interact with your server.
            messageInput.value = "";
        }
    }

    // Event listener for the send button
    sendButton.addEventListener("click", sendMessage);

    // Add any additional logic for interacting with your server here.
});
